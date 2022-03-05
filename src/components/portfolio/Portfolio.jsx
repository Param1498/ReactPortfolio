import React from 'react'
import './portfolio.css'
// import IMGME from '../../assets/tech.jpg'
import pr1 from '../../assets/pr1.png'
import pr2 from '../../assets/pr2.png'
import pr3 from '../../assets/pr3.png'
import pr4 from '../../assets/pr4.png'
import pr5 from '../../assets/pr5.png'
import pr6 from '../../assets/pr6.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pr1} alt="" />
          </div>

          <h3>All in One SMS</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Param1498" className='btn' target="_blank">Github</a>
          <a href="https://apps.webdew.com/" className='btn ' target="_blank"> Live Demo</a>
          </div>
        </article> 

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pr2} alt="" />
          </div>
          <h3>WHMCS </h3>
          <div className='portfolio_item__cta'>
          <a href="https://github.com/Param1498" className='btn' target="_blank">Github</a>
          <a href="https://apps.webdew.com/" className='btn ' target="_blank">Live Demo</a>
          </div>
        </article>

         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pr3} alt="" />
          </div>
          <h3>E-Commerce </h3>
          <div className='portfolio_item__cta'>
          <a href="https://github.com/Param1498" className='btn' target="_blank">Github</a>
          <a href="https://apps.webdew.com/" className='btn 'target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pr4} alt="" />
          </div>
          <h3>Guest Post Engine </h3>
          <div className='portfolio_item__cta'>
          <a href="https://github.com/Param1498" className='btn' target="_blank">Github</a>
          <a href="https://www.guestpostengine.com/" className='btn ' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pr5} alt="" />
          </div>
          <h3>Services of REIT</h3>
          <div className='portfolio_item__cta'>
          <a href="https://github.com/Param1498" className='btn' target="_blank">Github</a>
          <a href="https://reitindia.org/" className='btn ' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={pr6} alt="" />
          </div>
          <h3>Jammu Suraksha Yojana </h3>
          <div className='portfolio_item__cta'>
          <a href="https://github.com/Param1498" className='btn' target="_blank">Github</a>
          <a href="https://reitindia.org/" className='btn ' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio