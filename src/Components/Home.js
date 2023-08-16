import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import Sushi1 from "../Assets/Sushi1.png"
import { FiArrowRight, fiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
          <h1 className='primary-heading'>
          Your Favourite  Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias possimus pariatur amet sint tempore atque.
          </p>
          <button className='secondary-button'>
            Order Now <FiArrowRight/>
          </button>
        </div>

<div className="home-image-section">
 <img src={Sushi1} alt=''/>
</div>

      </div>
    </div>
  )
}

export default Home
