import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const handleSubscribe = () => {
    alert("Congratulations! You have successfully subscribed for upcoming exclusive offers.");
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id'/>
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
