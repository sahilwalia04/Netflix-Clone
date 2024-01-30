import React, { useEffect, useRef } from 'react';
import './Question.css';
import { useNavigate } from 'react-router-dom';


// const[action,setAction]=useState("click");
const Question = () => {
  
  useEffect(() => {
    const toggle = document.querySelectorAll('.toggle');
    const wrap = document.querySelectorAll('.wrap');

    toggle.forEach((t, index) => {
      let isPlus = false;

      wrap[index].addEventListener('click', () => {
        t.className = isPlus ? 'toggle' : 'toggle open';
        isPlus = !isPlus;
      });
    });
  }, []);
   

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
  };
  
  return (
    <>
      <div className='backg'>
        <h1 className='h1'>Frequently Asked Questions </h1>
        <div className='grid-container'>
          <div className="grid-item"  >What is Netflix?  <div className="wrap"  ><div className="toggle"></div></div></div>
          <div className="grid-item">How much does Netflix cost? <div className="wrap"><div className="toggle"></div></div></div>
          <div className="grid-item">Where can I watch? <div className="wrap"><div className="toggle"></div></div> </div>
          <div className="grid-item">How do I cancel? <div className="wrap"><div className="toggle"></div></div></div>
          <div className="grid-item">What can I watch on Netflix? <div className="wrap"><div className="toggle"></div></div></div>
          <div className="grid-item">Is Netflix good for Kids? <div className="wrap"><div className="toggle"></div></div></div>
          <p className='para'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='signup'>
            <input className='input' type="email" placeholder='Email address' ref={email} />
            <input type="button" id='sign' onClick={callRef} value="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
