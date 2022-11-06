import React from 'react';
import { Link } from 'react-router-dom';
import {useUserContext} from '../context/userContext';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const {user}=useUserContext();

    return (
        <HeaderStyle>
            <ul>
                <li>
                    <Link to="/">around</Link>
                </li>
                <li>
                    <Link to="/setting">
                        <AccountCircleIcon />
                    </Link>
                </li>
            </ul>
        </HeaderStyle>
    );
};

const HeaderStyle=styled.header`
    width:100%;
    padding:0.8rem;
    background:rgb(54, 81, 254);

    ul{
        display:flex;
        justify-content: space-between;
    }
    li{
        color:white;
    }
`;

export default Header;