import React from "react";
import GlobalStyles from "../../../Styles/GlobalStyles";
import Footer from '../../../Components/Footer';
import About from '../../../Components/About';
import ButtonSaberMais from '../../../Components/ButtonSaberMais'


import { Container,
    Content,
 } from './styles'
    

const OndeAtuamos: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                        <About/>
                        <br></br>                              
                            <h1>SAIBA ONDE ESTAMOS</h1>                        
                            <div>
                            Temos o compromisso de prestar um serviço de qualidade, visando sempre a busca de novas tecnologias.
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

export default OndeAtuamos;

/*Adicionar no h2 className="App-logo" */