import styled from "styled-components";
import { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: translateX(-10px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   > div {
       margin: 10px;
       border-radius: 10px;
       
       cursor: pointer;
       transition: all .2s;

       position: relative;
       animation: ${animate} .5s ease;
    
    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }
    }
`;