import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useUserContext} from '../context/userContext';

const Header = () => {
    const {user,setUser}=useUserContext();

    return (
        <HeaderStyle>
            <ul>
                <Link to="/">
                    <li>around</li>
                </Link>
                <Link to="/setting">
                    <li className='profile'>{user}</li>
                    {/* <li><AccountCircleIcon /></li> */}
                </Link>
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
        align-items: center;
        margin-bottom:0;
        list-style:none;

    }
    a{
        text-decoration-line:none;
    }
    li{
        color:white;
    }

    .profile{
        width:1.6rem;
        height:1.6rem;
        border-radius:50%;
        text-align:center;
        background-color: blue;
    }
`;

export default Header;