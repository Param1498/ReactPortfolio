import React from 'react'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {RiFoldersLine} from 'react-icons/ri'
import ME from '../../assets/m23.jpg'
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get TO Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt={ME} />
          </div>
          </div>


          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>

              <article className='about__card'>
                <HiOutlineUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>15 + Worldwide</small>
              </article>

              <article className='about__card'>
                <RiFoldersLine className='about_icon'/>
                <h5>Projects</h5>
                <small>20+ Projects</small>
              </article>
            </div>

            <p>As a web developer, working in design and development of software applications for iPhone & Android mobiles, web sites and web applications for the different clients in US,UK,Canada, Singapore& India using different web framework and software.</p>
            <a href="#contact" className='btn'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About