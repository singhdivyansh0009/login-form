import React from 'react'
import { useState } from 'react'
import "./login.css"
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Login = (props) =>{
    const navigate =  useNavigate();
    const [user,setuser] = useState({
        email:'',
        password:''
    })
const handlechange = (e) =>{
   let currentValue = e.target.value;
   let currentName = e.target.name
    setuser({
         ...user,
         [currentName]:currentValue
    })
    console.log(user);
}
const submit = () =>{
    const {email,password} = user
    if(email && password){
        axios.post('https://my-app-server-7bf4.onrender.com/login',user)
        .then(res => {
            alert(res.data.message)
            if(!res.data.user)
               console.log("unsucessful login")
            else{
               props.onLoginSuccess(res.data.user);
               navigate('/homepage')
            }
        })
    }  
}
    return (
        <div className='login'>
        <h1>Login</h1>
        <input type="text" name='email' value={user.email} onChange={handlechange} placeholder='enter your email'></input>
        <input type="password" name='password'value={user.password} onChange={handlechange} placeholder='enter the password'></input>
        <div className='button' onClick={submit}>Login</div>
        <div>or</div>
        <div className='button' onClick={() => navigate('/register')}>Register</div>
     </div>
    )
}
export default Login;