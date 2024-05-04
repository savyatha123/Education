import React from 'react'
import './Hero.css'
import dark_arrow from '../../edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
    <h1>We Ensure better education for a better world</h1>
    <p>Our cutting-edge curriculam is designed to to enpower students with the knowledge, skills, and experiences needed to excel in the dyamic field of education</p>
    <button className='btn'>Explore more <img src ={dark_arrow} alt =""></img></button>
    </div>
      
    </div>
  )
}

export default Hero
