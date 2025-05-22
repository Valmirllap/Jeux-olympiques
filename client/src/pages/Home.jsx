// src/pages/Home.tsx
import React from "react";
import styled from "styled-components";
import JeuxOlympiques from "../assets/Jeux-olympiques-home.jpg";
import Milan from "../assets/Milan-olympiques.jpg";
import La28 from "../assets/LA28.jpg";
import AlpesFrance from "../assets/Alpes-Français.jpg";
import Brisbane from "../assets/Brisbane.jpg";
import SaltLake from "../assets/Salt-Lake-City.jpg";

export default function Home() {
  return (
    <>
      <Hero>
        <h1>Jeux Olympiques 2024</h1>
        <p>Rejoignez-nous pour célébrer l'esprit du sport, l'excellence et l'unité mondiale.</p>
      </Hero>

      <Section>
        <h2>À propos</h2>
        <p>
          Les Jeux Olympiques réunissent les meilleurs athlètes du monde pour une compétition inoubliable.
        </p>
      </Section>

      <Section>
        <h2>TOUS LES JEUX OLYMPIQUES À VENIR</h2>
        <CardsWrapper>
          <Card>
            <CardImage src={Milan} alt="Milano Cortina 2026" />
            <CardTitle>Milano Cortina 2026</CardTitle>
          </Card>
          <Card>
            <CardImage src={La28} alt="LA28" />
            <CardTitle>LA28</CardTitle>
          </Card>
          <Card>
            <CardImage src={AlpesFrance} alt="Alpes françaises 2030" />
            <CardTitle>Alpes françaises 2030</CardTitle>
          </Card>
          <Card>
            <CardImage src={Brisbane} alt="Alpes françaises 2030" />
            <CardTitle>Brisbane 2032</CardTitle>
          </Card>
          <Card>
            <CardImage src={SaltLake} alt="Alpes françaises 2030" />
            <CardTitle>Salt Lake City-Utah 2034</CardTitle>
          </Card>
        </CardsWrapper>
      </Section>
      </>
  );
};


const Hero = styled.section`
  background: url(${JeuxOlympiques}) center/cover no-repeat;
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-top: 100px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

const Section = styled.section`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  padding: 1rem;
`;
