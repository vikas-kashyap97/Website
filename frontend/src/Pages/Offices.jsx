import React from 'react';
import './Offices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faClock, 
  faEnvelope,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const Offices = () => {
  return (
    <div className='offices-container'>
      <h1>Our Offices</h1>
      
      {/* Main Office */}
      <div className="office-card">
        <h2>Main Office - Delhi</h2>
        <div className="office-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
              <h3>Address</h3>
              <p>123, Business Hub, Connaught Place</p>
              <p>New Delhi - 110001, India</p>
              <p><strong>Landmark:</strong> Near Central Park</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faClock} />
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <h3>Contact Numbers</h3>
              <p>Office: +91 11 2345 6789</p>
              <p>Toll Free: 1800 123 4567</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faHeadset} />
            <div>
              <h3>Customer Support</h3>
              <p>24/7 Support Available</p>
              <p>Support Hotline: +91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h3>Email Contact</h3>
              <p>General Inquiries: info@shopper.com</p>
              <p>Customer Support: support@shopper.com</p>
              <p>Business Relations: business@shopper.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Branch Office */}
      <div className="office-card">
        <h2>Branch Office - Mumbai</h2>
        <div className="office-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
              <h3>Address</h3>
              <p>456, Trade Center, Bandra Kurla Complex</p>
              <p>Mumbai - 400051, India</p>
              <p><strong>Landmark:</strong> Opposite Diamond Exchange</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faClock} />
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:30 AM - 6:30 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <h3>Contact Numbers</h3>
              <p>Office: +91 22 2345 6789</p>
              <p>Toll Free: 1800 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;