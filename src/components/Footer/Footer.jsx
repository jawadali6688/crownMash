import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../index'
function Footer() {
  return (
<>
<main className='px-4 py-4 flex flex-col md:flex-row  gap-4 justify-center items-start bg-white rounded-lg'>
    <div className='w-[90%] md:w-2/6 flex flex-col gap-4 justify-center items-center'>
        <Logo/>
        <span className='text-center text-gray-700 text-sm'>
        Crown Mash is more than just a fast food restaurant—it's a culinary journey where every bite tells a story of flavor and tradition. 
        </span>
       <div className='flex gap-6'>
       <span className='text-pink-600 cursor-pointer hover:text-yellow-500 duration-300'>
        <i className='bx bxl-facebook-circle text-4xl'></i>
        </span>
        <span className='text-pink-600 cursor-pointer hover:text-yellow-500 duration-300'>
        <i className='bx bxl-twitter text-4xl' ></i>
        </span>
        <span className='text-pink-600 cursor-pointer hover:text-yellow-500 duration-300'>
        <i className='bx bxl-youtube text-4xl'></i>
        </span>
        <span className='text-pink-600 cursor-pointer hover:text-yellow-500 duration-300'>
        <i className='bx bxl-instagram-alt text-4xl' ></i>
        </span>
       </div>
    </div>

    <div className='w-[90%] md:w-2/6 flex flex-col gap-4 justify-center items-center'>
        <h3 className='text-yellow-500 font-bold text-2xl border-b-2 border-b-yellow-500 text-center flex  justify-center items-center w-fit mx-auto'>Quick Links</h3>
        <Link to= "" className='text-gray-600 hover:text-pink-600'>Home</Link>
        <Link to= "/about-us" className='text-gray-600 hover:text-pink-600'>About</Link>
        <Link to= "/contact-us" className='text-gray-600 hover:text-pink-600'>Contact</Link>
    </div>
</main>
    <div className='flex justify-center items-center w-[95%] md:w-full'>
    <div className='text-md lg:text-lg xl:text-xl flex mx-auto justify-center items-center text-gray-500 gap-1 border-t-2 border-gray-300'>
            <span>All Right Reseverd 2024</span>
            <span className='text-4xl mt-3'>&reg;</span>
            <span className='text-pink-700 hover:text-yellow-500 hover:cursor-pointer'>Crown Mash</span>
          </div>
    </div>
</>
  )
}

export default Footer
