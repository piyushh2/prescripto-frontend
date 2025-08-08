import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import axios from 'axios';
import { toast } from 'react-toastify'

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const navigate = useNavigate()
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [doctorSlots, setDoctorSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  }
  const getAvailableSlots = async () => {
    if (!docInfo || !docInfo.slots_booked) return;
    setDoctorSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(16, 0, 0, 0);
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 9 ? currentDate.getHours() + 1 : 9);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      }
      else {
        currentDate.setHours(9);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()
        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime
        const slotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true;
        if (slotAvailable) {
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime,
          })
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDoctorSlots(prev => ([...prev, timeSlots]));
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment")
      return navigate('/login')
    }
    try {
      const date = doctorSlots[slotIndex][0].dateTime
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      const slotDate = day + "_" + month + "_" + year
      const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, { docId, slotDate, slotTime }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      }
      else toast.error(data.message)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => { fetchDocInfo() }, [doctors, docId]);
  useEffect(() => { getAvailableSlots() }, [docInfo]);

  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 px-4 sm:px-0'>

        <div>
          <img src={docInfo.image} alt="" className='bg-indigo-100 w-full max-w-xs sm:max-w-72 rounded-lg mx-auto hover:bg-indigo-300 transition-all duration-300' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-4 sm:p-8 py-6 bg-white mx-2 sm:mx-0 mt-[-60px] sm:mt-0'>

          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
            <img src={assets.verified_icon} alt="Verified" className='w-5' />
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <p className="font-medium text-lg mt-2">{docInfo.speciality}</p>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 mt-3 rounded-full border border-blue-300">
              {docInfo.experience}
            </span>
          </div>
          <p className='text-sm text-gray-500 mt-3'>{docInfo.degree}</p>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About
              <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment Fees :
            <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <div className='flex gap-3 items-center w-full overflow-x-auto scroll-smooth scrollbar-hide px-4'>
          {
            doctorSlots.length > 0 && doctorSlots.map((item, index) => {
              const isFullyBooked = item.every(slot => slot.status === 'booked');
              if (isFullyBooked) return null;
              return (
                <div key={index} className={`text-center py-4 sm:py-6 min-w-11 sm:min-w-16 rounded-full cursor-pointer text-sm sm:text-base ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                  onClick={() => { setSlotIndex(index); setSlotTime(''); }}>
                  <p>{daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0].dateTime.getDate()}</p>
                </div>
              );
            })
          }
        </div>
        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 px-4 sm:px-0 mt-4 mb-6'>

          {doctorSlots.length &&
            doctorSlots[slotIndex].map((item, index) => {
              const isSelected = item.time === slotTime;
              return (
                <p key={index} className={`text-sm px-4 py-2 rounded-full cursor-pointer text-center font-medium border hover:translate-y-[-4px] transition-all duration-150 ${isSelected ? 'bg-primary text-white' : ''}`} onClick={() => { if (item.status !== 'booked') setSlotTime(item.time); }}>
                  {item.time.toLowerCase()}
                </p>
              );
            })}
        </div>
        {slotTime &&
          <button className='bg-primary text-white text-sm sm:text-base font-medium sm:px-6 py-2.5 sm:py-3 rounded-full mb-6 cursor-pointer w-fit sm:w-auto mx-4 sm:mx-0 px-5' onClick={bookAppointment}>Confirm Booking</button>
        }
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment;