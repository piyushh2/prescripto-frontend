import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const MyAppointments = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_")
    return dateArray[0] + " " + months[Number(dateArray[1])] + ", " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { token } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      }
      else toast.error(data.message)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (token) getUserAppointments()
  }, [token, cancelAppointment])

  return (
    <div className='max-w-[1280px]'>
      <p className='pb-3 mt-4 font-medium text-xl text-zinc-700 border-b'>My Appointments</p>
      <div>
        {appointments.map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'>
            <div>
              <img src={item.docData.image} alt="" className='w-36 bg-indigo-300 rounded-3xl' />
            </div>
            <div className='flex-1 text-sm text-zinc-600 p-2 rounded-xl border border-gray-200 bg-white shadow-md'>
              <p className='text-lg font-semibold text-neutral-800'>{item.docData.name}</p>
              <p className='text-sm'>{item.docData.speciality} | {item.docData.experience}</p>
              <p className='text-sm font-semibold'>Address : </p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs mb-1'>{item.docData.address.line2}</p>
              <div className='text-xs mt-2 pt-2 border-t border-gray-200'>
                <span className='text-sm font-medium text-neutral-700'>Date & Time : </span>
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </div>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {item.cancelled ?
                <button className='sm:min-w-48 py-2 border border-red-600 text-red-600'>Appointment Cancelled</button> :
                item.isCompleted ?
                  <button className='sm:min-w-48 py-2 border border-green-600 text-green-600'>Appointment Completed</button> :
                  <>
                    <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>Pay Now</button>
                    <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer' onClick={() => cancelAppointment(item._id)}>Cancel Appointment</button>
                  </>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments;