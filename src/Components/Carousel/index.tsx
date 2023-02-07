import React from 'react'
import { Container } from './styles'
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div>
    <Container>    
      <Carousel>      
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/2534/7488/articles/semana-do-meio-ambiente_880x.jpg?v=1648732737"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Preservação</h3>
            <p>Aumento da diversidade da oferta de energia, diminuição de emissões atmosféricas de poluentes e diminuição do desmatamento são algumas vantagens da energia renovável.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://static.significados.com.br/foto/0d59-tap-3507255-1920.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Meio Ambiente</h3>
            <p>Estamos focados em projetos de pesquisa especializada em energia renovável, mapeamento de resíduos e projetos ecológicos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://static.significados.com.br/foto/meio-ambiente-fb.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Plantando um Futuro Melhor</h3>
            <p>
             Platando soluções sustentáveis para um futuro melhor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>        
      </Carousel>     
    </Container>
    </div>
  );
}

export default UncontrolledExample;