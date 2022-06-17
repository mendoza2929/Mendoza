import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillDribbbleCircle} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
   <div className="header_socials">
        <a href="https://www.linkedin.com/in/reuel-mendoza-8952a3242/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/mendoza2929" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://dribbble.com/riyuuu" target="_blank" rel="noreferrer"><AiFillDribbbleCircle/></a>
        <a href="https://www.facebook.com/Gordsssssssssssssssss/" target="_blank" rel="noreferrer"><BsFacebook/></a>
   </div>
  )
}

export default HeaderSocial