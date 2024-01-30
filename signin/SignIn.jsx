import React ,{useRef} from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../image/SignInimage.jpg'
const SignIn = () => {
  const email = useRef();
  const password = useRef();
   const navigate =useNavigate("");

   const handleNavigation = () => {
    navigate('/NetflixShow');  
  };

  const callref=()=>{
    console.log(email.current.value);
    console.log(password.current.value);
    if(email.current.value == "" || password.current.value == "")
    {
     alert("Enter the 'Email and Password'")
    }
    else
    {
      localStorage.setItem("email",email.current.value);
      localStorage.setItem("password",password.current.value);
    }
    localStorage.getItem("email")
    if(localStorage.getItem("email")== email.current.value || localStorage.getItem("password")==password.current.value)
    {
        handleNavigation();
    }
    else{
      alert("Enter the valid Email and Password")
    }
    
  }
  

  return (
    <div className='Signin1'>
        <div className='container1'>
            <img className='img' src={Image} alt="" />
             <div className='inner-container1'>
                 <h1><b>Sign In </b></h1>
                 < input type="text" className='text1' ref={email} placeholder='Email or phone number' /> <br />
                 <input type="password" placeholder='Password' className='text1' ref={password} /> <br />
                 <button className='Sign' onClick={callref}  >Sign In</button>
                 <p className='frgt'><Link className='frt'>Forget Password</Link></p>
                 <div className='foot'>
                    <input className='chk' type="checkbox" />
                    Remenber me <br /> <br />
                    New to Netflix?
                    <Link to="/" className='Sun'>Sign up now.</Link>
                 </div> <br /> 
                 <div className='footer'> 
                 This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. Learn more.
                 </div> <br />  

             </div>
        </div>
    </div>
  )
}

export default SignIn