import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {

    return (
        <HeaderStyle>
            <ul>
                <Link to="/">
                    <li>around</li>
                </Link>
                <Link to="/setting">
                    <li><AccountCircleIcon /></li>
                </Link>
            </ul>
        </HeaderStyle>
    );
};

const HeaderStyle=styled.header`
    width:100%;
    padding:0.8rem;
    background:rgb(54, 81, 254);
    color:white;
    ul{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:0;
    }
    a{
        text-decoration-line:none;
    }
`;

export default Header;