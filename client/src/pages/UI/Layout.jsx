// src/components/Layout.tsx
import React from "react";
import styled from "styled-components";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Home from "../Home";


const Layout = ({ children }) => {
  return (
    <Container>
      <Header/>
      <Main>{children}</Main>
      <Footer/>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;


export default Layout;
