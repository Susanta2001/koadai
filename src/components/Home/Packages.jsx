import React,{useState} from 'react'
import '../../assets/css/Home/Packages.css'
import { NavLink } from 'react-router-dom';
function Packages() {
    const [active, setActive] = useState('card-one');

    const handleOnClick = (e) => {
        setActive(e); 
    }
    return (
        <>
            <div className='packages-main'>
                <div className='container packages-main-inner'>
                    <div className='packages-main-inner-upper'>
                        <h3>Start Your free Trial
                            today in just One click.</h3>
                        <p>We are all the same. We all will die in vain and you can do nothing about it. Hahaha!! That's life man. Either you deal with it or you can bust it somewhere where you want to.</p>
                        <button className='fill-btn-effect'><NavLink to='/pricing'>Get Quotation</NavLink></button>
                    </div>
                    <div className='packages-main-inner-lower'>
                        <div className={`packages ${active === 'card-one' ? 'pricing-active' : ''}`} onClick={() => handleOnClick('card-one')}>
                            <h3>Basic</h3>                          
                            <p>Get your free plan today only with all that you wish to
                                achieve can be achieved with our
                                plans. This is the best plan you can
                                get in the current market of India,
                                you will be really pleased with our
                                services as you deal with many that you dont need to. </p>
                            <p>10*6 Days Support</p>
                            <p>Special Customer Loyalty Bonuses</p>
                        </div>
                        <div className={`packages ${active === 'card-two' ? 'pricing-active' : ''}`} onClick={() => handleOnClick('card-two')}>
                        <h3>Standard</h3>                          
                            <p>Get your free plan today only with all that you wish to
                                achieve can be achieved with our
                                plans. This is the best plan you can
                                get in the current market of India,
                                you will be really pleased with our
                                services as you deal with many that you dont need to. </p>
                            <p>10*6 Days Support</p>
                            <p>Special Customer Loyalty Bonuses</p>
                        </div>
                        <div className={`packages ${active === 'card-three' ? 'pricing-active' : ''}`} onClick={() => handleOnClick('card-three')}>
                        <h3>Enterprise</h3>                          
                            <p>Get your free plan today only with all that you wish to
                                achieve can be achieved with our
                                plans. This is the best plan you can
                                get in the current market of India,
                                you will be really pleased with our
                                services as you deal with many that you dont need to. </p>
                            <p>10*6 Days Support</p>
                            <p>Special Customer Loyalty Bonuses</p>
                        </div>
                    </div>                  
                </div>
            </div>
        </>
    )
}
export default Packages;