import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Servicos from '../Pages/Servicos';
import Contato from '../Pages/Contato';
import Login from '../Pages/Login';


const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
                <Route element = { <Home/> }  path="/Home"  />
                <Route element = { <Sobre/> }  path="/Sobre" />
                <Route element = { <Servicos/> }  path="/Servicos" />
                <Route element = { <Contato/> }  path="/Contato" />
                <Route element = { <Login/> }  path="/Login" />
        </Routes>
    </Layout>
    
);

export default AppRoutes;