import React from 'react'
import '../../assets/css/Home/Banner.css'
import bannerImg from '../../assets/images/bannerimg.png'
function Banner() {
  return (
    <div className='banner-main container'>
      <div className="banner-left">
        <h1 className='primary-header'>Easy way to get your business go booming</h1>
        <p className='primary-sentence'>We are a growing digital services company based in Siliguri and have been in business now for more than 3 months.</p>
      </div>
      <div className="banner-right">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
