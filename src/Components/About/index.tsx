import React from "react";
import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/Sobre/Quemsomos">Quem Somos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Sobre/Ondeatuamos">Onde Atuamos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Sobre/Nossoproposito">Nosso propósito</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Sobre/Presenca">Redes Sociais</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;