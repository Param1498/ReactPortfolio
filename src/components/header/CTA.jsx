import React from 'react'
import CV from '../../assets/CV.pdf'
import ME from '../../assets/m23.jpg'
import'./header.css'

const CTA = () => {
  return (
    <>
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-pro'>Lets talk</a>
    </div>
    <div className='me'>
        <img  src={ME} alt="ME " className='headerImage'/>
    </div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
    </>  
)
}

export default CTA