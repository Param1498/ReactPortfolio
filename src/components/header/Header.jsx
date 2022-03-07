import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import'./header.css';
import { tawkToLoadScripts } from './Tawkchat'


const Header = () => {
  return (
    <>
    <header>
        <div className="container ">
            <h5>Hello I'm</h5>
            <h1>Paramjeet Singh</h1>
            <h5 className='text-light'>Software Developer</h5>
            <CTA/>
            <HeaderSocial/>
            <tawkToLoadScripts/>

        </div>
    </header>

    </>
  )
}

export default Header
