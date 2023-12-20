import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Brenny.jpg'
import AVTR2 from '../../assets/Jud.jpg'
import AVTR3 from '../../assets/Siz.jpg'
import AVTR4 from '../../assets/Deb.jpg'
//Import Swiper and the required modules
import {Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

//Import the Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Brenny Glov',
    review: 'During my entire time as an IT student at my college, Caleb has always been my client and mentor for any software projects that I may need. He is always there to help. Appreciate your work!'
  },
  {
    avatar: AVTR2,
    name: 'Lil Jud',
    review: 'Caleb has been a very reliable client for all my school IT projects. He is always available to offer any help that I need with software. Am very greatful for his assistance.'
  },
  {
    avatar: AVTR3,
    name: 'Judy Chero',
    review: 'I like the way Caleb does his projects. The way his code is well-organized and neat makes it easy for me to understand it and gain more knowledge on the same, especially web apps. Kudos!'
  },
  {
    avatar: AVTR4,
    name: 'Debra Kitur',
    review: 'My client has always been so helpful whenever am stuck. I simply reach out to him for help and he is always there to help. Appreciate you.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      //Install Swiper Modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=''/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials