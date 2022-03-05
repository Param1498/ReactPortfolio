import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {RiTwitterLine} from 'react-icons/ri'




const HeaderSocial = () => {
  return (
      <>
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/paramjeet-singh-922024139/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Param1498" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/parambarkhi/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/param.jeet.5/" target="_blank"><FaFacebookF/></a>
        <a href="https://twitter.com/Paramje47032418" target="_blank"><RiTwitterLine/></a>

        

    </div>

    </>
  )
}

export default HeaderSocial