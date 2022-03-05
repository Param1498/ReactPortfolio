import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {RiTwitterLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer__logo'>PARAM</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer__social'>
         
        <a href="https://www.linkedin.com/in/paramjeet-singh-922024139/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Param1498" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/parambarkhi/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/param.jeet.5/" target="_blank"><FaFacebookF/></a>
        <a href="https://twitter.com/Paramje47032418" target="_blank"><RiTwitterLine/></a>


        </div>
        <div className='footer__copyright'>
          <small>& copy;Paramjeet Singh.All rights reserved </small>
        </div>
      </footer>
    </div>
  )
}

export default Footer