import React from 'react';
import Swal from 'sweetalert2'
import {logout} from '../api/user/user';
import { useNavigate } from 'react-router-dom';
import {useUserContext} from '../context/userContext';
import styled from 'styled-components'; 

const Footer = () => {
    const navigate=useNavigate();
    const {user,setUser}=useUserContext();

    const handleLogout=async()=>{
        const resp=await logout();
        if(!resp.error){
            Swal.fire({
                icon: 'success',
                text: resp.message,
                showConfirmButton: false,
                timer: 1500
            })
            localStorage.removeItem("user");
            setUser(null);
            navigate("/login");
        } else{
            console.log(resp);
            Swal.fire({
                icon: 'error',
                text: resp.error,
                showConfirmButton:false,
                width:'20rem',
                position:'top',
            })
        }
    }

    return (
        <FooterStyle>
            {user && 
                <button onClick={handleLogout}>로그아웃</button>
            }
        </FooterStyle>
    );
};

const FooterStyle=styled.footer`
    background-color:rgb(54, 81, 254);
    width:100%;
    height:42.25px;

    button{
        height:100%;
        color:white;
        background-color:rgb(43, 63, 195);
        padding:0.5rem;
        border-radius:0.5rem;
        cursor:pointer;
        border:none;
    }
`;  

export default Footer;