import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
  return (
    <section id='aboutMe' className='section-container'>
      <div className='aboutMe-container'>
        <h2 className='aboutMe-title'>ABOUT ME</h2>
        <div className='aboutMe-info'>
          <p>
            I am Lucas Oviedo, an argentinian born in 1998, 
            almost an Informatic engineer with a deep interest in 
            web development and experiencies
          </p>
          <button className='aboutMe-cv-button'> Download CV </button>
        </div>
      </div>
    </section>
  )
}

export default AboutMe