import React from "react";

import { Container } from './styles'

import Navbar from "../Navbar";
import Content from "../Content";
//import Footer from "../Footer";

type Props = {
    children?: React.ReactNode
};


const Layout: React.FC<Props> = ( {children} ) => {
    return (
        <Container>
            <Navbar />
            <Content />
            {children}
            
        </Container>
        
    );
}

export default Layout;