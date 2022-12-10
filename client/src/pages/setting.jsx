import React, { useState } from 'react'
import {useUserContext} from '../context/userContext';
import { updateProfile } from '../api/user/user';
import Button from '../components/button';
import Swal from 'sweetalert2';

const Setting = () => {
    const {user, setUser, userEmail}=useUserContext();
    const [newNickname, setNewNickname]=useState("");

    const handleUpdate=async()=>{
        try{
            const resp=await updateProfile({userEmail, newNickname});
            
            console.log(resp);  
            if(!resp.error){
            console.log(resp);  

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
                    icon: 'error',
                    text: resp.response.data.error,
                    showConfirmButton:false,
                    width:'20rem',
                    position:'top',
                })
            }    
        }catch(err){
            console.log(err);
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