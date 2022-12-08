import React from 'react';
import Swal from 'sweetalert2'
import {logout} from '../api/user/user';
import { useNavigate } from 'react-router-dom';
import {useUserContext} from '../context/userContext';
import styled from 'styled-components'; 
import Button from './button';

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
            localStorage.removeItem("ar-user");
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
                <Button name="로그아웃" onClick={handleLogout}/>
            }
        </FooterStyle>
    );
};

const FooterStyle=styled.footer`
    background-color: ${(props) => props.theme.primaryColor};
    width:100%;
    height:46.4px;
`;  

export default Footer;