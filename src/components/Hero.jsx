import React, { useState } from 'react'
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
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyAddress = async () => {
    const textToCopy = '55E5Bn6n3L44tjfUBc18turPsdSBvs8MVb22oeM9robo';
    
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers and non-HTTPS
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Still show the message even if copy fails
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div id='home' className='flex flex-col justify-center items-center relative lg:mt-2 mt-5  '>
    
<img src={herobg} alt="" className='w-[90vw] lg:w-[93vw] hidden lg:flex' />
<div className="lg:absolute top-5 z-10 flex flex-col justify-center items-center">
    
    <div className="serdiv relative">
    <img src={meanit} alt="" className='w-[15vw] lg:w-[12vw] levitate absolute z-10' />
<img src={serious} alt="" className='w-[90vw] lg:w-[75vw] levitate' />
    </div>

<Header />

<img src={coin} alt="" className='w-[90vw] lg:w-[55vw] levitate2 mt-2 lg:mt-0' />

<div className="btns flex  justify-center items-center  flex-row lg:gap-20 gap-5 mt-3 lg:mt-0">
    <a href="https://raydium.io/swap/?inputMint=55E5Bn6n3L44tjfUBc18turPsdSBvs8MVb22oeM9robo&outputMint=sol" target="_blank" rel="noopener noreferrer">
        <img src={buynowbtn} alt="" className='w-[42vw] lg:w-[20vw] hovery' />
    </a>
    <a href="https://www.dextools.io/app/en/solana/pair-explorer/HnwJxwi7hxjnwFNLxdgYrvNHsQG1ZK7Ga6ye6aSAkqQS?t=1757704270180">
        <img src={dextoolsbtn} alt="" className='w-[42vw] lg:w-[20vw] hovery' /> 
    </a>
</div>


    <img 
      src={ca} 
      alt="" 
      className='w-[90vw] lg:w-[70vw] mt-3 lg:my-[3vw] hovery cursor-pointer' 
      onClick={handleCopyAddress}
    /> 
 
<About />
</div>


      {/* Custom bottom alert */}
      {showCopied && (
        <div className="fixed top-0  bg-[#FCCD37] text-black text-center py-3 lg:py-2 font-bold text-sm lg:text-2xl z-[9999] transition-all duration-300 w-fit lg:border-[0.3vw] border-[0.5vw] rounded-full  px-5 mt-5">
          Copied!
        </div>
      )}

    </div>
  )
}

export default Hero