import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-700 font-medium'>ABOUT US</p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img src={assets.about_image} alt="" className='w-full max-w-[360px] rounded-2xl' />
        <div className='flex flex-col justify-center gap-6 md:w-3/5 text-sm text-gray-600'>
          <p>Welcome to Prescripto — your trusted partner in simplifying doctor appointments and managing healthcare with ease. At Prescripto, we understand the everyday challenges of accessing quality medical care, from finding the right doctor to keeping track of health records. That's why we've built a platform that puts control back in your hands.</p>
          <p>With Prescripto, booking appointments, accessing prescriptions, and managing your health information is just a few clicks away. Whether you're planning a routine check-up or managing long-term care, we're here to make your healthcare journey smoother and more efficient.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To empower individuals by providing seamless, secure, and user-friendly tools that connect patients with healthcare providers anytime, anywhere.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At Prescripto, we envision a future where healthcare is accessible, connected, and personalized for everyone. We strive to bridge the gap between technology and medical care, ensuring that your health is always a priority.</p>
          <p>Experience healthcare the smart way — with Prescripto.</p>
        </div>
      </div>
      <div className='text-lg my-4'>
        <p className='text-gray-700 font-semibold'>OUR COMMITMENT TO EXCELLENCE</p>
        <p className='text-sm text-gray-600'>At Prescripto, excellence is not just a standard — it's our foundation. We are dedicated to delivering a seamless, secure, and patient-centric healthcare experience through cutting-edge technology and thoughtful design. From intuitive appointment scheduling to reliable medical record management, every feature of Prescripto is built to uphold the highest standards of quality, efficiency, and care. Because when it comes to your health, only the best will do.</p>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap gap-4 md:gap-2 mb-20 px-4'>
        {[
          {
            title: "EFFICIENCY",
            text: "Streamline your entire healthcare journey — from booking to follow-up — all in one easy-to-use platform."
          },
          {
            title: "CONVENIENCE",
            text: "Access healthcare anytime, anywhere — schedule appointments and manage records with just a few clicks."
          },
          {
            title: "SPEED",
            text: "Book appointments and get confirmations in seconds, reducing wait times and maximizing efficiency."
          },
          {
            title: "RELIABILITY",
            text: "Count on a secure, stable platform that keeps your health data safe and your care uninterrupted."
          }
        ].map((item, index) => (
          <div key={index} className='flex-1 min-w-[250px] px-6 py-6 sm:px-10 sm:py-8 flex flex-col gap-3 sm:gap-5 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-2xl border border-gray-300 shadow-sm'>
            <b className='text-base sm:text-lg'>{item.title}</b>
            <p className='text-sm sm:text-base leading-relaxed'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;