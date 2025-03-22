import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <header>
    <nav className=''>
      <ul className='list-none px-0.5 text-right text-white  text-2xl bg-gray-600 m-0'>
        <li className='inline ml-2 '>
      <Link to='/login' >
        Login
        </Link>
        </li>
        <li className='inline ml-2'><Link to='/register'>Register</Link></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
