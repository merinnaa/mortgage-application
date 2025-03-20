import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <header>
    <nav>
      <ul className='list-none px-0.5 text-right bg-gray-600 m-0'>
        <li className='inline ml-2'>
      <Link to='/login' >
        login
        </Link>
        </li>
        <li className='inline ml-2'><Link to='/register'>Register</Link></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
