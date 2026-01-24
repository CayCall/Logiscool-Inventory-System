import React from 'react'
import LogscoolLogo from '../assets/Logiscool-logo.jpg'
const Header = () => {
  return (
    <div className='fixed top-0 left-0 mt-5 w-full bg-white'>
      <div className='flex items-center max-w-10xl mx-auto px-6'>
        <img src={LogscoolLogo} className='h-10 w-30' />

        <div className='flex gap-1 ml-auto'>
          <button className='
            px-5 py-2.5
            border border-gray-300 rounded-2xl bg-white
          hover:bg-blue-400 hover:border-2hover:border-black hover:text-white hover:transition duration-300 ease-in-out 
            shrink-0'
          >
            Sign In
          </button>
          <button className='
            px-5 py-2.5
            border-2 border-transparent rounded-2xl bg-blue-400 text-white 
          hover:bg-white hover:text-black hover:border-black hover:transition duration-300 ease-in-out 
            shrink-0'
          >
            Logout
          </button>
        </div>
      </div>
    </div>

  )
}

export default Header