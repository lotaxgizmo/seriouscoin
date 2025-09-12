import React from 'react'
import Hero from './components/Hero'
import Tokenomics from './components/Tokenomics'
import Howtobuy from './components/Howtobuy'

function App() {
  return (
    <div className='flex flex-col justify-center items-center ' >
      {/* <Hero /> */}
      <Tokenomics />
      <Howtobuy />
    </div>
  )
}

export default App