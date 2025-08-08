import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length && speciality) {
      const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id != docId);
      setRelDoc(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center px-4 sm:px-0'>Consult Other {speciality}s</h1>
      <div className='flex flex-col items-center gap-x-4 text-gray-600 md:mx-10'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {relDoc.slice(0, 10).map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} key={index} className='border border-blue-200 rounded-xl overflow-hidden'>
              <img src={item.image} className='bg-indigo-100 hover:bg-indigo-300 transition-all duration-300' />
              <div className='p-4'>
                <p className='text-gray-900 text-lg font-medium text-center'>{item.name}</p>
                <p className='text-gray-600 text-lg text-center'>{item.speciality}</p>
                <p className='text-center text-sm text-blue-900 border border-blue-900 rounded-2xl px-2 py-1 mt-2 mx-auto w-fit cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-400'>View Profile</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default RelatedDoctors;