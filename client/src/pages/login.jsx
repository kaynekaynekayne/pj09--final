import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../api/user/user';
import { useUserContext } from '../context/userContext';
import Button from '../components/button';
//css
import {TextField, FormControl, InputLabel, Input, IconButton, InputAdornment} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2';
import styled from 'styled-components';


const Login = () => {
    const navigate=useNavigate();
    const {setUser}=useUserContext();

    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [showPassword, setShowPassword]=useState(false);

    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            const resp=await login({email, password});
            if(!resp.error){
                Swal.fire({
                    icon: 'success',
                    text: resp.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                localStorage.setItem("ar-user",resp.username);
                setUser(resp.username);
                navigate("/");
            } else{
                Swal.fire({
                    icon: 'error',
                    text: resp.error,
                    showConfirmButton:false,
                    width:'20rem',
                    position:'top',
                })
            }
        }catch(err){
            Swal.fire({
                icon:"error",
                text: err.message,
                showConfirmButton:false,
                width:'20rem',
                position:'top',
            })
        }
    };

    return (
        <Container>
            <TextField
                variant="standard"
                className='form-control'
                label="이메일"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <FormControl 
                className="form-control" 
                variant="standard">
                <InputLabel>비밀번호</InputLabel>
                <Input 
                    label="비밀번호"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="start">
                        <IconButton 
                            edge="end"
                            onClick={()=>setShowPassword(prev=>!prev)}
                        >
                            {showPassword ?
                                <VisibilityIcon />
                            :
                                <VisibilityOffIcon />
                            }
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <div className='box'>
                <Button name="로그인" onClick={handleLogin}/>
            </div>
            <div className='box'>
                <span>계정이 없으십니까? </span>
                <Link to="/signup">            
                    <span>회원가입</span>
                </Link>
            </div>
        </Container>
    );
};

const Container=styled.div`
    width:100%;
    min-height:80vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding:0 30%;

    .box{
        margin-top:2rem;
    }
`;

export default Login;