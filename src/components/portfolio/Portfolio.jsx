import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'

// THE ARRAY MAP METHOD

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Official School (Campus) Voting System',
    github: 'https://github.com/Cal2b/VotingSystem',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Moi University Apple Farm Management System',
    github: 'https://github.com/Cal2b/Apple-Farm-Management',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ecommerce Web Application with the Sanity CMS',
    github: 'https://github.com/Cal2b/E-commerce-app',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Modern UI/UX Design Website with React',
    github: 'https://github.com/Cal2b/Modern-UI-UX-Design',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Kenya Airways Flight Management System',
    github: 'https://github.com/Cal2b/Flight-Management',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Inventory Management System With Automation',
    github: 'https://github.com/Cal2b/InventorySystem',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='porfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='__blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
              </div>
            </article>  
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio