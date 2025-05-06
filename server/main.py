from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from models import db, User
from config import Config
import re, bcrypt
import uuid


app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db.init_app(app)
jwt = JWTManager(app)


def is_password_strong(password):
  return len(password) >= 8 and re.search(r"[A-Z]", password) and re.search(r"\d", password)



@app.route("/register", methods=['POST'])
def register():
  data = request.get_json()
  print("Recu depuis postman:", data)
  nom = data.get("nom")
  prenom = data.get("prenom")
  email = data.get("email")
  password = data.get("password")
  
  if not all([nom, prenom, email, password]):
    return jsonify({"error": "Champs requis manquants"}), 400
  
  if not is_password_strong(password):
    return jsonify({"error": "Mot de passe trop faible"}), 400
  else:
    print("MDP OK")
  
  if User.query.filter_by(email=email).first():
    return jsonify({"error": "Utilisateur déjà existant"}), 400
  else:
    print("EMAIL OK")
  
  hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
  new_user = User(nom=nom, prenom=prenom, email=email,password=hashed_pw)
  
  db.session.add(new_user)
  db.session.commit()
  print("COmpte créer avec succés")
  
  return jsonify({"message": "compte créé avec succès"}), 201

@app.route("/login", methods=["POST"])
def login():
  data = request.get_json()
  email = data.get("email")
  password = data.get("password")
  
  user = User.query.filter_by(email=email).first()
  if not user or not bcrypt.checkpw(password.encode(), user.password):
    return jsonify({"error": "Identifiants invalides"}), 401
  
  access_token = create_access_token(identity=email)
  return jsonify({"token": access_token}), 200


if __name__ == "__main__":
    print("▶ Démarrage de l'application Flask...")
    with app.app_context():
        db.create_all()
        print("✅ Tables créées avec succès")
    print("✅ app.run() devrait se lancer maintenant")
    app.run(host="0.0.0.0", debug=True, port=5050)




