import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import EmailInput1 from './component/signuppage/EmailInput1';
import NextSignup from './component/nextSignup/NextSignup';
import SignIn from './component/signin/SignIn';
import NetflixShow from './component/mainpage/NetflixShow';

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
    <BrowserRouter>
     <Routes>
      
        <Route path='/NextSignup' element={<NextSignup/>}/> 
        <Route path='/' element={<EmailInput1/>}/>      
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/NetflixShow' element={<NetflixShow/>}/>
      </Routes>     
    
    </BrowserRouter>
    </>
  )
}

export default App
