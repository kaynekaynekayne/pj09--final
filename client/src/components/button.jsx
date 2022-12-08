import React from 'react'
import styled from 'styled-components';

const Button = ({name, onClick}) => {
    return (
        <Btn onClick={onClick}>{name}</Btn>
    )
};

const Btn=styled.button`
    padding:0.7rem;
    cursor:pointer;
    border:none;
    border-radius:0.4rem;
    color:white;
    background-color: ${(props) => props.theme.secondColor};
    &:focus{
        outline:0
    }
`;

export default Button;