import React from "react";
import GlobalStyles from "../../../Styles/GlobalStyles";
import Footer from '../../../Components/Footer';
import About from '../../../Components/About';
import ButtonSaberMais from '../../../Components/ButtonSaberMais'


import { Container,
    Content,
 } from './styles'
    

const Presenca: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                        <About/>
                        <br></br>                              
                            <h1>PRESENÇA NAS REDES SOCIAIS</h1>                        
                            <div>
                            A Reversa Também está nas redes sociais!

 

Aproveite para seguir e curtir nossas páginas para ficar por dentro de todos os nosso projetos.
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

export default Presenca;

/*Adicionar no h2 className="App-logo" */