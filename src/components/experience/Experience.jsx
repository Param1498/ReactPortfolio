import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className='experience__frountend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>PHP</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Laravel</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Codeigniter</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Node Js</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>MySQl</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Hubspot</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>

        </div>
        <div className='experience__backend'>

        <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Javascript</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article >

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>CSS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Bootstrap</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Hubspot</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Jquery</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details_icons'/>
              <div>
              <h4>Ajax</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>         
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Experience
