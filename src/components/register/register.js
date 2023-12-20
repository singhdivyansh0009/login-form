import React from 'react'
import { useState } from 'react'
import "./register.css"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const Register = () =>{
    const navigate =  useNavigate();
    const [user,setuser] = useState({
        email:'',
        name:'',
        password:'',
        confirmPassword:''
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
const submit = ()=>{
    const {name,email,password,confirmPassword}=user
    if(name && email && password && (password === confirmPassword)){
        axios.post('https://my-app-server-7bf4.onrender.com/register',user)
        .then(res => alert(res.data.message))
        .then(navigate('/'))
    }
}
    return (
        <div className='Register'>
        <h1>Register</h1>
        <input type="text"name ="name" value={user.name} onChange={handlechange} placeholder='enter your name'></input>
        <input type="text" name ="email" value={user.email} onChange={handlechange}placeholder='enter your email'></input>
        <input type="password" name ="password" value={user.password} onChange={handlechange}placeholder='enter the password'></input>
        <input type="password" name ="confirmPassword" value={user.confirmPasswordS} onChange={handlechange}placeholder='confirm the password'></input>
        <div className='button' onClick={submit}>Register</div>
        <div>or</div>
        <div className='button' onClick={() => navigate('/')}>Login</div>
        </div>
    )
}
export default Register;