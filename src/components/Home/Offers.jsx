import React from 'react'
import '../../assets/css/Home/Offers.css'
import OffersImg from '../../assets/images/Rectangle.png'
import { NavLink } from 'react-router-dom'
import useInView from '../Additionals/useInView'
function Offers() {
    const [ref1, inView1] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.2 });
    const [ref3, inView3] = useInView({ threshold: 0.2 });
    return (
        <>
            <div className='offers-main'>
                <div className='container offers-main-inner'>
                    <div className='offers-main-inner-left'>
                        <h1 className={`primary-header slide-in-left ${inView1 ? 'show' : ''}`} ref={ref1}>
                            Easy way to get full control of your tasks.
                        </h1>
                        <p className={`fourth-header slide-in-right ${inView2 ? 'show' : ''}`} ref={ref2}>
                            Get full support from our team of Digital Marketing helping you with your tasks & weekly based calander.
                        </p>
                        <div className={`offers-main-inner-left-btns slide-in-bottom ${inView3 ? 'show' : ''}`} ref={ref3}>
                            <button className='fill-btn-effect'><NavLink to='/pricing'>Check Plans</NavLink></button>
                            <button className='fill-btn-effect'>VIEW OFFERS</button>
                        </div>
                    </div>
                    <div className={`offers-main-inner-right slide-in-right ${inView2 ? 'show' : ''}`} ref={ref2}>
                        <img src={OffersImg} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offers;