import React, { useState } from 'react'
import {useUserContext} from '../context/userContext';
import { updateProfile } from '../api/user/user';
import Button from '../components/button';

const Setting = () => {
    const {user, userEmail}=useUserContext();
    const [newNickname, setNewNickname]=useState(user);

    const handleUpdate=async()=>{
        const resp=await updateProfile({userEmail, newNickname});
        if(resp.statusText==="OK"){
            console.log(resp);
        } else{
            console.log(resp);
        }
    };

    return (
        <div>
            <h5>안녕, {user}</h5>
            <input 
                placeholder="새로운 닉네임"
                value={newNickname}
                onChange={(e)=>setNewNickname(e.target.value)}
            />
            <Button name="수정" onClick={handleUpdate}/>
        </div>
    )
}

export default Setting