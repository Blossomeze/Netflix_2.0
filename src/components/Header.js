import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import avatar from '../assets/avatar.png'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  const[show, handleShow] = useState(false);
  const transitionHeader = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener('scroll', transitionHeader)
  }, []);

  return (
    <div className={`header ${show && 'header_black'}`}>
        <div className='header_contents'>
            <Link to="/"><img className='logo' src={logo} alt="Netflix Logo" /></Link>
            <Link to="/profile"><img className='avatar' src={avatar} alt="Avatar" /></Link>
        </div>
    </div>
  )
}

export default Header
