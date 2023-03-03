import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    
    <div className='header__socials'>
       
        <a href="https://www.linkedin.com/in/raj-singh-7b6338192/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/rajsingh619" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/raj_rajput619/" target='_blank'><BsInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials
