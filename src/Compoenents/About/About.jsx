import React from 'react'
import './About.css'
import about_img from "../../edusity_assets/about.png"
import play_icon from "../../edusity_assets/play-icon.png"


const About = ({setPlayState}) => {
  return (
    <div className='about'>
    <div className='about-left'>
    <img src={about_img} alt = "" className='about-img'/>
    <img src={play_icon} alt = "" className='play-icon' onClick={() =>{setPlayState(true)}}/>
    
    </div>
    <div className='about-right'>
    <h3>About University</h3>
    <h2>Nuturing Tommrrow's Leaders Today</h2>
    <p>Emabark on a transformative educational jounery with our university comreshinsve education programs. Our cutting-edge curriculm is designed to enpower students with knowledge,skills, and experiences needed to excel in the dynamic field of education</p>
    <p>Emabark on a transformative educational jounery with our university comreshinsve education programs. Our cutting-edge curriculm is designed to enpower students with knowledge,skills, and experiences needed to excel in the dynamic field of education</p>
    <p>Emabark on a transformative educational jounery with our university comreshinsve education programs. Our cutting-edge curriculm is designed to enpower students with knowledge,skills, and experiences needed to excel in the dynamic field of education</p>

    </div>
      
    </div>
  )
}

export default About
