import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
     <article className="service">
      <div className="service__head">
        <h3>UI/UX Design</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
              <p>Conducting user research i.e interviews and usability testing.</p>
        </li>
        <li>
              <BiCheck className='service__list-icon' />
              <p>Building interactive prototypes to visualize and test the design concepts.</p>
        </li>
         <li>
              <BiCheck className='service__list-icon' />
              <p>Defining the interactive elements and behaviors of the interface, such as buttons, navigation menus and animations.</p>
         </li>
         <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring that the digital product is accessible to users with different abilities</p>
          </li>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Crafting the visual elements of the interface.</p>
          </li>
      </ul>
     </article>
  {/* END OF FIRST CARD */}

   <article className="service">
      <div className="service__head">
        <h3>WEB DEVELOPMENT</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
              <p>Creating the visual elements of a website</p>
        </li>
        <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring responsive design to provide a seamless user experience</p>
        </li>
         <li>
              <BiCheck className='service__list-icon' />
              <p>Building the server-side logic and functionality that powers the website</p>
         </li>
         <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing server-side scripting using languages such as Python, PHP & Node.js.</p>
          </li>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Combining front-end and back-end development skills to work on the entire web development stack.</p>
          </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using version control systems, such as Git, to track changes in code.</p>
            </li>
      </ul>
     </article>
  {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>GRAPHICS DESIGN</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating visual elements that represent the identity of a brand e.g logos & color schemes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing graphics for websites, social media, and other digital platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating original illustrations and graphics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating animated graphics and visual effects for multimedia projects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Selecting and arranging fonts and typefaces to convey a message effectively.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHICS DESIGN */}
    </div>
   </section>
  )
}

export default Services