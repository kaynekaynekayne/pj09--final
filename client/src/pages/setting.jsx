import React,{ useState }  from 'react'
import styled from 'styled-components';
import {Button, TextField, FormControl, InputBase,InputLabel, Input, IconButton, InputAdornment} from '@mui/material';
import { useUserContext } from '../context/userContext';
import { updateProfile } from '../api/user/user';

const Setting = () => {
    const {user, email}=useUserContext();
    const [newNickname,setNewNickname]=useState(user);

    const handleUpdate=async()=>{
        const resp=await updateProfile({
            email,
            newNickname});
        console.log(resp);
        if(resp.statusText==="OK") {
            console.log(resp.data.message);
        } else{
            console.log(resp.response.data.message)
        }
    };

    return (
        <MyPage>
            <label htmlFor="닉네임">닉네임</label>
            <input 
                id="닉네임"
                value={newNickname.replace(/\"/gi, "")}
                onChange={(e)=>setNewNickname(e.target.value)}
            />
            <Button 
                variant="contained"
                onClick={handleUpdate}>저장</Button>
        </MyPage>
    )
}

const MyPage=styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding-top: 4rem;
    margin:0 auto;

    input{
        padding:1rem;
        border:1px solid lightgray;
        border-radius:0.2rem;
        margin-bottom: 3rem;
        &:focus {
            outline:none;
        }
    }
    button{
        width:100%;
    }
`;

export default Setting;