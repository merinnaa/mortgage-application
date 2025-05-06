import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import home from '../images/home.png'
import brief from '../images/briefcase.png'


const RegistrationSection = () => {

const [selectedRole, SetSelectedRole] = useState(null)
const navigate = useNavigate();

const handleRadioChange = (e) => {
  
  SetSelectedRole(e.target.value)
} 

const handleSubmit = () => {
    if (selectedRole === "borrower") {
        navigate('/register');
    }else if (selectedRole === "lender")
    navigate('/register-lender');
}

  return (
    <>
      <div className="w-full  min-h-screen  bg-stone-100 flex flex-col items-center pt-16 md:pt-[150px]">
   
    
      <form 
     
      className="w-full max-w-[580px] mt-20 flex flex-col justify-center items-center gap-8">

        <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Join as a loan seeker or lender</div>
            <div
                 className="self-stretch inline-flex justify-start items-start gap-6" >


<label
  htmlFor="borrower"
  className={`w-72  min-h-[180px] p-6 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2.5 outline outline-2 outline-offset-[-2px] cursor-pointer
    ${selectedRole === "borrower" ? "outline-red-400" : "outline-gray-200"}
    transition-colors duration-200 ease-in-out
  `}
>
  <div className="w-full flex flex-col justify-start items-end gap-4">
    <div className="self-stretch inline-flex justify-between items-start">
     
    <div className="w-6 h-6 relative overflow-hidden">
                            <img img src={home} />
                            </div>

     
      <input
        type="radio"
        id="borrower"
        name="userRole"
        value="borrower"
        onChange={handleRadioChange}
        checked={selectedRole === "borrower"}
        className="hidden"
      />

      
      <div className={`w-6 h-6 p-1.5 rounded-xl outline outline-2 outline-offset-[-2px] flex justify-center items-center
        ${selectedRole === "borrower" ? "outline-red-400" : "outline-zinc-800"}
      `}>
        {selectedRole === "borrower" && (
          <div className="w-3 h-3 bg-red-400 rounded-full" />
        )}
      </div>
    </div>

    <div className="inline-flex justify-center items-center gap-2.5">
      <div className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
        I’m applying for a mortgage loan
      </div>
    </div>
  </div>
</label>




                    


<label
  htmlFor="lender"
  className={`w-72 min-h-[180px] p-6 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2.5 outline outline-2 outline-offset-[-2px] cursor-pointer
    ${selectedRole === "lender" ? "outline-red-400" : "outline-gray-200"}
    transition-colors duration-200 ease-in-out
  `}
>
  <div className="w-full flex flex-col justify-start items-end gap-4">
    <div className="self-stretch inline-flex justify-between items-start">

    <div className="w-6 h-6 relative overflow-hidden">
                              <img src={brief} />
                                
                            </div>

     
      <input
        type="radio"
        id="lender"
        name="userRole"
        value="lender"
        onChange={handleRadioChange}
        checked={selectedRole === "lender"}
        className="hidden"
      />

     
      <div className="w-6 h-6 p-1.5 rounded-xl outline outline-2 outline-offset-[-2px] flex justify-center items-center
        transition-colors duration-200 ease-in-out
        ${
          selectedRole === 'lender'
            ? 'outline-red-400'
            : 'outline-zinc-800'
        }"
      >
        {selectedRole === "lender" && (
          <div className="w-3 h-3 bg-red-400 rounded-full" />
        )}
      </div>
    </div>

    <div className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
      I’m processing a mortgage loan<br />for clients
    </div>
  </div>
</label>



            </div>
        </div>
        <div className="w-48  flex flex-col justify-center items-center gap-2.5">
  <div className="self-stretch flex-1 p-2.5  rounded-[48px] inline-flex justify-center items-center gap-2.5">
    <button
      onClick={handleSubmit}
      className={`justify-start text-zinc-800 text-base font-['SF_Pro'] leading-snug px-4 py-2 rounded-full
        ${selectedRole ? 'bg-red-500 text-white' : 'bg-stone-200 text-gray-500 cursor-not-allowed'}
      `}
      disabled={!selectedRole}
    >
      Create account
    </button>
  </div>
</div>
        
        
    </form>
</div>
    </>
  )
}

export default RegistrationSection
