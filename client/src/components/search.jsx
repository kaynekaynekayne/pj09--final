import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../context/userContext';

const Search = () => {
    const navigate=useNavigate();
    const {user}=useUserContext();
    const [term, setTerm]=useState("");
    
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+term);
        setTerm("");
    }

    return (
        <Box>
            <form onSubmit={submitHandler}>
                <input 
                    placeholder={`${user ? user : "게스트"}님을 위한 공연 검색`}
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    required
                />
            </form>
        </Box>
    )
};

const Box=styled.div`
    margin:2.7rem;
    input{
        width:13rem;
        border:none;
        border-bottom: 1px solid lightgray;
        padding:0.2rem;
        &:focus{
            outline:none;
        }
    }
`;
export default Search;