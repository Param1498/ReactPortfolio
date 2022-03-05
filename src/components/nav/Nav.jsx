import React, { useState } from 'react'
import{ImHome} from  'react-icons/im'
import{FiUsers} from  'react-icons/fi'
import{BsBookHalf} from  'react-icons/bs'
import{SiGooglemessages} from  'react-icons/si'
import{ImQuotesLeft} from  'react-icons/im'
import{MdOutlineSportsKabaddi} from  'react-icons/md'
import{AiOutlinePhone} from  'react-icons/ai'







import'./nav.css'






const Nav = () => {
    const[active,setActive] = useState('#');
  return (
      <>
      
    <div>
    <nav>
        <a href="#"  onClick={()=>setActive('#')} className={active ==='#' ? 'active' : ''}><ImHome/></a>
        <a href="#about" onClick={()=>setActive('#about')} className={active ==='#about' ? 'active' : ''}><FiUsers/></a>
        <a href="#experience" onClick={()=>setActive('#experience')} className={active ==='#experience' ? 'active' : ''}><BsBookHalf/></a>
        <a href="#service" onClick={()=>setActive('#service')} className={active ==='#service' ? 'active' : ''}><SiGooglemessages/></a>
        <a href="#testimonial" onClick={()=>setActive('#testimonial')} className={active ==='#testimonial' ? 'active' : ''}><ImQuotesLeft/></a>
        <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active ==='#portfolio' ? 'active' : ''}><MdOutlineSportsKabaddi/></a>
        <a href="#contact" onClick={()=>setActive('#contact')} className={active ==='#contact' ? 'active' : ''}><AiOutlinePhone/></a>


    </nav>

    </div>
    </>
  )
}

export default Nav