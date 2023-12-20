import React from 'react'
import './about.css'
import ME from '../../assets/Me1.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know more </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src ={ME} alt='About Caleb'/>
          </div>

          </div>  
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Projects Done</small>
            </article>
            </div>
            <p>Over the past few years that I've been working as a software developer, I have succesfully completed several projects with different technologies as well as serving many clients worldwide.</p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About