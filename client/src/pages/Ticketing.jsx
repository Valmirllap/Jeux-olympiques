import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Ticketing (){

  const navigate = useNavigate();
  
  // Simuler l'état de connexion (à remplacer par contexte/auth réel)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleReserve = (offerName) => {
    if (!isAuthenticated) {
      alert("Vous devez vous connecter pour réserver.");
      navigate('/login');
    } else {
      // Ajoute au panier (logique fictive ici)
      console.log(`Offre "${offerName}" ajoutée au panier.`);
      alert(`Offre "${offerName}" ajoutée à votre panier !`);
    }
  };

  return (
    <PageContainer>
      <Title>Réservez vos billets pour les Jeux Olympiques</Title>
      <CardsContainer>
        <Card>
          <CardTitle>Offre Solo</CardTitle>
          <Price>49 €</Price>
          <Description>1 billet pour une journée complète</Description>
          <Button onClick={() => handleReserve("Solo")}>Ajouter au panier</Button>
        </Card>

        <Card>
          <CardTitle>Offre Duo</CardTitle>
          <Price>89 €</Price>
          <Description>2 billets pour partager l’expérience olympique.</Description>
          <Button onClick={() => handleReserve("Duo")}>Ajouter au panier</Button>
        </Card>

        <Card>
          <CardTitle>Offre Familiale</CardTitle>
          <Price>149 €</Price>
          <Description>4 billets pour une journée en famille.</Description>
          <Button onClick={() => handleReserve("Familial")}>Ajouter au panier</Button>
        </Card>
      </CardsContainer>
    </PageContainer>
  );
};



const PageContainer = styled.div`
  padding: 40px;
  background: #f5f5f5;
  text-align: center;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 30px;
  width: 280px;
  transition: transform 0.3s ease;
`;

const CardTitle = styled.h2`
  color: #003366;
  font-size: 1.5rem;
`;

const Price = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #222;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #1f2937;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #293649;
  }
`;