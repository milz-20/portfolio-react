import React from 'react';
import './Hero.css';
import profile_pic from '../../assets/profile_pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_pic} alt=""></img>
        <h1><span>I'm Milind Kelkar, </span> frontend developer based in India</h1>
        <p>Hey, this is my portfolio website, created to help you navigate through my learnings :</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero