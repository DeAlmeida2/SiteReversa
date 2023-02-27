import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import Carousel from "../../Components/Carousel";
import Footer from '../../Components/Footer';
import About from '../../Components/About';


import { Container,
    Content,
 } from './styles'
    

const Sobre: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                        <br></br>
                        <br></br>
                        <About/>
                        <h2 > △ </h2>                   
                            <h1>Sobre</h1>                        
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
                        
                    </div>    
                     
                    <Carousel/>     
                    </Content>
                <Footer/>
            </Container>
        </>
    );

}

export default Sobre;

/*Adicionar no h2 className="App-logo" */