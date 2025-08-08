import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { token, setToken, backendUrl } = useContext(AppContext);
  const navigate = useNavigate()

  const [state, setState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Sign up") {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password })
        if (data.success) {
          toast.success("Signed up successfully");
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }
        else toast.error(data.message)
      }
      else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }
        else toast.error(data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  return (
    <form className='min-h-[45vh] flex my-10' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-2xl text-zinc-600 shadow-xl'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? "Sign up" : "Sign In"}</p>
        <p>{state === 'Sign up' ? "Create your Prescripto account to continue" : "Welcome back! Please sign in"}</p>

        {state === 'Sign up' &&
          <div className='w-full'>
            <p>Full Name</p>
            <input type='text' onChange={(e) => setName(e.target.value)} value={name} required className='border border-zinc-300 rounded w-full p-2 mt-1' />
          </div>
        }
        <div className='w-full'>
          <p>Email Id</p>
          <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} required className='border border-zinc-300 rounded w-full p-2 mt-1' />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required className='border border-zinc-300 rounded w-full p-2 mt-1' />
        </div>
        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer'>{state === 'Sign up' ? "Sign up" : "Log in"}</button>
        {state === 'Sign up' ? <p className='text-primary underline cursor-pointer' onClick={() => { setState('Login'); scrollTo(0, 0) }}>Already have an account?</p> : <p className='text-primary underline cursor-pointer' onClick={() => { setState('Sign up'); scrollTo(0, 0) }}>Sign up for Prescipto</p>}
      </div>
    </form>
  )
}

export default Login;