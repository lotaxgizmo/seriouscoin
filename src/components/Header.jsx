import React from 'react'
import header from '../assets/header.png'

function Header() {


    const links = ['HOME', 'ABOUT', 'TOKENOMICS', 'TELEGRAM', 'TWITTER']

  return (
    <div className="flex flex-col justify-center items-center">
        {/* <img src={header} alt="" className='w-[90vw] lg:w-[60vw] mt-[1vw]' /> */}


<div className="headerthing flex flex-row justify-center items-center lg:text-[2.5vw] text-[3.9vw] leading-[3vw] lg:gap-4 gap-1  mt-[1vw]">

    {links.map((link, index) => (
        <div key={index} className="part bg-[#FCCD37] hover:bg-black  duration-300 transition-all lg:border-[0.3vw] border-[0.5vw] rounded-full px-[1.3vw] flex flex-col justify-center items-center hovery group">
            <a href="#" className='lg:-mb-[0.1vw] lg:mt-[0.3vw] mb-[0.5vw] mt-[1.2vw] group-hover:text-[#FCCD37] transition-all duration-300'>{link}</a>
        </div>
    ))}
</div>


    </div>
  )
}

export default Header