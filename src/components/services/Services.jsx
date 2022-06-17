import React from 'react'
import './service.css'
import {AiFillCheckCircle} from 'react-icons/ai'



const Services = () => {
 return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Designer</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Mobile App Design</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Web Design</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Blog / News Management.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Shopping Cart.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Email Newsletter</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Content Management System</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Mobile Application / iPhone App</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Portfolio Showcase</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Learning Management System (LMS)</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Web Portals</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Brochures, rack cards & booklets.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Business cards, letterhead & envelopes.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Logos and branded elements.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Posters, banners and signage.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Social media graphics & digital marketing ads.</p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>Email marketing graphics.</p>
            </li>
            
          </ul>
        </article>
        
      </div>

    </section>
  )
}

export default Services