import React from 'react'
import meanit from '../assets/meanit.png'
import buynowbtn from '../assets/buynowbtn.png'
import ca from '../assets/ca.png'
import dextoolsbtn from '../assets/dextoolsbtn.png'
import herobg from '../assets/herobg.png'
import coin from '../assets/coin.png'
import serious from '../assets/serious.png'
import About from './About'
import Header from './Header'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center relative mt-2'>
    
<img src={herobg} alt="" className='w-[90vw] lg:w-[93vw] hidden lg:flex' />
<div className="lg:absolute top-5 z-10 flex flex-col justify-center items-center">
    
<img src={serious} alt="" className='w-[90vw] lg:w-[75vw] levitate' />

<Header />

<img src={coin} alt="" className='w-[90vw] lg:w-[55vw] levitate2' />

<div className="btns flex  justify-center items-center  flex-row lg:gap-20 gap-5 mt-3 lg:mt-0">
    <img src={buynowbtn} alt="" className='w-[42vw] lg:w-[20vw] hovery' />
    <img src={dextoolsbtn} alt="" className='w-[42vw] lg:w-[20vw] hovery' /> 
</div>
    <img src={ca} alt="" className='w-[90vw] lg:w-[70vw] mt-3 lg:my-[3vw] hovery' /> 
 
<About />
</div>


    </div>
  )
}

export default Hero