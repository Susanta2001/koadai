import React, { useState } from 'react'
import '../../assets/css/Home/Packages.css'
import { NavLink } from 'react-router-dom';
import useInView from '../Additionals/useInView';
function Packages() {

    const [ref1, inView1] = useInView({ threshold: 0.2 });
    const [ref2, inView2] = useInView({ threshold: 0.2 });
    const [ref3, inView3] = useInView({ threshold: 0.2 });
    const [ref4, inView4] = useInView({ threshold: 0.2 });

    const [active, setActive] = useState('card-two');

    const handleOnClick = (e) => {
        setActive(e);
    }
    return (
        <>
            <div className='packages-main'>
                <div className='container packages-main-inner'>
                    <div className='packages-main-inner-upper'>
                        <h3 ref={ref1} className={`slide-in-left ${inView1 ? 'show' : ''}`}>Start Your free Trial
                            today in just One click.</h3>
                        <p ref={ref2} className={`slide-in-right ${inView2 ? 'show' : ''}`}>Get your customized qoutation today. Plans can be customized according to your needs and demands.</p>
                        <button ref={ref4} className={` fade-up fill-btn-effect ${inView4 ? 'show' : ''}`}><NavLink to='/pricing'>Get Quotation</NavLink></button>
                    </div>
                    <div ref={ref3} className={`packages-main-inner-lower slide-in-bottom ${inView3 ? 'show' : ''}`}>
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