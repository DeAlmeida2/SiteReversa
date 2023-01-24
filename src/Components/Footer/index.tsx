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
        <Nav.Link eventKey="https://www.instagram.com/reversameioambiente/">Instagram</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://lnkd.in/g2gaxjb">Linkedin</Nav.Link>
      </Nav.Item>
      <div>     
        <Nav.Item className="align-items: right;">
          <Nav.Link eventKey="CNPJ" disabled>
            46.585.963/0001-46
          </Nav.Link>
        </Nav.Item>
      </div>
      </Nav>
    </Container>
  );
}

export default BasicExample;
