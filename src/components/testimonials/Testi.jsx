import React from 'react'
import './testi.css'
import Client1 from '../../assets/client1.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:Client1,
    names:'Joshmar Constantino',
    review:'Amtech development inc. has successfully met and deliver the project. The businessfunctions have been applied and the system proposal functionality are all working. The Signatory declare that the Web app project has reached the user acceptance testing.'
  },
  {
    avatar:Client1,
    names:'Joshmar Constantino',
    review:'Amtech development inc. has successfully met and deliver the project. The businessfunctions have been applied and the system proposal functionality are all working. The Signatory declare that the Web app project has reached the user acceptance testing.'
  },
  {
    avatar:Client1,
    names:'Joshmar Constantino',
    review:'Amtech development inc. has successfully met and deliver the project. The businessfunctions have been applied and the system proposal functionality are all working. The Signatory declare that the Web app project has reached the user acceptance testing.'
  }
]
const Testi = () => {
  return (
    <section id='testi'>
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testi_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
    {
      data.map(({avatar,names,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client_avatar">
              <img src={avatar} alt="client1" />
            </div>
            <h5 className='client_name'>{names}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide> 
          )
      })
    }
     
    </Swiper>

    </section>
  )
}

export default Testi