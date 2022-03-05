import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './service.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'





function Services() {
  return (
    <section  id='service'>
        <h5> What I Offer</h5>
        <h2> Services</h2>
        <div className='container services__container'>
            <article className='service'>
                <div className='service__head'>
                <h3>UI/UX</h3>
                </div>
                <ul className='service__list'>
                    <li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>A Well-organized Architecture </p>
                    </li>
                    <li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Interaction Oriented Design </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Usability Aligned Design </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Visually Appealing Design</p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Planned User Research. </p>
                    </li>
                    
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                    <li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Server-side, Database , API  </p>
                    </li>
                    <li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Stripe & PayPal payment getaways  </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>APIs for mobile applications </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Integration of HubSpot CMS </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Integration of Google Api's </p>
                    </li>
                    
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                <h3>Database & Server</h3>
                </div>
                <ul className='service__list'>
                    <li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Mysql </p>
                    </li>
                    <li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Hubspot HubDB </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Server/Cloudways </p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>Laravel/ORM</p>
                    </li><li><BsFillPatchCheckFill className='service__list-icon'/>
                    <p>MongoDB</p>
                    </li>
                    
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services