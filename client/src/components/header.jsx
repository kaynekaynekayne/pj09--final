import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import styled from 'styled-components';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
    const {user}=useUserContext();

    return (
        <NavStyle>
            <ul>
                <li>
                    <Link to="/">around</Link>
                </li>
                <li>
                    {user ? 
                    <Link to="/setting">
                        <SettingsIcon fontSize="small"/>
                    </Link>
                    : 
                    <Link to="/login">
                        <LoginIcon fontSize="small"/>
                    </Link>
                    }
                </li>
            </ul>
        </NavStyle>
    );
};

const NavStyle=styled.nav`
    width:100%;
    max-height:3rem;
    background-color: ${(props) => props.theme.primaryColor};
    padding:0.7rem;

    ul{
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin:0;
    }

    a{
        color:white;
        text-decoration-line:none;
    }

    svg{
        margin:0;
        height:100%;
        /* vertical-align: middle; */
    }
`;

export default Header;