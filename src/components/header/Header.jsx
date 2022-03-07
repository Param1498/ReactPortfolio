import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import'./header.css';
import { tawkToLoadScripts } from './Tawkchat'


const Header = () => {
  const Header = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src='https://embed.tawk.to/622601861ffac05b1d7d5a28/1fti8vtsi';
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
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
