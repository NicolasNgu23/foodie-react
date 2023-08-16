import React from 'react';
import Sushi2 from '../Assets/Sushi2.png';
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill, BsFuelPumpDieselFill } from 'react-icons/bs';

const About = () => {
  return (
  <div className='about-section-container'>
    <div className='about-background-image-container'>
      <img src={AboutBackground} alt='' />
    </div>
    <div className="about-section-image-container">
      <img src={Sushi2} alt="" />
    </div>

    <div className="about-section-text-container">
      <p className='primary-subheading'>About</p>
      <h1 className='primary-heading'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h1>
      <p className='primary-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt saepe doloribus distinctio recusandae magni?
      </p>
      <p className='primary-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt saepe doloribus distinctio recusandae magni?
      </p>
      <div className="about-buttons-container">
        <button className='secondary-button'>Learn More</button>
        <button className='watch-video-button'>
          {""}
          <BsFillPlayCircleFill/>Watch Video
          </button>
      </div>
    </div>
  </div>
  )
}

export default About
