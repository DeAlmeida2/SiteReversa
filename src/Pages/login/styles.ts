import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    background-color: #282c34;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    > h2 {
        color: #b8ffc3;
        font-size: 150%;
        cursor: pointer;
    }
`;

export const Form = styled.div`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: #F5F5F5;
`;

export const FormTitle = styled.div`
    text-align: left;
    font-weight: bold;
    color: black;
    margin-bottom: 40px;

    &::after {
        content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid #FF6961;
    }
`;

