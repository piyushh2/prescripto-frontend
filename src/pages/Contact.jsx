import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <div className='text-gray-700 font-semibold'>GET IN TOUCH</div>
      <div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-20 mb-28 text-sm'>
          <img src={assets.contact_image} alt="" className='w-full md:max-w-[360px] rounded-2xl' />
          <div className='flex flex-col justify-center items-start gap-4 text-left'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>Prescripto Technologies Pvt. Ltd.<br />2nd Floor, Building No. 5<br />Sector 16A, Noida<br /> Uttar Pradesh - 201301, India</p>
            <p className='text-gray-500'>Tel: +91-98765-54321<br />Email: support@prescripto.in</p>
            <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;