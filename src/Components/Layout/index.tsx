import React from "react";

import { Container } from './styles'

import Navbar from "../Navbar";
import Content from "../Content";
import Footer from "../Footer";


const Layout: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <Content />
            <Footer />
        </Container>
        
    );
}

export default Layout;