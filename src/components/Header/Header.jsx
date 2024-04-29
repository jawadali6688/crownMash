import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Logo} from '../index'
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white py-1 md:py-3 shadow-lg fixed top-0 w-full duration-300 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to = "" className="text-gray-600 text-2xl font-bold">
              <Logo/>
              </Link>
            </div>
          </div>
          <div className='order-3 hidden lg:flex '>
            <span className=' flex gap-1 items-center justify-center bg-yellow-500 py-2 text-gray-600 font-bold text-md rounded-lg px-6 hover:bg-pink-600 hover:text-white hover:cursor-pointer duration-300'>
                <span>
                <i className='bx bx-phone-call text-2xl'></i>
                </span>
            <span>
            0141 611 1866
            </span>
            </span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <NavLink to="/" className="text-gray-600 hover:text-pink-600 px-6 py-2 rounded-md">
                Home
              </NavLink>
              <NavLink to="opening-hours" className="text-gray-600 hover:text-pink-600 px-6 py-2 rounded-md">
                Opening Hours
              </NavLink>
              <NavLink to="menu-&-pricing" className="text-gray-600 hover:text-pink-600 px-6 py-2 rounded-md">
                Menu & Pricing
              </NavLink>
              <NavLink to="about-us" className="text-gray-600 hover:text-pink-600 px-6 py-2 rounded-md">
                About
              </NavLink>
              <NavLink to="contact-us" className="text-gray-600 hover:text-pink-600 px-6 py-2 rounded-md">
                Contact
              </NavLink>
            </div>
            <div className="block md:hidden">
              {isOpen?
              (<button
                onClick={toggleNavbar}
                className="text-gray-600 text-2xl hover:text-pink-600 "
              >
                 <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>) 
              :
              (<button
                onClick={toggleNavbar}
                className=" text-gray-600 text-2xl hover:text-pink-600"
              >
                <svg
                  className="h-7 w-7 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                </svg>
              </button>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "md:hidden block" : "hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="" className="text-gray-600 block px-3 py-2 rounded-md hover:text-pink-600">
          <div className='flex gap-2 items-center'>
             <i className='bx bx-home-alt-2 text-2xl' ></i>
               <span>Home</span>
             </div>
          </NavLink>
          <NavLink to="opening-hours" className="text-gray-600 block px-3 py-2 rounded-md hover:text-pink-600">
          <div className='flex gap-2 items-center'>
             <i className='bx bxs-watch text-2xl' ></i>
               <span>Opening Hours</span>
             </div>
          </NavLink>
          <NavLink to="menu-&-pricing" className="text-gray-600 block px-3 py-2 rounded-md hover:text-pink-600">
          <div className='flex gap-2 items-center'>
          <i className='bx bxs-credit-card-alt text-2xl'></i>
               <span>Menu & Pricing</span>
             </div>
          </NavLink>
          <NavLink to="about-us" className="text-gray-600 block px-3 py-2 rounded-md hover:text-pink-600">
          <div className='flex gap-2 items-center'>
          <i className='bx bx-detail text-2xl' ></i>
               <span>About</span>
             </div>
          </NavLink>
          <NavLink to="contact-us" className="text-gray-600 block px-3 py-2 rounded-md hover:text-pink-600">
          <div className='flex gap-2 items-center'>
          <i className='bx bxs-contact text-2xl' ></i>
               <span>Contact</span>
             </div>
          </NavLink>
<aside className='flex flex-col gap-4 '>
<div className=' w-fit'>
          <span className=' flex gap-1 items-center justify-center bg-yellow-500 py-2 text-gray-600 font-bold text-md rounded-lg px-6 hover:bg-pink-600 hover:text-white hover:cursor-pointer duration-300'>
                <span>
                <i className='bx bx-phone-call text-2xl'></i>
                </span>
            <span>
            0141 611 1866
            </span>
            </span>
          </div>
          <div className='text-md lg:text-lg xl:text-xl flex mx-auto justify-center items-center text-gray-500 gap-1 border-t-2 border-gray-300'>
            <span>All Right Reseverd 2024</span>
            <span className='text-4xl mt-3'>&reg;</span>
            <span className='text-pink-700 hover:text-yellow-500 hover:cursor-pointer'>Crown Mash</span>
          </div>
</aside>
        </div>
      </div>
    </nav>
  );
}

export default Header;
