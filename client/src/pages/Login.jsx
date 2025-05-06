import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [form, setForm] = useState({email: "", password: ""});
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5432/login", form);
      setToken(res.data.token);
      setMessage("Connexion Réussi !");
    } catch (err) {
      setMessage(err.response?.data?.error || "erreur inconnue");
      console.log(token)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} />
      <button type="submit">Se connecter</button>
      <p>{message}</p>
    </form>
  )
}
