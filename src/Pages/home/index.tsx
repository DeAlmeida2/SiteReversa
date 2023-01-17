import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import Navbar from '../../Components/Navbar'
import Carousel from "../../Components/Carousel";
import Footer from '../../Components/Footer'

import { 
    Container,
    Content,
   } from "./styles";


const Home: React.FC = () => {
    return (
        <>
        <Navbar/>

            <Container>
            

                <Content>
                    <GlobalStyles/>

                    <Carousel/>
                        <h1>Reversa</h1>
                        
                        <div>
                            Reversa Gestão Ambiental
                        </div>
                        <a
                            className="App-link"
                            href="https://www.infomoney.com.br/cotacoes/b3/indice/ico2/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Leia mais sobre crédito de Carbono
                        </a>
                        
                </Content>
                <Footer/>
            </Container>
        </>
    );

}

export default Home;