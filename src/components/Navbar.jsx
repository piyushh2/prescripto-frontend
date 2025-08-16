import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logout = () => {
    toast.success("Logged out successfully")
    setToken(false);
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mx-8 mb-5 border-b border-b-gray-400'>
      <img className='w-50 cursor-pointer' src={assets.logo} alt="Logo" onClick={() => navigate('/')} />
      <ul className='hidden md:flex items-end gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-2 text-[16px]'>HOME</li>
          <hr className='border-none outline-none h-0.5 w-4/5 m-auto hidden bg-primary' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-2 text-[16px]'>DOCTORS</li>
          <hr className='border-none outline-none h-0.5 w-4/5 m-auto hidden bg-primary' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-2 text-[16px]'>ABOUT US</li>
          <hr className='border-none outline-none h-0.5 w-4/5 m-auto hidden bg-primary' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-2 text-[16px]'>CONTACT US</li>
          <hr className='border-none outline-none h-0.5 w-4/5 m-auto hidden bg-primary' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
      </div>
      {token && userData ?
        <div className='flex items-center gap-2 group cursor-pointer relative' onClick={() => setDropdownOpen(prev => !prev)}>
          <img className='w-10 rounded-full' src={userData.image} alt="Profile Pic" />
          <img className='w-3' src={assets.dropdown_icon} alt="Dropdown" />
          <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 ${dropdownOpen ? 'block' : 'hidden'}`}>
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
              <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
              <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
              <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>
        :
        <>
          <div className='flex justify-end gap-4'>
            <button className='text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer bg-primary' onClick={() => window.location.href = 'https://prescripto--admin.vercel.app/'}>
              Admin Panel
            </button>
            <button className='text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer bg-primary' onClick={() => { navigate('/login'); scrollTo(0, 0) }}>Sign In</button>
          </div>
        </>
      }
      <img src={assets.menu_icon} alt="" className='w-5 md:hidden' onClick={() => setShowMenu(true)} />
      <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img src={assets.logo} alt="" className='w-36' />
          <img src={assets.cross_icon} alt="" className='w-7' onClick={() => setShowMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink to='/' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
          <NavLink to='/doctors' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Doctors</p></NavLink>
          <NavLink to='/about' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>About Us</p></NavLink>
          <NavLink to='/contact' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Contact Us</p></NavLink>
        </ul>
      </div>
    </div >
  )
}

export default Navbar;