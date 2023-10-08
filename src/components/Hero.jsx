import React from 'react'
import Typed from 'react-typed'


const Hero = () => {
  return (
    <div className='text-white'>

        <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col pt-40'>
            <p className='font-bold uppercase p-2 text-[#00df9a]'>Growing with Data Analytics</p>
            <h1 className='w-full mx-auto font-bold p-4  md:text-6xl sm:text-5xl text-3xl md:py-8'>Grow with Data.</h1>
            <div className='flex justify-center items-center'>
                <p className='font-bold md:text-5xl sm:text-4xl text-xl py-4'>Fast,flexible financing for 
                </p>
                <Typed className='font-bold md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2'
                  strings={['BTB','BTC','SASS']} 
                 typeSpeed={120} 
                 backSpeed={140}
                 loop
                 />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTC,BTB & SASS platforms.</p>
            <button className='  bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black'>Get Started </button>
        </div>
    </div>
    
  )
}

export default Hero