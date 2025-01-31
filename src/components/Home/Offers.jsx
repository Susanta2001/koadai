import React from 'react'
import '../../assets/css/Home/Offers.css'
import OffersImg from '../../assets/images/Rectangle.png'
import { NavLink } from 'react-router-dom'
function Offers() {
    return (
        <>
            <div className='offers-main'>
                <div className='container offers-main-inner'>
                    <div className='offers-main-inner-left'>
                        <h1 className='primary-header'>
                            Easy way to get full control of your tasks.
                        </h1>
                        <p className='fourth-header'>
                            Get full support from our team of Digital Marketing helping you with your tasks & weekly based calander.
                        </p>
                        <div className='offers-main-inner-left-btns'>
                            <button className='fill-btn-effect'><NavLink to='/pricing'>Check Plans</NavLink></button>
                            <button className='fill-btn-effect'>VIEW OFFERS</button>
                        </div>
                    </div>
                    <div className='offers-main-inner-right'>
                        <img src={OffersImg} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offers;