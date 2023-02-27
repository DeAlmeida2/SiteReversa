import React from "react";
import GlobalStyles from "../../../Styles/GlobalStyles";
import Footer from '../../../Components/Footer';
import About from '../../../Components/About';
import ButtonSaberMais from '../../../Components/ButtonSaberMais'


import { Container,
    Content,
 } from './styles'
    

const Quemsomos: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                        <About/>
                        <br></br>                              
                            <h1>CONHEÇA NOSSA HISTÓRIA</h1>                        
                            <div>
                            São mais de 6 anos de experiência no mercado ambiental, prestando consultoria para os mais diversos setores.
                            </div>
                            <br></br> 
                            <ButtonSaberMais/>
                            <h2 > △ </h2>  
                            <br></br>                               
                    </Content>
                <Footer/>
            </Container>
        </>
    );

}

export default Quemsomos;

/*Adicionar no h2 className="App-logo" */