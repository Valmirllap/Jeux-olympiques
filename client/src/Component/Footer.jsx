// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Title>Navigation</Title>
          <Link href="/">Home</Link>
          <Link href="/ticketing">Ticketing</Link>
          <Link href="/login">Se connecter</Link>
          <Link href="/cart">Panier</Link>
        </Column>

        <Column>
          <Title>Contact</Title>
          <Link href="mailto:contact@monsite.com">contact@jeuxolympiques.com</Link>
          <Link href="tel:+33123456789">+33 1 23 45 67 89</Link>
        </Column>

        <Column>
          <Title>Suivez-nous</Title>
          <SocialIcons>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </SocialIcons>
        </Column>
      </FooterContent>

      <FooterBottom>
        &copy; {new Date().getFullYear()} Jeux olympiques. Tous droits réservés.
      </FooterBottom>
    </FooterContainer>
  );
}



const FooterContainer = styled.footer`
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 2rem 1.5rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const Column = styled.div`
  flex: 1 1 200px;
  min-width: 200px;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #111827;
`;

const Link = styled.a`
  display: block;
  color: #4b5563;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    color: #2563eb;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;

  a {
    color: #4b5563;

    &:hover {
      color: #2563eb;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 2rem;
`;