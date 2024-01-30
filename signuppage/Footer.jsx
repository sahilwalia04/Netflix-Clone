import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='back1'>
        <div className="grid-container1">
            <div className="grid-item1-first"><Link className='li' >Questions? Call 000-800-919-1694</Link></div>
            <div className="grid-item1"><Link className='li'>FAQ</Link></div>
            <div className="grid-item1"><Link className='li'>Investor Relations</Link></div>
            <div className="grid-item1"><Link className='li'>Privacy</Link></div>
            <div className="grid-item1"><Link className='li'>Speed Test</Link></div>
            <div className="grid-item1"><Link className='li'>Help Centre</Link></div>
            <div className="grid-item1"><Link className='li'>Jobs</Link></div>
            <div className="grid-item1"><Link className='li'>Cookie Preferences</Link></div>
            <div className="grid-item1"><Link className='li'>Legal Notices</Link></div>
            <div className="grid-item1"><Link className='li'>Account</Link></div>
            <div className="grid-item1"><Link className='li'>Ways to Watch</Link></div>
            <div className="grid-item1"><Link className='li'>Corporate Information</Link></div>
            <div className="grid-item1"><Link className='li'>Only on Netflix</Link></div>
            <div className="grid-item1"><Link className='li'>Media Centre</Link></div>
            <div className="grid-item1"><Link className='li'>Terms of Use</Link></div>
            <div className="grid-item1"><Link className='li'>Contact Us</Link></div>
        </div>
    </div>
  )
}

export default Footer 