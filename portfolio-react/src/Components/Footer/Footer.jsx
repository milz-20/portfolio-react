import React from 'react';
import './Footer.css'
import user_icon from './../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Milind</h1>
                <p>I am a frontend developer from pune and have an experience of creating smooth and responsive single page applications.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''></img>
                    <input type='email' placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>  
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ Milind Kelkar. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer