import React from 'react'
import laptop from '../assests/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 '>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img  className=";w-[500px] mx-auto my-4"src={laptop} alt='/' />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sapiente perferendis modi aperiam
                perspiciatis veniam ipsa, sint mollitia dolor quod, est, deleniti quis inventore soluta? Aperiam laudantium
                 ab modi officiis.
              </p>
              <button className=' bg-black text-[#00df9a] w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 py-3 '>Get Started</button>
            </div>
           

          </div>
    </div>

  )
}

export default Analytics