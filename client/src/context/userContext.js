import {createContext, useContext, useEffect, useState} from 'react';
import {isUserLoggedIn} from '../api/user/user';

export const userContext=createContext(null);

export const UserContextProvider=({children})=>{
    
    const localUser=localStorage.getItem("ar-user");
    
    const [user,setUser]=useState(localUser);
    const [userEmail, setUserEmail]=useState("");

    useEffect(()=>{
        const unsubscribe=isUserLoggedIn()
        .then(resp=>{
            setUser(resp.username);
            setUserEmail(resp.email);
        })
        .catch(err=>{
            console.log(err);
        })
        
        return ()=>unsubscribe;
        
    },[]);
    
    return(
        <userContext.Provider value={{user, setUser, userEmail, setUserEmail}}>
            {children}
        </userContext.Provider>
    )
};

export const useUserContext=()=>useContext(userContext);