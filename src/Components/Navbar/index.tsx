import React from "react";
//import { Container } from './styles';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="dark" variant="dark" className="fixed-top" >
      
        <Container>        
          <Navbar.Brand href="/Home">△ Reversa</Navbar.Brand>
          <Nav className="right">
            <Nav.Link href="/Sobre/Quemsomos">Sobre</Nav.Link>
            <Nav.Link href="/Servicos">Serviços</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>       
        </Container>        
      </Navbar>  
    </>
  );
}

export default ColorSchemesExample;

