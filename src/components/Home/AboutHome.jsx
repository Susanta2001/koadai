import React from 'react'
import '../../assets/css/Home/AboutHome.css'
import { NavLink } from 'react-router-dom'
import aboutImg from '../../assets/images/about-photo.jpeg'
import useInView from '../Additionals/useInView'

function AboutHome() {

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });

  return (
    <div className='about-home-main container'>
      <div ref={ref3} className={`slide-in-left about-home-left ${inView3 ? 'show' : ''}`}>
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-home-right">
        <p className='secondary-header'>About us</p>
        <p ref={ref2} className={`third-header slide-in-right ${inView2 ? 'show' : ''}`}>We are a digital marketing services company and will help you boost your company to the roof. We specialize innovating digital marketing strategies that drive growth and success for your business.</p>
        <p ref={ref1} className={`fourth-header slide-in-left ${inView1 ? 'show' : ''}`}>As your trusted digital partner, we are committed to bringing smart, personalized solutions customized to your unique challenges so that we can empower your business. Together let's lay a solid foundation for current needs and build pathways to a success and growth future.</p>
        <div className="">
          <button ref={ref4} className={`fill-btn-effect fade-up ${inView4 ? 'show' : ''}`}> <NavLink to='/about'>Try us</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default AboutHome
