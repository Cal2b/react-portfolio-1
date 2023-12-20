import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8nn49jw', 'template_oqkl8vc', form.current, 'dnpNxaqN1E2fNs9s5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      e.target.reset();
      });
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>calebkoech80@gmail.com</h5>
          <a href="mailto:calebkoech80@gmail.com" target="__blank">Send a Message</a>
        </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Caleb Koech</h4>
            <h5>calebkoech</h5>
            <a href="https://m.me/caleb.koech.313" target="__blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254708300869</h5>
            <a href="https://wa.me/+254708300869" target="__blank">Send a Message</a>
          </article>
      </div> 
      {  /* END OF CONTACT OPTIONS */ }
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact