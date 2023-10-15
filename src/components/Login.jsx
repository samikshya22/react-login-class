import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    function handleLogin(){
        if(userName==="samu" && password==="123"){
        navigate("/home");
    }
    }
   
  return (
    <div>
        <form className="form">
        <input type="text" placeholder="Username" onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
      

    </div>
  )
}

export default Login