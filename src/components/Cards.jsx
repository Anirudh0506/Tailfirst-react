import React from 'react'
import Single from '../assests/single.png'
import Double from '../assests/double.png'
import Triple from '../assests/triple.png'
const Cards = () => {
  return (
    <div className='w-full px-4 py-[10rem] bg-white'>
        <div className=' mx-auto max-w-[1240px] grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt="" />
                <h2 className='font-bold text-center my-2 text-2xl py-8'>Single User</h2>
                <p className='text-center font-bold text-3xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8' >500GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Granted User</p>
                    <p className='border-b py-2 mx-8'>Send upto 2GB</p>
                </div>
                <button className='rounded-md  text-black bg-[#00dfba]  font-medium mx-auto mt-4 justify-center w-[200px] my-6 px-6 py-3'>Start Trial</button>

            </div>
            <div className='w-full  bg-gray-100 shadow-xl flex flex-col rounded-lg p-4  md:my-0 my-8 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                <h2 className='font-bold text-center my-2 text-2xl py-8'>Double User</h2>
                <p className='text-center font-bold text-3xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8' >500GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Granted User</p>
                    <p className='border-b py-2 mx-8'>Send upto 2GB</p>
                </div>
                <button className='rounded-md  text-green-400 bg-black font-medium mx-auto mt-4 justify-center w-[200px] my-6 px-6 py-3'>Start Trial</button>

            </div>
            <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem]' src={Triple} alt="" />
                <h2 className='font-bold text-center my-2 text-2xl py-8'>Triple User</h2>
                <p className='text-center font-bold text-3xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='border-b py-2 mx-8 mt-8' >500GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Granted User</p>
                    <p className='border-b py-2 mx-8'>Send upto 2GB</p>
                </div>
                <button className='rounded-md  text-black bg-[#00dfba]  font-medium mx-auto mt-4 justify-center w-[200px] my-6 px-6 py-3'>Start Trial</button>

            </div>

        </div>

    </div>
  )
}

export default Cards