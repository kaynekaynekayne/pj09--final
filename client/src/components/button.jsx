import React from 'react'
import styled from 'styled-components';

const Button = ({name, onClick}) => {
    return (
        <Btn onClick={onClick}>{name}</Btn>
    )
};

const Btn=styled.button`
    padding:0.75rem;
    cursor:pointer;
    border:none;
    color:white;
    background-color: ${(props) => props.theme.secondColor};
    &:focus{
        outline:0
    }
    &:hover{
        background-color: ${(props) => props.theme.thirdColor};

    }
`;

export default Button;