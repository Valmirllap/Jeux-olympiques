import { useState } from "react";
import axios from "axios";
// import styled from 'styled-components';

export default function Register() {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5432/register", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="nom" placeholder="Nom" onChange={handleChange} />
      <input name="prenom" placeholder="Prénom" onChange={handleChange} />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} />
      <button type="submit">Créer un compte</button>
      <p>{message}</p>
    </form>
  );
}

