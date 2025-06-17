import React from 'react'
import bg from '../assets/hero1.jpg'

const OurWorkHero = () => {
  return (
    <div
      className="relative flex flex-col justify-center h-90 bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
     
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 px-4 sm:px-8 md:px-16">
        <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl text-center leading-tight mt-20 sm:mt-32"> 
         Our Work
        </h1>
        
      </div>
    </div>
  )
}

export default OurWorkHero