import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <header>
    <nav>
      <ul className='list-none py-0'>
        <li>
      <Link to='/login' >
        login
        </Link>
        </li>
        <li><Link to='/register'>Register</Link></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
