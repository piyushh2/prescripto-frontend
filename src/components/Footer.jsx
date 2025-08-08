import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-14 text-sm'>
        {/* L */}
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-50' />
          <p className='w-full md:w-9/10 text-gray-600 leading-6 text-md'>One-stop solution for booking doctor appointments, effortlessly browse doctor profiles, check real-time availability, and schedule appointments — all in one place. Designed for convenience, speed, and reliability, it ensures smooth and hassle-free access to quality medical care.</p>
        </div>
        {/* C */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600 text-md'>
            <li className='cursor-pointer w-fit'>Home</li>
            <li className='cursor-pointer w-fit'>About Us</li>
            <li className='cursor-pointer w-fit'>Contact Us</li>
            <li className='cursor-pointer w-fit'>Privacy Policy</li>
          </ul>
        </div>
        {/* R */}
        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600 text-md'>
            <li className='cursor-pointer w-fit'>+91-98765-54321</li>
            <li className='cursor-pointer w-fit'>support@prescripto.in</li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div>
        <hr />
        <p className='py-5 text-md text-center'>Copyright © {new Date().getFullYear()} @ Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
