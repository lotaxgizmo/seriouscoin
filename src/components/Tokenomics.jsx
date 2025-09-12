import React from 'react'
import totalsupply from '../assets/totalsupply.png'
import tokedeets from '../assets/tokedeets.png'
import tokedeetsmobile from '../assets/tokedeetsmobile.png'
import tokenomics from '../assets/tokenomics.png'
import liquidity from '../assets/liquidity.png'
import taxes from '../assets/taxes.png'

function Tokenomics() {
  return (
    <div className='flex flex-col justify-center items-center w-full mb-10 lg:mb-30'>
          
        <img src={tokenomics} alt="" className='lg:w-[75vw] w-[90vw]' />
        <img src={tokedeets} alt="" className='w-[80vw] mt-5 hidden lg:flex' />
        <img src={tokedeetsmobile} alt="" className='w-[90vw] mt-5 flex lg:hidden' />




        <div className="three flex flex-col lg:flex-row justify-around items-center lg:gap-10 gap-5 lg:mt-20 mt-5 w-full ">
            <img src={totalsupply} alt="" className='w-[90vw] lg:w-[26vw]  lg:rotate-20' />
            <img src={liquidity} alt="" className='w-[90vw] lg:w-[26vw] ' />
            <img src={taxes} alt="" className='w-[90vw] lg:w-[26vw]  lg:-rotate-20' />

        </div>
    </div>
  )
}

export default Tokenomics