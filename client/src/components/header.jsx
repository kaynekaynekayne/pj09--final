import React from 'react';
import { Link } from 'react-router-dom';
import {useUserContext} from '../context/userContext';
import styled from 'styled-components';

const Header = () => {
    const {user,setUser}=useUserContext();

    return (
        <HeaderStyle>
            <ul>
                <li>
                    <Link to="/" style={{color:'white', textDecoration:'none'}}>around</Link>
                </li>
                <li>
                    <Link to="/setting">
                        <div>{user}</div>
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
    color:white;
`;

export default Header;