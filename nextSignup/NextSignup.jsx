import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import './NextSignup.css'
import Logo from "../image/logo.png"
const NextSignup = () => {

  {var Email=localStorage.getItem("email")
  console.log(Email);
}
const password =useRef()
const callRef=()=>{
  console.log(password.current.value);

  if(password.current.value=="" )
  {
    alert("First filled 'Password address");
    
  }
  else{
    localStorage.setItem("passwprd",password.current.value);   
    
  }
  
}
  return (
    <>
    <div className='navbar'>
      <img className='logo2' src={Logo} alt="#" /> 
      <Link className='sign' to="/SignIn"> <b>Sign IN</b></Link>
    </div>
    <hr className='hr4' />
      <div className='container'>
        <div className='inner-container'>
          STEP 1 OF 3
          <h1>Welcome back! <br />
            Joining Netflix is easy.</h1>
          <p>Enter your password and you'll be watching in no time.</p>
          <p>Email <br />
          <b>{Email}</b></p>
          <input className='pasd' type="password" ref={password} placeholder='Enter your password' /><br />
          <div className='forget'>
          <Link className='forgetpassword' to="" >Forgot your password?</Link> <br />
          </div>
           <button className='next'>
          <Link className='inner-next' onClick={callRef}  to="">Next</Link>
           </button>

        </div>
      </div>
      {/* <Link className='link' to="/">Back Home</Link> */}
    </>
  )
}

export default NextSignup