import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Mendoza</a>
    
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testi">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://www.facebook.com/Gordsssssssssssssssss/"><AiFillFacebook/></a>
      <a href="https://www.instagram.com/"><FaInstagramSquare/></a>
      <a href="https://twitter.com/i/flow/login"><BsTwitter/></a>
    </div>
   

   <div className="footer_copyright">
    <small>&copy; riyuuu</small>
   </div>
   </footer>
  )
}

export default Footer