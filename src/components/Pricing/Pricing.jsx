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
        } 
    };
  return (
    <div className="pricing-container">
      <div className="pricing-inner">
        <div className="d-flex container btn-div">
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Branding')}>Branding</button>
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Web-Development')}>Web Development</button>
            <button className='fill-btn-effect' onClick={() => handlePackageButtonClick('Digital-Marketing')}>Digital Marketing</button>
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
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Mood Board + Brand Framework</div></li>
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
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Up to 5 pages</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Slides</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Professional Email</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Contact Form</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Testimonails</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Gallery Section</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Profile Link</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Customised UI/UX Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Click to Call/Email</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Mobile Responsive</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Post Deloivery Technical Support - 1 month</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Login Details</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Payment Gateway</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Revisions</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Admin Page</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Email and Phone Support</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Domain</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Hosting</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 price-active">
                <h1>Growth Package</h1>
                <ul>
                <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Up to 10 pages</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Slides</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>2 Professional Email</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>1 Contact Form</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Testimonails</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Gallery Section</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Profile Link</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Customised UI/UX Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Click to Call/Email</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Mobile Responsive</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Post Deloivery Technical Support - 2 months free</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Login Details</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Payment Gateway</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>2 Revisions free</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Admin Page</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Email and Phone Support</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Domain - Free for 9 months</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Hosting - Free for 9 months</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Premium Package</h1>
                <ul>
                <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Up to 50 products</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Slides</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Professional Email</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>3 Contact Forms</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Testimonails</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Gallery Section</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Profile Link</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Customised UI/UX Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Click to Call/Email</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Mobile Responsive</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Post Deloivery Technical Support - 3 months free</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Login Details</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Payment Gateway</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>3 Revisions Free</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Admin Page</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Email and Phone Support</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Domain - Free for 1 year</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Hosting - Free for 1 year</div></li>
                </ul>
              </div>
          </div>
      </div>
      <div className={`pricing-table container ${packageType === 'Digital-Marketing' ? 'd-block' : 'd-none'}`}>
          <div className="branding-inner row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h1>Starter Package</h1>
                <ul>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Facebook & Instagram A/C creation</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>A/C Handling - 2</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Content Creation - 8 reels + 8 posts</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#b53909'}}  ></i><div>Total Content - 16</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#b53909'}}  ></i><div>Social Media Calendar - weekly</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#b53909'}}  ></i><div>GMB Management</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Profile Optimization</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Graphic Designing</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Keyword Research</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Photoshoot / Videography</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Google Ads / Meta Ads</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Analytics Tracking</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Dedicated SPOC</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Premium Content Creation</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Free Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Support - Chat/Email/Phone</div></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 price-active">
                <h1>Enterprise Package</h1>
                <ul>
                <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Facebook, LinkedIN & Instagram A/C creation</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>A/C Handling - 3</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Content Creation - 20 reels + 20 posts + 16 LinkedIN Posts</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Total Content - 56</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Media Calendar - weekly</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>GMB Optimization</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Social Profile Optimization</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Graphic Designing</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Keyword Research</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Photoshoot / Videography</div></li>
                  <li><i class='bx bx-x-circle' style={{color: '#b53909'}}  ></i><div>Google Ads / Meta Ads - Optional</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Analytics Tracking</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Dedicated SPOC</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Premium Content Creation</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Free Logo Design</div></li>
                  <li><i class='bx bx-check-circle' style={{color: '#51c128'}}  ></i><div>Support - Chat/Email/Phone</div></li>
                </ul>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Pricing;