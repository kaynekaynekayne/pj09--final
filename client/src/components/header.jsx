import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    return (
        <HeaderStyle>
            <Link to="/">
                <span>around</span>
            </Link>
        </HeaderStyle>
    );
};

const HeaderStyle=styled.header`
    width:100%;
    padding:0.8rem;
    background:rgb(54, 81, 254);

    span{
        color:white;
    }
    a{
        text-decoration-line:none;
    }
`;

export default Header;