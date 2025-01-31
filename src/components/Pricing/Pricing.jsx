import React, {useState} from 'react'
import '../../assets/css/Pricing/Pricing.css';   

function Pricing() {
    const [packageType, setPackageType] = useState('Branding');

    const handlePackageButtonClick = (type) => {
        if (type === 'Branding') {
            setPackageType('Branding');
        } else if (type === 'Web-Development') {
            setPackageType('Web-Development');
        } else if (type === 'Digital-Marketing') {
            setPackageType('Digital-Marketing');
        } else if (type === 'Online-Marketplace-Handling') {
            setPackageType('Online-Marketplace-Handling');
        }
    };
  return (
    <div className="pricing-container">
      <div className="pricing-inner">
        <div className="d-flex container btn-div">
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Branding')}>Branding</button>
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Web-Development')}>Web Development</button>
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Digital-Marketing')}>Digital Marketing</button>
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Online-Marketplace-Handling')}>Social Media Management</button>
        </div>
      <div className={`pricing-table container ${packageType === 'Branding' ? 'd-block' : 'd-none'}`}>
          <div className="branding-inner row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Starter Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Logo Design - PNG/JPEG</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Branding - Instagram, Facebook, and LinkedIN Profile setup</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 price-active">
                <h1>Growth Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Logo Design - PNG/JPEG/Favicon</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Branding - Cover Photos and post templates for 3 platforms</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Mood Board</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Premium Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Logo Design - PNG/JPEG/Favicon/Vector</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Cover Photos, Highlights for 4 platforms</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Mood Board + Brand messaging Framework</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
          </div>
      </div>
      <div className={`pricing-table container ${packageType === 'Web-Development' ? 'd-block' : 'd-none'}`}>
          <div className="branding-inner row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Starter Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 price-active">
                <h1>Growth Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Premium Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
          </div>
      </div>
      <div className={`pricing-table container ${packageType === 'Digital-Marketing' ? 'd-block' : 'd-none'}`}>
          <div className="branding-inner row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Starter Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 price-active">
                <h1>Growth Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Premium Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
          </div>
      </div>
      <div className={`pricing-table container ${packageType === 'Online-Marketplace-Handling' ? 'd-block' : 'd-none'}`}>
          <div className="branding-inner row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Starter Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 price-active">
                <h1>Growth Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Premium Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>PNG - Transparent/JPEG Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Portfolio Setup - Instagram, Facebook, and LinkedIN</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Brand Styling - Fonts, Theme and Logo</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Tagline Development</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Stationary Design</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#51c128'}}  ></i><div>Dedicated Branding Consultant</div></li>
                </ul>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Pricing;