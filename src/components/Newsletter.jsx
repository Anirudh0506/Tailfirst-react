import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-bold md:text-3xl sm:text-2xl text-xl py-3 px-2'>Want tips & tricks to optimize your flow?</h1>
                <p className='px-2'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                    <input className=' p-3 w-full  rounded-md text-black'type= "email" placeholder='Enter your email'></input>
                    <button className='rounded-md   bg-[#00df9a] text-black  px-6 my-6 ml-4 font-medium w-[200px] py-3'>Notify Me</button>
                
                </div>
                <p>We care about the protection of your data.Read our <span className='text-[#00df9a]'>Private Policy</span>.</p>

            </div>
           


        </div>

    </div>
  )
}

export default Newsletter