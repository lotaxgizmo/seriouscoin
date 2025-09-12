import React from 'react'
import getsol from '../assets/getsol.png'
import howtobuy from '../assets/howtobuy.png'
import send from '../assets/send.png'
import setup from '../assets/setup.png'
import swap from '../assets/swap.png'
import swapmobile from '../assets/swapmobile.png'

function Howtobuy() {
  return (
    <div className='flex justify-center items-center flex-col w-full lg:gap-10 gap-3'>
        <div className="side flex justify-around items-center flex-col lg:flex-row w-full lg:gap-10 gap-3">
        <img src={howtobuy} alt="" className='w-[90vw] lg:w-[45vw] ' />
        <img src={getsol} alt="" className='w-[90vw] lg:w-[45vw] ' />
        </div>
        <div className="side flex justify-around items-center flex-col lg:flex-row w-full lg:gap-10 gap-3">
        <img src={setup} alt="" className='w-[90vw] lg:w-[45vw] ' />
        <img src={send} alt="" className='w-[90vw] lg:w-[45vw] ' />
        </div>

        <img src={swap} alt="" className='w-[90vw] lg:w-[95vw] hidden lg:flex ' />
        <img src={swapmobile} alt="" className='w-[90vw] lg:hidden flex ' />

    </div>
  )
}

export default Howtobuy