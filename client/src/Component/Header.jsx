// Header.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">Jeux Olympiques</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/ticketing">Ticketing</NavLink>
          <NavLink href="/login">Se connecter</NavLink>
          <NavLink href="/cart">
            Panier
            <CartBadge>3</CartBadge>
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </Nav>

      <MobileMenu open={menuOpen}>
        <NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink href="/ticketing" onClick={() => setMenuOpen(false)}>Ticketing</NavLink>
        <NavLink href="/login" onClick={() => setMenuOpen(false)}>Se connecter</NavLink>
        <NavLink href="/cart" onClick={() => setMenuOpen(false)}>
          Panier
          <CartBadge>3</CartBadge>
        </NavLink>
      </MobileMenu>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #1f2937;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: #2563eb;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  border-radius: 9999px;
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;