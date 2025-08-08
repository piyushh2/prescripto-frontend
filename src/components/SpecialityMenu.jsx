import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-12 text-gray-800'>
      <h1 className='text-3xl font-medium'>Search by Specialization</h1>
      <p className='max-w-md w-full px-4 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='grid grid-cols-3 gap-4 sm:flex sm:justify-center pt-5 w-full px-4 sm:overflow-x-auto sm:scrollbar-hide'>
        {specialityData.map((item, index) => (
          <Link key={index} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs text-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 px-3'>
            <img src={item.image} alt="" className='w-8 md:w-24 mb-2' onClick={() => scrollTo(0, 0)} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu;