import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-2xl px-4 sm:px-6 md:px-10 lg:px-20 bg-primary'>
      {/* Left */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-6 sm:py-8 md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug'>
          Book Appointment<br />With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={assets.group_profiles} alt="doctors" className='w-28' />
          <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />schedule your appointment hassle-free.</p>
        </div>
        <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-110 transition-all duration-300'>Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* Right */}
      <div className='md:w-1/2 relative'>
        <img src={assets.header_img} alt="" className='w-full md:absolute bottom-0 h-auto rounded-lg' />
      </div>
    </div>
  )
}

export default Header;
