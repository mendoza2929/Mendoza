import React from 'react'
import './exp.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>The skills I have</h5>
    <h2>My Experience</h2>

    <div className="container exp_container">
      <div className="exp_frontend">
      <h3>Frontend Development</h3>
      <div className="exp_content">

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experience</small>
        </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
         <div>
         <h4>JAVASCRIPT</h4>
        <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
        <div>
        <h4>BOOTSTRAP</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
        <div>
        <h4>REACT JS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

      </div>
      </div>


    {/* END OF FRONTEND */}
    <div className="exp_backend">
    <div className="exp_backend">
      <h3>Backend Development</h3>
      <div className="exp_content">

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
        <div>
        <h4>NODE JS</h4>
        <small className='text-light'>Basic</small>
        </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
         <div>
         <h4>FIREBASE</h4>
        <small className='text-light'>Basic</small>
         </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
       <div>
       <h4>MongoDB</h4>
        <small className='text-light'>Basic</small>
       </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
       <div>
       <h4>PHP</h4>
        <small className='text-light'>Intermediate</small>
       </div>
        </article>

        <article className='exp_details'>
        <BsFillCheckSquareFill className='exp_details-icon'/>
        <div>
        <h4>MySQL</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

      </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Experience