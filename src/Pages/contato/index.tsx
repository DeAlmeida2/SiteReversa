import React from "react";
//import GlobalStyles from "../../Styles/GlobalStyles";
import Footer from '../../Components/Footer';
import { Form, Button } from "react-bootstrap"

import { Container,
    Content,
 } from './styles'


export const Contato: React.FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <br></br>
                    <br></br>
                    <h2 > △ </h2>                   
                        <h1>Entre em Contato</h1>                        
                        <h1>
                            Reversa Gestão Ambiental
                        </h1>
                        <div> Ligue para nós (11) 9 5209- 8558 </div>
                        <div> Email: contato@reversaga.com.br </div>
                        <br></br>   
                        <br></br>                         
                   <div>
                   <Form>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Seu Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
                   </div>
                   <br></br>
                    <br></br>     
                   
                </Content>
                <Footer/>
            </Container>
        </>
    );

}

export default Contato;