import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from './styles'

function CardDeck() {
  return (
    <>
      <Container>
        <div>
        {[
          'Light',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Novos Serviços</Card.Header>
            <Card.Body>
              <Card.Title>Desenvolvimento</Card.Title>
              <Card.Text>
                Somos uma empresa que sempre está em busca de novas tecnologias.
              </Card.Text>      
            </Card.Body>
            <Card.Link href="Servicos">Conheça nossos Serviços</Card.Link>
          </Card>
        ))}
        </div>
        <div>
        {[
          'Dark',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Meio Ambiente</Card.Header>
            <Card.Body>
              <Card.Title>Gestão Ambiental</Card.Title>
              <Card.Text>
              Atendimento legislativo em diferentes segmentos da Engenharia.
              </Card.Text>
            </Card.Body>
            <Card.Link href="Servicos">Saiba mais Sobre nós</Card.Link>
          </Card>
        ))}
        </div>
        <div>
        {[
          'Light',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Tecnologia</Card.Header>
            <Card.Body>
              <Card.Title> Especializada </Card.Title>
              <Card.Text>
                Voltada a Engenharia e Desenvolvimento de Softwre.
              </Card.Text>
            </Card.Body>
            <Card.Link href="Contato">Fale Conosco</Card.Link>
          </Card>
        ))}
        </div>
      </Container>
    </>
  );
}

export default CardDeck;



