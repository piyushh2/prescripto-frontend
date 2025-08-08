import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {

  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)
  const [edit, setEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('userId', userData._id)
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)
      image && formData.append('image', image)
      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setEdit(false)
        setImage(false)
      }
      else toast.error(data.message)
    }
    catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {edit ? (
        <label htmlFor='image'>
          <div className='inline-block relative cursor-pointer'>
            {image || userData.image ? (
              <img src={image ? URL.createObjectURL(image) : userData.image} alt="" className='w-36 rounded' />
            ) : null}
            <img src={assets.upload_icon} alt="" className='w-10 absolute bottom-12 right-12' />
          </div>
          <input type='file' id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
        </label>
      ) : (
        userData.image ? (
          <img src={userData.image} alt="" className='w-48 rounded-2xl' />
        ) : null
      )}
      {edit ? <input type="text" value={userData.name} className='bg-gray-100 text-3xl font-medium mt-4 p-2 rounded-2xl max-w-fit' onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} /> : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>}
      <hr className='bg-zinc-400 h-0.5 border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id</p>
          <p className='text-blue-600'>{userData.email}</p>
          <p className='font-medium'>Phone</p>
          {edit ? <input type="text" value={userData.phone} className='bg-gray-100 w-52 p-2 rounded-xl' onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))} /> : <p className='text-blue-600'>{userData.phone}</p>}
          <p>Address</p>
          {edit ?
            <p>
              <input type="text" className='bg-gray-100 w-52 p-2 mb-3 rounded-xl'
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                value={userData.address.line1} />
              <br />
              <input type="text" className='bg-gray-100 w-52 p-2 rounded-xl'
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                value={userData.address.line2} />
            </p> :
            <p className='text-gray-500'>
              {userData.address.line1}<br />{userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender</p>
          {edit ?
            <select className='bg-gray-100 w-52 p-2 rounded-xl cursor-pointer' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            :
            <p className='text-gray-500'>{userData.gender}</p>
          }
          <p className='font-medium'>Date of Birth</p>
          {edit ?
            <input type="date" className='bg-gray-100 w-52 p-2 rounded-xl' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
            :
            <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {edit ?
          <button className='border px-8 py-2 text-center text-sm rounded-xl w-fit cursor-pointer hover:bg-primary hover:text-white transition-all duration-300' onClick={updateUserProfileData}> Save Changes</button>
          :
          <button className='border px-8 py-2 text-center text-sm rounded-xl w-fit cursor-pointer hover:bg-primary hover:text-white transition-all duration-300' onClick={() => setEdit(true)}>Edit Profile</button>
        }
      </div>
    </div>
  )
}

export default MyProfile;