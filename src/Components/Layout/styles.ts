import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
    'NB'
    'CT'
    'FT';

    height: 100vh;


    /*
    *Layout
    * NB = Navbar
    * CT = Content
    */
`;