
import './quali.css'
import {FaGraduationCap} from 'react-icons/fa'
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {AiFillCalendar} from 'react-icons/ai'



const Quali = () => {
  return (
    <section id='quali'>
    <h5>Qualification</h5>
    <h2>My Personal Journey</h2>

    <div className="container quali_container">
         <div className="quali_tabs">
            <div className="qauli_button button--flex  quali_active">
                    <FaGraduationCap className='quali_icon'/>
                    Education
            </div>

            <div className="qauli_button button--flex" data-target='#work'>
                    <BiBriefcaseAlt2 className='quali_icon'/>
                    Work
            </div>
        </div>


        <div className="quali_sections">
            <div className="quali_content quali_active" data-content id='education'>
                <div className="quali_data">
                    <div>
                        <h3 className='quali_title'>Information Technology</h3>
                        <span className="qauli_subtitle">Western Mindanao State University</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2022-2023
                        </div>
                    </div>

                    <div>
                        <span className="quali_rounder"></span>
                        <span className="quali_line"></span>
                    </div>
                </div>

                <div className="quali_data">
                    <div></div>
                    <div>
                        <span className="quali_rounder"></span>
                        <span className="quali_line"></span>
                    </div>
                    <div>
                        <h3 className='quali_title'>Web Design</h3>
                        <span className="qauli_subtitle">No Work Experience</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2020-2022
                        </div>
                    </div>
                </div>
                <div className="quali_data">
                    <div>
                        <h3 className='quali_title'>Web Development</h3>
                        <span className="qauli_subtitle">ICS Institute</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2020-2021
                        </div>
                    </div>

                    <div>
                            <span className="quali_rounder"></span>
                            <span className="quali_line"></span>
                    </div>
                </div>

                <div className="quali_data">
                    <div></div>

                    <div>
                        <span className="quali_rounder"></span>                  
                    </div>
                    <div>
                        <h3 className='quali_title'>UI/UX</h3>
                        <span className="qauli_subtitle">No Work Experience</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2020-2022
                        </div>
                    </div>
                </div>
                
            </div>




            <div className="quali_content" data-content id='work'>
                <div className="quali_data">
                    <div>
                        <h3 className='quali_title'>Software Engineer</h3>
                        <span className="qauli_subtitle">ICS institute</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2020-2021
                        </div>
                    </div>

                    <div>
                        <span className="quali_rounder"></span>
                        <span className="quali_line"></span>
                    </div>
                </div>

                <div className="quali_data">
                    <div></div>
                    <div>
                        <span className="quali_rounder"></span>
                        <span className="quali_line"></span>
                    </div>
                    <div>
                        <h3 className='quali_title'>Frontend Developer</h3>
                        <span className="qauli_subtitle">No Work Experience</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2022-2023
                        </div>
                    </div>
                </div>
                <div className="quali_data">
                    <div>
                        <h3 className='quali_title'>UI Designer</h3>
                        <span className="qauli_subtitle">Amtech Dev Inc.</span>
                        <div className="quali_calendar">
                            <AiFillCalendar/>
                            2021-2022
                        </div>
                    </div>

                    <div>
                        <span className="quali_rounder"></span>
                        {/* <span className="quali_line"></span> */}
                    </div>
                </div>    
            </div>
        </div>
    </div>
    </section>
  )
}

export default Quali