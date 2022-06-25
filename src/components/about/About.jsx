import React from 'react'
import './about.css'
import ME from '../../assets/riyuuu.jpg'
import {FaAward} from 'react-icons/fa'
import {BiUserPin} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="aboutme" />
          </div>
        </div>
      
      <div className="about_content">
        <div className="about_cards">

          <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>No Work Experience</small>
          </article>

          <article className='about_card'>
          <BiUserPin className='about_icon'/>
          <h5>Clients</h5>
          <small>2</small>
          </article>

          <article className='about_card'>
          <AiFillFolderOpen className='about_icon'/>
          <h5>Projects</h5>
          <small>4 Completed</small>
          </article>
        </div>

        <p>Hello! I'm Reuel Mendoza, and I work as a web developer. Everything from tiny business websites to rich interactive apps appeals to me. You can contact me here if you are a company looking for an online presence or an employer looking to hire. My area of expertise is responsive design. I strive to make the web a beautiful place with every line of code I write.
        </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
      </div>
      </div>


    </section>
  )
}

export default About