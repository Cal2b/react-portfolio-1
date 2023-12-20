import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { BsTwitterTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/caleb-koech-161250216' target="_blank"><BsLinkedin/></a>
        <a href='https://www.github.com/Cal2b' target="_blank"><FaGithub/></a>
        <a href='https://www.twitter.com/CalebKo07718035' target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials