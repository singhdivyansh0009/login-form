import React from 'react'
import "./homepage.css"
import { useNavigate } from 'react-router-dom'
const Homepage = (props) =>{
   const navigate = useNavigate()
   const user = props.user;
   console.log(user)
    return (
       <div className='container'>
          <h1>Welcome {user.name} to our website!</h1>
          <div className='logout' onClick = {()=>navigate('/')}>logout</div> 
       </div>
    )
}

export default Homepage;