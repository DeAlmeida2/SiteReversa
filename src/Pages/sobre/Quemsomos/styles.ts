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

    > h1 {
        align-items: right;
        text-align: right;
        
    }

    > h2 {
        color: #b8ffc3;
        font-size: 800%;
        cursor: pointer;
        
    }
`;