import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='nav-name'>Milind</h1>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar