import React from 'react'
import '../../assets/css/Home/AboutHome.css'
import { NavLink } from 'react-router-dom'
import aboutImg from '../../assets/images/about-photo.jpeg'

function AboutHome() {
  return (
    <div className='about-home-main container'>
      <div className="about-home-left">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-home-right">
        <p className='secondary-header'>About us</p>
        <p className='third-header'>We take your business so high, that even you will have to look down carefully to find the bottom. That’s how we are. Yeahh!!</p>
        <p className='fourth-header'>As your trusted digital partner, we are committed to bringing smart, personalized solutions customized to your unique challenges so that we can empower your business. Together let's lay a solid foundation for current needs and build pathways to a success and growth future.</p>
        <div className="">
          <button className="fill-btn-effect"> <NavLink to='/about'>Try us</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default AboutHome
