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
        } else if (type === 'Social-Media-Management') {
            setPackageType('Social-Media-Management');
        }
    };
  return (
    <div className="pricing-container">
        <div className="d-flex container">
            <button onClick={() => handlePackageButtonClick('Branding')}>Branding</button>
            <button onClick={() => handlePackageButtonClick('Web-Development')}>Web Development</button>
            <button onClick={() => handlePackageButtonClick('Digital-Marketing')}>Digital Marketing</button>
            <button onClick={() => handlePackageButtonClick('Social-Media-Management')}>Social Media Management</button>
        </div>
      <table className={`pricing-table container ${packageType === 'Branding' ? 'd-block' : 'd-none'}`}>
        <thead>
          <tr>
            <th>Features</th>
            <th>Starter Package</th>
            <th>Growth Package</th>
            <th>Premium Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Logo Design</td>
            <td>PNG (Transparent)/JPEG</td>
            <td>PNG(Transparent)/JPEG Favicon</td>
            <td>PNG(Transparent)/JPEG Favicon/Customizable Vector Desgin</td>
          </tr>
          <tr>
            <td>Social Media Branding</td>
            <td>Social Media Profile Setup (Facebook, Instagram, LinkedIN)</td>
            <td>Cover Photos and Post Templates for 3 platforms</td>
            <td>Cover Photos, Post Templates, and Highlights for 4 platforms</td>
          </tr>
          <tr>
            <td>Brand Style Guide</td>
            <td>Fonts, Theme, Logo</td>
            <td>Mood Board</td>
            <td>Mood Board + Brand Messaging, Framework (Tone, Vision, Vision)</td>
          </tr>
          <tr>
            <td>Tagline Development</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Stationary Design</td>
            <td>No</td>
            <td>Yes(Customizable)</td>
            <td>Yes(Packaging)</td>
          </tr>
          <tr>
            <td>Dedicated Branding Consultation</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <table className={`pricing-table container ${packageType === 'Web-Development' ? 'd-block' : 'd-none'}`}>
        <thead>
          <tr>
            <th>Features</th>
            <th>Starter Package</th>
            <th>Growth Package</th>
            <th>Premium Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pages</td>
            <td>Up to 5 pages</td>
            <td>10 pages</td>
            <td>Up to 50 Products</td>
          </tr>
          <tr>
            <td>Slider</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Domain</td>
            <td>Free for 6 months</td>
            <td>Free for 9 months</td>
            <td>Free for 1st year</td>
          </tr>
          <tr>
            <td>Hosting</td>
            <td>Free for 6 months</td>
            <td>Free for 9 months</td>
            <td>Free for 1st year</td>
          </tr>
          <tr>
            <td>Professional Email</td>
            <td>1 email</td>
            <td>2 emails</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Contact Form</td>
            <td>1 contact form</td>
            <td>1 contact forms</td>
            <td>3 contact forms</td>
          </tr>
          <tr>
            <td>Testimonaials</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Gallery Section</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Chat Feature</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Whatsapp chat integration</td>
          </tr>
          <tr>
            <td>Social Profile Link</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Premium UI/UX Design</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Click to call/email</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Mobile Responsive</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Login Details</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Payment Gateway</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Revisions</td>
            <td>1 Revision Free</td>
            <td>2 Revisions Free</td>
            <td>3 Revisions Free</td>
          </tr>
          <tr>
            <td>Post Delivery Technical Support</td>
            <td>1 month free</td>
            <td>2 months free</td>
            <td>3 months free</td>
          </tr>
          <tr>
            <td>Admin Page</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Support</td>
            <td>Email and Phone Support</td>
            <td>Email and Phone Support</td>
            <td>Call/Email/Chat Support</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pricing;