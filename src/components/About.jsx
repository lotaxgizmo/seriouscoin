import React from 'react'
import aboutmobile from '../assets/aboutmobile.png'
import about from '../assets/about.png'

function About() {
  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:mt-0  '>
        <img src={aboutmobile} alt="" className='w-[90vw] lg:hidden' />
        <img src={about} alt="" className='w-[90vw] hidden lg:flex' />
    </div>
  )
}

export default About