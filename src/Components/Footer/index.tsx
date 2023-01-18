import React from "react";
import { Container } from './styles'

import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (
    <Container>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Instagram">Instagram</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Linkedin">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="CNPJ" disabled>
          CNPJ
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
  );
}

export default BasicExample;
