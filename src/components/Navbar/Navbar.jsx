import React, { useState, useEffect } from "react";
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import navLogo from '../../assets/images/navLogo.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [displayOffCanvas, setDisplayOffCanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // function to handle offcanvas
  const handleOffCanvas = () => {
      setDisplayOffCanvas(true);
  }
  const handleCloseOffCanvas = () => {
      setDisplayOffCanvas(false);
  }
  return (
    <>̣
      <div className={`nav-bar d-flex justify-content-between align-items-center p-4 text-light position-fixed w-100 ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-right d-flex">
          <NavLink to='/' id='home'>Home</NavLink>
          <NavLink to='/about' id='about' order='2'>About</NavLink>
          <NavLink to='/services' id='services' order='3'>Services</NavLink>
          <NavLink to='/' id='logo' order='1'><img src={navLogo} alt="" /></NavLink>
          <NavLink to='/pricing' id='pricing' order='4'>Pricing</NavLink>
          <NavLink to='/contact' id='contact' order='5'>Contact</NavLink>
          <NavLink to='/blogs' id='contact' order='5'>Blogs</NavLink>
        </div>
      </div>
      <div className="nav-bar-mobile w-100">
        <div className="nav-bar-mobile-inner-left">
          <NavLink to='/' id='home' order='1'><img src={navLogo} alt="" /></NavLink>
        </div>
        <div className="nav-bar-mobile-inner-right">
          <i className='bx bx-menu' style={{ color: '#ffffff' }} onClick={handleOffCanvas}></i>
        </div>
      </div>
      <div className={`off-canvas ${displayOffCanvas ? 'show' : 'd-none'}`}>
        <div className="close-btn-div">
          <i className='bx bx-x' onClick={handleCloseOffCanvas}></i>
        </div>
        <div className="menu-items">
          <NavLink to='/' id='home' order='1'>Home</NavLink>
          <NavLink to='/about' id='about' order='2'>About</NavLink>
          <NavLink to='/services' id='services' order='3'>Services</NavLink>
          <NavLink to='/pricing' id='pricing' order='4'>Pricing</NavLink>
          <NavLink to='/contact' id='contact' order='5'>Contact</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
