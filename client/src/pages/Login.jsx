import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post("http://localhost:5050/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      setMessage("Connexion Réussi !");
      if (res.data.role === "admin") {
        navigate('/cart')
      } else {
        navigate('/ticketing')
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "erreur inconnue");
    }
  };

  return (
    <Container>
      <ContainerForm>
        <Title>Se connecter</Title>
        <form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <Input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} required />
          <Button type="submit">Connexion</Button>
        </form>
        {message && <Message error={message.includes("erreur") || message.includes("invalides")}>{message}</Message>}
      </ContainerForm>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  height: 80vh;
`;

const ContainerForm = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background-color: white;
`

const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: #1f2937;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #293649;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${props => (props.error ? 'red' : 'green')};
  text-align: center;
`;