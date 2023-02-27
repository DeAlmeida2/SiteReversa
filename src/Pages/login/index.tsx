import React from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import Input from "../../Components/Input";


import { Container,
    Content,
    Form,
    FormTitle,
 } from './styles'
    

const Home: React.FC = () => {
    return (
        <>
            <Container>
                    <Content>
                        <GlobalStyles/>
                                                                    
                            <Form>
                            <FormTitle>Entrar</FormTitle>
                                <Input
                                    type="email"
                                    placeholder="e-mail"
                                    required />
                                <Input
                                    type="password"
                                    placeholder="senha"
                                    required/>

                                <button type="submit">Acessar</button>
                            </Form>                       
                    </Content>               
            </Container>
        </>
    );

}

export default Home;

/*Adicionar no h2 className="App-logo" */