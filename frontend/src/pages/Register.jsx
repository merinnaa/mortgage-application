import React from 'react'
import { useState } from 'react'
const Register = () => {
  return (
    <div>
      <ul>
        <li><label>First Name</label><input/></li>
        <li><label>Last Name</label><input/></li>
        <li><label>email</label><input/></li>
        <li><label>password</label><input/></li>
        <li><label>confirm password</label><input/></li>
      </ul>
      <button>Register</button>
    </div>
  )
}

export default Register
