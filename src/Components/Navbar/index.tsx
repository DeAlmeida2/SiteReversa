import React from "react";

//import { Container } from './styles';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Reversa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#servicos">Serviços</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
    </>
  );
}

export default ColorSchemesExample;

