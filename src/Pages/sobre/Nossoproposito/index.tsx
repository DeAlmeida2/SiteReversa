import React from "react";
import GlobalStyles from "../../../Styles/GlobalStyles";
import Footer from '../../../Components/Footer';
import About from '../../../Components/About';
import ButtonSaberMais from '../../../Components/ButtonSaberMais'


import { Container,
    Content,
 } from './styles'
    

const NossoProposito: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                        <About/>
                        <br></br>                              
                            <h1>NOSSO PROPÓSITO</h1>  
                            <h1>Missão</h1>
                            <div>
                            Fornecer a todos um serviços de qualidade, respeito e responsabilidade, por meio de soluções sustentáveis e inovadoras.  
                            </div>
                            <h1>Visão</h1>  
                            <div>
                            Ser reconhecida pela excelência e responsabilidade dos serviços prestados dentro da área de atuação e ser referência no mercado brasileiro, buscando a melhoria contínua e a inovação.
                            </div>
                            <h1>Valores</h1>                        
                            <div>
                            Comprometimento,
                            Qualidade,
                            Credibilidade,
                            Inovação, 
                            Ética e
                            Respeito.
                            </div>
                            <br></br> 
                            <ButtonSaberMais/>
                              
                    </Content>
                <Footer/>
            </Container>
        </>
    );

}

export default NossoProposito;

/*Adicionar no h2 className="App-logo" */