import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiHome, BiUser, BiSearch } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai'
const Register = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className=' w-50 bg-slate-800 border-slate-400 rounded-md p-8 backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
      <h1 className='text-4xl text-white font-bold text-center'>Register</h1>
      <form action=" ">
      <div className='relative my-4'>

     <input
      type='email'
     
      className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-ring-0focus:text-white focus:border-blue-600 peer'
      />
      <label htmlFor="" className='absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-show:scale-100 peer-placeholder-show:translate-y-0 peer-focus:scale-75 peer-placeholder-show:translate-y-6 '> your email</label>
      <BiUser className='absolute top-1 right-4'/>
      </div>
      <div className='relative my-4'>
    <input
      type='password'
     
      className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-ring-0focus:text-white focus:border-blue-600 peer'
      />
      <label htmlFor="" className='absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-show:scale-100 peer-placeholder-show:translate-y-0 peer-focus:scale-75 peer-placeholder-show:translate-y-6 '> your password</label>
      <AiOutlineLock className='absolute top-1 right-4'/>
      </div>
      <div className='relative my-4'>
    <input
      type='password'
     
      className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus-ring-0focus:text-white focus:border-blue-600 peer'
      />
      <label htmlFor="" className='absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-show:scale-100 peer-placeholder-show:translate-y-0 peer-focus:scale-75 peer-placeholder-show:translate-y-6 '>Confirm password</label>
      <AiOutlineLock className='absolute top-1 right-4'/>
      </div>
     
      <button
      type='submit'
      className='w-full mb-4 text-[18px mt-6 rounded-full bg-white text-emerald-900 hover:bg-emerald-600 hover:text-white py-2'
      >
        Register
          </button>
      <div>
        <span className='mt-4'> already have account? <Link className='text-blue-500' to='/login'>Login</Link></span>
      </div>
      
          </form>
          </div>
    </div>
  )
}

export default Register
