import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // initial state is closed
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
     useEffect(() => {
    const menu = document.querySelector('.menu');
    if (isOpen) {
      menu.classList.add('open');
    } else {
      menu.classList.remove('open');
    }
  }, [isOpen]);
  return (
    <>
      <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo"  />
      </div>
      <nav className='menu'>
        <ul className='links'>
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="button-info">
        <button className='login'>Login</button>
        <button className='register'>Register</button>
      </div>
        <GiHamburgerMenu class="icon" onClick={toggleMenu}/>
   
    </div>
    </>
  )
}

export default Header
