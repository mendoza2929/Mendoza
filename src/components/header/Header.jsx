import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/riyu.jpg'
import HeaderSocial from './HeaderSocial'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'



const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Reuel S. Mendoza</h1>
        <h5 className='text-light'>
        <Typewriter
            words={['Web Developer', 'UI/UX Designer']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header