import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
    const navigate=useNavigate();

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
                    placeholder="공연을 검색하세요 🔍"
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    required
                />
                <div></div>
            </form>
        </Box>
    )
};

const Box=styled.div`
    margin:2.7rem;
    input{
        border:none;
        padding:0.2rem;
        &:focus{
            outline:none;
        }
    }
    div{
        width:12rem;
        margin:0 auto;
        border-bottom: 1px solid lightgrey;
    }
`;
export default Search;