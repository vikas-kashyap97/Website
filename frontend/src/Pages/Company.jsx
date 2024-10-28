import React from 'react';
import './Company.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faClock, 
  faEnvelope,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const Company = () => {
  return (
    <div className='Company-container'>
      <h1>Company Our Company</h1>
      <div className="Company-intro">
        <p>
          Established in 2020, our company has been dedicated to providing top-quality products to customers around the world. With a strong commitment to innovation and customer satisfaction, we have quickly become a leader in the e-commerce industry.
        </p>
        <h2>Our History</h2>
        <p>
          Our journey began with a vision to create an online platform that offers a wide range of products at competitive prices. Over the years, we have expanded our offerings and built a strong brand recognized for quality and reliability.
        </p>
        
        <h2>Achievements</h2>
        <ul>
          <li>2021: Awarded Best E-commerce Platform by Industry Magazine</li>
          <li>2022: Reached 1 Million Customers Worldwide</li>
          <li>2023: Launched 500+ New Products Across Various Categories</li>
        </ul>

        <h2>Partner Companies</h2>
        <p>
          We have established partnerships with leading brands and manufacturers to ensure that we provide the best products to our customers. Our partners include:
        </p>
        <ul>
          <li>Brand A</li>
          <li>Brand B</li>
          <li>Brand C</li>
        </ul>

        <h2>International Relations</h2>
        <p>
          We pride ourselves on our strong relationships with international partners. Our global reach allows us to source products from around the world and deliver them to our customers efficiently.
        </p>
      </div>

      <h2>Our Foreign Office</h2>
      <div className="foreign-office">
        <h3>Foreign Office - New York</h3>
        <div className="office-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
              <h4>Address</h4>
              <p>789, Commerce Street, Suite 100</p>
              <p>New York, NY 10001, USA</p>
              <p><strong>Landmark:</strong> Near Times Square</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faClock} />
            <div>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: Closed</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <h4>Contact Numbers</h4>
              <p>Office: +1 212-555-6789</p>
              <p>Toll Free: 1-800-123-4567</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faHeadset} />
            <div>
              <h4>Customer Support</h4>
              <p>24/7 Support Available</p>
              <p>Support Hotline: +1 987-654-3210</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h4>Email Contact</h4>
              <p>General Inquiries: info@shopper.com</p>
              <p>Customer Support: support@shopper.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;