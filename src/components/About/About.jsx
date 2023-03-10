import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {HiAcademicCap} from 'react-icons/hi'
import {GiSchoolBag} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to Know!</h5>
    <h2>About Me!</h2>
    <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <HiAcademicCap className='about__icon'/>
            <h5>College</h5>
            <small>Undergrad at Heritage Institute of Technology</small>  
            <br />
            <small>Batch: 2019 - 2023</small>
          </article>
          <article className='about__card'>
            <GiSchoolBag className='about__icon'/>
            <h5>School</h5>
            <small>Student of M.G.M. Higher Secondary School</small>  
            <br />
            <small>Batch: 2006 - 2018</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Projects completed</small>  
          </article>
        </div>
        <p>
          I am currently pursuing Electronics and Communication Engineering from Heritage Institute of Technology,Kolkata. I like to spend my time by reading books, or listening to music or podcasts. I love sports and travelling. I like to develop websites and I am keen to learn the new technologies, so looking forward to great opportunities in software engineering.
        </p>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
