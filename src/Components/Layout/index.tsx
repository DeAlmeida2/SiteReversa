import React from "react";

import { Container } from './styles'

import Navbar from "../Navbar";
import Content from "../Content";
import Footer from "../Footer";

type Props = {
    children?: React.ReactNode
};


const Layout: React.FC<Props> = () => {
    return (
        <Container>
            <Navbar />
            <Content />
            <Footer />
        </Container>
        
    );
}

export default Layout;