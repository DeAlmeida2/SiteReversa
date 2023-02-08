import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import Navbar from '../../Components/Navbar'
import Carousel from "../../Components/Carousel";
import Footer from '../../Components/Footer';
import CardDeck from "../../Components/CardDeck";

import { Container,
    Content,
 } from './styles'
    

const Servicos: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                        <br></br>
                        <br></br>
                        <h2 > △ </h2>                   
                            <h1>Serviços</h1>                        
                            <div>
                                Reversa Gestão Ambiental
                            </div>
                            <a
                                className="App-link"
                                href="https://www.infomoney.com.br/cotacoes/b3/indice/ico2/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Leia mais sobre Crédito de Carbono
                            </a>
                            <br></br>                            
                    <div>
                        <CardDeck/>
                    </div>     
                    <Carousel/>     
                    </Content>
                <Footer/>
            </Container>
        </>
    );

}

export default Servicos;

