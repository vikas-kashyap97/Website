import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to handle Instagram icon click
  const handleInstagramClick = () => {
    alert("Instagram account not found!");
  };

  // Function to handle Pinterest icon click
  const handlePinterestClick = () => {
    alert("Pinterest account not found!");
  };

  // Function to handle WhatsApp icon click
  const handleWhatsAppClick = () => {
    alert("WhatsApp account not found!");
  };

  return (
    <div className='footer'>
      <Link to="/" className="footer-logo">
        <img src={footer_logo} alt="Logo" />
        <p>SHOPPER</p>
      </Link>
      <ul className="footer-links">
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/offices">Offices</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container" onClick={handleInstagramClick}>
            <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container" onClick={handlePinterestClick}>
            <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container" onClick={handleWhatsAppClick}>
            <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p> Copyright @ 2024 - All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
