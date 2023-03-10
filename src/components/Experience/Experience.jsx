import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {BsFillPencilFill} from 'react-icons/bs'


const Experience = () => {
  return (
   <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="frontend__development">
        <h3>Frontend Development</h3>
        <div className="experiece__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
         <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
         </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Beginner</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
          <div>
          <h4>React</h4>
          <small className='text-light'>Beginner</small>
          </div>
          </article>
        </div>
      </div>
      {/* END of Frontend */}
      <div className="backend__development">
      <h3>Backend Development</h3>
        <div className="experiece__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
         <div>
          <h4>Node JS</h4>
          <small className='text-light'>Beginner</small>
         </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
         <div>
         <h4>MongoDB</h4>
          <small className='text-light'>Intermediate</small>
         </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/> 
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>  
      </div>
      {/* END of backend */}
      <div className="additional__skills">
        <h3>Additional Skills</h3>
      <div className="experiece__content">
          <article className='experience__details'>
          <BsFillPencilFill className='experience__details-icon'/> 
         <div>
         <h4>Problem Solving in C++</h4>
          <small className='text-light'>Intermediate</small>
         </div>
          </article>
          <article className='experience__details'>
          <BsFillPencilFill className='experience__details-icon'/> 
          <div>
          <h4>Visual Studio</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPencilFill className='experience__details-icon'/> 
         <div>
         <h4>Version Control: Git & Github</h4>
          <small className='text-light'>Intermediate</small>
         </div>
          </article>
          <article className='experience__details'>
          <BsFillPencilFill className='experience__details-icon'/> 
        <div>
        <h4>Python</h4>
          <small className='text-light'>Beginner</small>
        </div>
          </article>
          <article className='experience__details'>
          <BsFillPencilFill className='experience__details-icon'/> 
         <div>
         <h4>Image & Video Editing</h4>
          <small className='text-light'>Beginner</small>
         </div>
          </article>
        </div>  
      </div>
    </div>
   </section>
  )
}

export default Experience
