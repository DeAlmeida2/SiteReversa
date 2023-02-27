import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Servicos from '../Pages/Servicos';
import Contato from '../Pages/Contato';
import Login from '../Pages/Login';
import Quemsomos from '../Pages/Sobre/Quemsomos';
import Ondeatuamos from '../Pages/Sobre/Ondeatuamos';
import Nossoproposito from '../Pages/Sobre/Nossoproposito';
import Presenca from '../Pages/Sobre/Presenca';


const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
                <Route element = { <Home/> }  path="/Home"  />
                <Route element = { <Sobre/> }  path="/Sobre" />
                    <Route element = { <Quemsomos/> }  path="/Sobre/Quemsomos" />
                    <Route element = { <Ondeatuamos/> }  path="/Sobre/Ondeatuamos" />
                    <Route element = { <Nossoproposito/> }  path="/Sobre/Nossoproposito" />
                    <Route element = { <Presenca/> }  path="/Sobre/Presenca" />
                <Route element = { <Servicos/> }  path="/Servicos" />
                <Route element = { <Contato/> }  path="/Contato" />
                <Route element = { <Login/> }  path="/Login" />
        </Routes>
    </Layout>
    
);

export default AppRoutes;