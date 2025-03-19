import React from 'react'

const LogIn = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
     <input
      type='email'
      placeholder='email'
      />
    <input
      type='password'
      placeholder='password'
      />
      <button
      type='submit'
      className='bg-blue'
      >
        Login
          </button>
      </form>
    </div>
  )
}

export default LogIn
