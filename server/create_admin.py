from main import app
from models import db, User
import bcrypt

with app.app_context():
    if not User.query.filter_by(email="admin@site.com").first():
        hashed_pw = bcrypt.hashpw(b"admin123", bcrypt.gensalt())
        admin_user = User(
            nom="Admin",
            prenom="Root",
            email="admin@site.com",
            password=hashed_pw,
            secret_key="admin-secret-key",
            role="admin"
        )
        db.session.add(admin_user)
        db.session.commit()
        print("✅ Utilisateur admin créé avec succès.")
    else:
        print("ℹ️ L'admin existe déjà.")
