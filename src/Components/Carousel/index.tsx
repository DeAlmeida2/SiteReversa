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
            <h3>Primeira Imagem</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://static.significados.com.br/foto/0d59-tap-3507255-1920.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Segunda Imagem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://static.significados.com.br/foto/meio-ambiente-fb.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Terceira Imagem</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>        
      </Carousel>     
    </Container>
    </div>
  );
}

export default UncontrolledExample;