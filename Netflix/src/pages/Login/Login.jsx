import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {
  const [signState,setSignState]=useState("Sign In")
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setloading]=useState(false);

  const userauth= async (e)=>{
    e.preventDefault();
    setloading(true)
    if(signState==='Sign In'){
      await login(email,password);
    }else{
      await signup(name,email,password)
    }
    setloading(false)
  }

  return (
    loading?<div className="login_spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='Login'>
        <img src={logo} className='login-logo' alt="" />   
        <div className="login-form">
          <h2>{signState}</h2>
          <form action="">
            { signState!=="Sign In" && 
            <input value={name} onChange={(e)=>{
              setName(e.target.value)
              }} type="text" placeholder='Your name' name="" id="name" /> }

            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}type="email" placeholder='Email' name="" id="email" />

            <input value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} type="password" placeholder='Password' name="" id="password" />

            <button onClick={userauth} type='submit'>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState==="Sign In" ?
              <p>New to Netflix? <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span></p> 
              : 
             <p>Alredy have account? <span onClick={()=> setSignState("Sign In")}>Sign In Now</span></p>}
            

          </div>
          </div>   
    </div>
  )
}

export default Login
