import React from 'react'
import Nicong1 from "../Assets/Nicong1.png"
import {AiFillStar} from 'react-icons/ai'


const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
          <p className='primary-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nulla!
          </p>
      </div>

<div className="testimonial-section-bottom">
  <img src={Nicong1} alt="" />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt at enim, laborum rem eius cupiditate.
  </p>
  <div className="testimonials-stars-container">
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
  </div>
  <h2>Nicolas Nguyen</h2>
  </div>
</div>
  );
};

export default Testimonials
