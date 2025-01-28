import React, { useEffect } from 'react';
import '../../assets/css/Home/Features.css';
import featureImg from '../../assets/images/Featuresimg.png';

function Features() {
  useEffect(() => {
    const interval = setInterval(() => {
      const slider = document.querySelector('.slider');
      slider.appendChild(slider.firstElementChild);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='features-main'>
      <div className="features-upper container">
        <div className="f-u-left">
          <h1>With extensive research and curation we publish your content on the internet. Nothing misses from our end</h1>
          <p>You can rest easy because we are here to offer you some of the best features that you can ever think of.</p>
        </div>
        <div className="f-u-right">
          <img src={featureImg} alt="" />
        </div>
      </div>
      <div className="features-lower container">
        <div className="slider">
          <div className="slide">Card 1</div>
          <div className="slide">Card 2</div>
          <div className="slide">Card 3</div>
          <div className="slide">Card 4</div>
        </div>
      </div>
    </div>
  );
}

export default Features;