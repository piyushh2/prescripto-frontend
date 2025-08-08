import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    else setFilterDoc(doctors);
  }
  useEffect(() => { applyFilter() }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Find a Doctor</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>

          <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded-2xl transition-all cursor-pointer ${speciality === 'General Physician' ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>

          <p onClick={() => speciality === 'Gynaecologist' ? navigate('/doctors') : navigate('/doctors/Gynaecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-2xl transition-all cursor-pointer ${speciality === 'Gynaecologist' ? "bg-indigo-100 text-black" : ""}`}>Gynaecologist</p>

          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-2xl transition-all cursor-pointer ${speciality === 'Dermatologist' ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>

          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-2xl transition-all cursor-pointer ${speciality === 'Pediatrician' ? "bg-indigo-100 text-black" : ""}`}>Pediatrician</p>

          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-2xl transition-all cursor-pointer ${speciality === 'Neurologist' ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>

          <p onClick={() => speciality === 'Cardiologist' ? navigate('/doctors') : navigate('/doctors/Cardiologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-2xl transition-all cursor-pointer ${speciality === 'Cardiologist' ? "bg-indigo-100 text-black" : ""}`}>Cardiologist</p>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div key={index} className='border border-blue-200 rounded-xl overflow-hidden'>
              <img src={item.image} className='bg-blue-50' />
              <div className='p-4'>
                <p className='text-gray-900 text-lg font-medium text-center'>{item.name}</p>
                <p className='text-gray-600 text-lg text-center'>{item.speciality}</p>
                <p className='text-center text-sm text-blue-900 border border-blue-900 rounded-2xl px-2 py-1 mt-2 mx-auto w-fit cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-400' onClick={() => navigate(`/appointment/${item._id}`)}>View Profile</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors;