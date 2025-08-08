import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Banner = () => {
  const { token } = useContext(AppContext)
  const navigate = useNavigate();
  return token ? (
    <div className='flex bg-primary rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 mt-10 md:mx-20'>
      {/* Left */}
      <div className='flex-1.5 sm:flex-1 py-8 sm:py-10 lg:pl-5'>
        <div className='text-lg sm:text-2xl md:text-3xl lg:text-5xl sm:font-semibold text-white'>
          <p className='mt-4'>Stay On Top of Your Health</p>
          <p className='mt-4'>Manage Appointments Easily</p>
        </div>
        <button className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-8 hover:scale-105 transition-all cursor-pointer' onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}>Book Now</button>
      </div>
      {/* Right */}
      <div className="w-[40vw] md:w-1/2 lg:w-[300px] relative mt-36 sm:mt-0">
        <img src={assets.appointment_img} alt="Appointment" className="w-full object-contain mt-2" />
      </div>
    </div>
  ) : (
    <div className='flex bg-primary rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 mt-10 md:mx-20'>
      {/* Left */}
      <div className='flex-1.5 sm:flex-1 py-8 sm:py-10 lg:pl-5'>
        <div className='text-lg sm:text-2xl md:text-3xl lg:text-5xl sm:font-semibold text-white'>
          <p className='mt-4'>Access a Trusted Network of</p>
          <p className='mt-0 sm:mt-4'>100+ Verified Doctors</p>
        </div>
        <button className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-8 hover:scale-105 transition-all cursor-pointer' onClick={() => { navigate('/login'); scrollTo(0, 0) }}>Sign In</button>
      </div>
      {/* Right */}
      <div className="w-[40vw] md:w-1/2 lg:w-[300px] relative mt-36 sm:mt-0">
        <img src={assets.appointment_img} alt="Appointment" className="w-full object-contain mt-2" />
      </div>
    </div>
  )
}

export default Banner;