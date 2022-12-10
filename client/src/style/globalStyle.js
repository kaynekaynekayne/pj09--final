import { createGlobalStyle } from "styled-components"

export const GlobalStyles=createGlobalStyle`
    body{
        font-family: 'Raleway', sans-serif;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration: none;
        color:inherit;
        list-style:none;
    }

    ::-webkit-scrollbar{
    width:0.15rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.secondColor};
    }
    ::-webkit-scrollbar-track {
        background-color: #3c3c3c;
    } 
`;