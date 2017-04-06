import React from 'react';
import heart from '../assets/hatch_love.svg';
import cheese from '../assets/hatch_curdle.svg';

const Footer = () => (
  <footer>
  Made With
  <span>
    <img className="footerimage" src={heart} alt="heart" /></span>
      by Colby
    <span>
      <img className="footerimage" src={cheese}alt="cheese" />
    </span>
  </footer>
);

export default Footer;
