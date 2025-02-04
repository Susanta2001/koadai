import React from 'react'
import '../../assets/css/Home/Banner.css'
import bannerImg from '../../assets/images/bannerimg.png'
import useInView from '../Additionals/useInView'

function Banner() {

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  return (
    <div className='banner-main container'>
      <div className='banner-left'>
        <h1 className={`primary-header slide-in-left ${inView2 ? 'show' : ''}`} ref={ref1}>Easy way to get your business go booming</h1>
        <p ref={ref2} className={`primary-sentence slide-in-right ${inView1 ? "show" : ""} `}>We are a growing digital services company based in Siliguri and have been in business now for more than 3 months.</p>
      </div>
      <div className={`banner-right slide-in-bottom ${inView3 ? 'show' : ''}`} ref={ref3}>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
