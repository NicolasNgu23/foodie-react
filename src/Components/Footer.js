import React from 'react'
import Logo from '../Assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return<div className='footer-wrapper'>
    <div className="footer-section-one">
      <div className='footer-logo-container'>
        <img src={Logo} alt="" />
      </div>
      <div className='footer-icons'>
        <BsTwitter/>
        <SiLinkedin/>
        <BsYoutube/>
        <FaFacebookF/>

      </div>
    </div>
    <div className="footer-section-two">
      <div className="footer-section-columns">
        <span>Quality</span>
        <span>Help</span>
        <span>Share</span>
        <span>Carres</span>
        <span>Testimonials</span>
        <span>Work</span>
      </div>
      <div className="footer-section-columns">
      <span>+33650247855</span>
      <span>Foodie@omen.com</span>
      <span>Service@food.com</span>
      <span>Contact@food.com</span>
      <div className="footer-section-columns">
      <span>Terms & Conditions</span>
      <span>Privacy & Policy</span>
      </div>
      </div>
    </div>
  </div>
};

export default Footer
