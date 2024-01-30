import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './EmailInput.css';
import yourImage from "../image/logo.png"
import backimage from "../image/netfliximage.jpg"
import VideoBack from "../video/videoback.mp4"
import divimage from "../image/hero-image.webp"
import Question from './Question';
import Footer from './Footer';
import Demo from './demo';
import { useNavigate } from 'react-router-dom';
  
const EmailInput1 = () => {
  const email =useRef()
  const navigate = useNavigate("");

  const handleNavigation = () => {

    navigate('/NextSignup');
   
  };
 const callRef=()=>{
    console.log(email.current.value);
  
    if(email.current.value=="")
    {
      alert("First filled 'Email address");
      
    }
    else{
      localStorage.setItem("email",email.current.value);   
      handleNavigation();
    }
    
  }
  return (
    <div>
        <>
        
    <div className='Background'>
      
      <img className='bg' src={backimage} alt="#" />
      <img className='logo' src={yourImage} alt="#" />
      <Link className='Signin' to="/SignIn">Sign In</Link>
      <p className='text'><h1>Unlimited movies, TV shows and more</h1>
      Watch anywhere. Cancel anytime. <br />
       Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='overlay'>
        <input className='input' type="email" placeholder='Email address' ref={email} />
        <input type="button" id='sign' onClick={callRef} value="Get Started" />
      </div>
    </div>
    <hr className='hr' />
    <div className='videodiv'>   
      <video src={VideoBack} className='video'  autoPlay loop muted></video>
      <p className='text2'><h1>Watch everywhere</h1>
      Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV. <br /> <br /> <br /><br />
      <h1>Enjoy on your TV</h1>
      Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players and more.</p>
    </div>
    <hr className='hr1' />
    <div className='nextdiv'>
         <img className='img2' src={divimage} alt="#" />
         <p className='text3'><h1>Create profiles for kids</h1>
         Send children on adventures with their favourite <br /> characters in a space made just for them—free with <br /> your membership.
         </p>
    </div>
    <hr className='hr1' />
    <Question/>
    {/* <Demo/> */}
    <hr className='hr1' />
    <Footer/>
    </>
    </div>
  )
}

export default EmailInput1