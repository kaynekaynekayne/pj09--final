import React, { useState } from 'react'
import {useUserContext} from '../context/userContext';
import { updateProfile } from '../api/user/user';
import Button from '../components/button';

const Setting = () => {
    const {user}=useUserContext();
    const [newNickname, setNewNickname]=useState(user);

    const handleUpdate=async()=>{
        const resp=await updateProfile({newNickname})
    }
    return (
        <div>
            <h5>안녕, {user}</h5>
            <input 
                placeholder="새로운 닉네임"
            />
            <Button name="수정" />
        </div>
    )
}

export default Setting