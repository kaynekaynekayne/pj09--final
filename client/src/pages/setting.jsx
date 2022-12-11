import React, { useState } from 'react'
import {useUserContext} from '../context/userContext';
import { updateProfile } from '../api/user/user';
import Button from '../components/button';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const Setting = () => {
    const {user, setUser, userEmail}=useUserContext();
    const [newNickname, setNewNickname]=useState("");
    
    const handleUpdate=async()=>{
        
        const resp=await updateProfile({userEmail, newNickname});
        
        if(resp.statusText==="OK"){
            Swal.fire({
                icon: 'success',
                text: resp.data.msg,
                showConfirmButton: false,
                timer: 1500
            });
            localStorage.setItem("ar-user",newNickname);
            setUser(newNickname);
        } else{
            Swal.fire({
                icon: 'warning',
                text: resp.response.data.error || resp,
                showConfirmButton:false,
                width:'20rem',
                position:'top',
            })
        }
    };

    return (
        <Container>
            <h5>안녕하세요, {user}님</h5>
            <input 
                placeholder="새로운 닉네임"
                value={newNickname}
                onChange={(e)=>setNewNickname(e.target.value)}
                maxLength="6"
                minLength="1"
                required
            />
            <Button name="수정" onClick={handleUpdate}/>
        </Container>
    )
};

const Container=styled.div`
    padding:5rem;

    input{
        padding:0.7rem;
        margin-top:2rem;
        border:1px solid lightgray;

        &:focus{
            outline:0;
        }
    }
`;

export default Setting