import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="w-full h-16 px-12 bg-white inline-flex justify-between items-center">
      
<div className="text-center justify-center text-teal-500 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Fundify</div>
<div className="flex justify-start items-center gap-4">
<div className="px-6 py-2.5 bg-red-400 rounded-[48px] flex justify-center items-center gap-2.5">
<Link to="/register" className="justify-start text-white text-base font-['SF_Pro'] leading-snug">Create account</Link>
</div>
<Link to="/login" className="justify-start text-teal-500 text-base font-['SF_Pro'] leading-snug">Sign in</Link>
</div>

    </nav>
  )
}

export default Header
