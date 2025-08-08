import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-x-4 text-gray-600 md:mx-10'>
      <h1 className='text-3xl font-medium'>Our Specialists</h1>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div key={index} className='border border-blue-200 rounded-xl overflow-hidden'>
            <img src={item.image} className='bg-indigo-100 hover:bg-indigo-300 transition-all duration-300' />
            <div className='p-4'>
              <p className='text-gray-900 text-lg font-medium text-center'>{item.name}</p>
              <p className='text-gray-600 text-lg text-center'>{item.speciality}</p>
              <p className='text-center text-sm text-blue-900 border border-blue-900 rounded-2xl px-2 py-1 mt-2 mx-auto w-fit cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-400' onClick={() => navigate(`/appointment/${item._id}`)}>View Profile</p>
            </div>
          </div>
        ))}
      </div>
      <button className='border border-blue-600 text-blue-600 px-6 py-2 rounded-full mt-8 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300' onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}>View All</button>
    </div>
  )
}

export default TopDoctors;
