import React from 'react'
import './contact.css'
import{ useRef ,useState } from 'react';
import emailjs from 'emailjs-com'
import {AiFillMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  
  const notify = () => toast("Your message was delivered. We'll get in touch with you as soon as possible!");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_up11p9j', 'template_hwwtz1h', form.current, 'rkPdNgdyIpvgB4dzJ')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiFillMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>reuelmendoza29@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
           <BsMessenger className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Reuel Mendoza</h5>
            <a href="https://www.facebook.com/Gordsssssssssssssssss/" target='_blank'>Send a message</a>
          </article>
          </div>
         <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'onClick={notify}className='btn btn-primary' >Send Message</button>
          <ToastContainer />
         </form>
      </div>
    </section>
  )
}

export default Contact