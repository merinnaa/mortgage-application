import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { toast } from "react-toastify";

const Header = ({isAuthenticated, setAuth}) => {
  const [isOpen, setIsOpen] = useState(false);


const navigate = useNavigate();


  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setAuth(false);
   
    toast.success("Logged out Successfully!!")
    navigate('/login');
  }



  return (
    <header className="w-full bg-white px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        <div className="text-teal-500 text-2xl font-bold leading-9 tracking-tight font-inter">
          <Link to='/'>Fundify</Link>
        </div>

        
        <div className="hidden md:flex items-center gap-4">
         { !isAuthenticated ? (
          <>
          <Link
          to="/registration"
          className="px-6 py-2.5 bg-red-400 rounded-full text-white text-base leading-snug font-sans hover:bg-red-500 transition"
        >
          Create account
        </Link>
        <Link
          to="/login"
          className="text-teal-500 text-base leading-snug font-sans hover:underline"
        >
          Log in
        </Link>
      
      </>
        ) : (
          <button
          className='text-teal-500 text-base leading-snug font-sans hover:underline'
          onClick={logout}>
            Logout
          </button>
        ) } 
</div>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-teal-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 flex flex-col gap-4 bg-white border-t pt-4 ">
          {!isAuthenticated ? (
            <>
             <Link
             to="/register"
             className="block w-full py-2 bg-red-400 text-white rounded-full  text-center hover:bg-red-500 transition"
             onClick={() => setIsOpen(false)}
           >
             Create account
           </Link>
           <Link
             to="/login"
             className="block w-full text-teal-500 text-center"
             onClick={() => setIsOpen(false)}
           >
             Log in
           </Link>
           </>
          ) : (
          <button
          
          className="block w-full text-teal-500 text-center"
          onClick={logout}
          
        >
          Logout
        </button>
          )}
         
        </div>
      )}
      
    </header>
  );
};

export default Header;
