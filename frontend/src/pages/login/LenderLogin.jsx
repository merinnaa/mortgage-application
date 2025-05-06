import React, {Fragment, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google'


const LoginLender = ({setAuth})=> {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    employee_id:"",
    role:"",
    institution:"",
    password: ""

  })

  const {employee_id, role, institution, password} = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value});
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {employee_id, role, institution, password};

      const response = await fetch("https://mortgage-application-server.vercel.app/auth/login-lender", {
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login Successfully!!");
      
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "supervisor") {
          navigate("/supervisor-dashboard");
        } else {
          navigate("/dashboard"); 
        }
      
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
      
    } catch (error) {
      console.error(error.message)
      
    }
  }
  
 


  return (
    <>



   
    <form 
    onSubmit = {onSubmitForm}
   
    >
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
          
           {/* line here */}

        <div className="self-stretch inline-flex justify-center items-center gap-2.5">
    <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
    <div className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">or</div>
    <div className="w-44 h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
</div>

            <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">

              
  <div className="self-stretch h-10 px-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
    <select
      name="role"
      value={role}
      onChange={(e) => onChange(e)}
      className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal"
    >
      <option value="">Select Role *</option>
      <option value="admin">Admin</option>
      <option value="supervisor">Supervisor</option>
    </select>
  </div>
</div>

<div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full h-10 px-3 rounded-lg bg-white border border-black focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                        <input 
                         type="text"
                         name = "institution"
                         placeholder="Institution"
                         
                         value={institution}
                         onChange={(e) => onChange(e)}
                        className="w-full h-full text-zinc-800 text-base font-normal font-['Inter'] leading-normal outline-none bg-transparent" / >
                    </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full h-10 px-3 rounded-lg bg-white border border-black focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                        <input 
                         type="text"
                         name = "employee_id"
                         placeholder="Employee ID"
                         
                         value={employee_id}
                         onChange={(e) => onChange(e)}
                        className="w-full h-full text-zinc-800 text-base font-normal font-['Inter'] leading-normal outline-none bg-transparent" / >
                    </div>
                </div>
               
          

                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full h-10 px-3 rounded-lg bg-white border border-black focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                        <input 
                         type="password"
                         name = "password"
                         placeholder="Password"
                         
                         value={password}
                         onChange={(e) => onChange(e)}
                        className="w-full h-full text-zinc-800 text-base font-normal font-['Inter'] leading-normal outline-none bg-transparent" / >
                    </div>
                </div>
                </div>
        </div>
        <div className="w-full mt-4">
  <button
    disabled={!employee_id || !institution || !role || !password}
    type="submit"
    className={`w-full h-10 p-2.5 rounded-[48px] text-base font-semibold leading-snug transition 
      ${employee_id && institution && role && password ? "bg-red-400 text-white" : "bg-neutral-100 text-stone-500 cursor-not-allowed"}
    `}
  >
    Log in
  </button>
</div>


    </form>
    


      
    </>
  )

}
export default LoginLender


{/* 

<div className="w-[500px] p-12 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-11">
    <div className="self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Log in</div>
            <div className="self-stretch inline-flex justify-center items-center">
                <div className="w-36 h-10 px-4 bg-Button-Inactive/20 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center justify-start text-Inactive-Button/20 text-base font-['SF_Pro'] leading-snug">Borrower</div>
                </div>
                <div className="w-36 h-10 px-4 bg-red-400 rounded-tr-2xl rounded-br-2xl flex justify-center items-center gap-2.5">
                    <div className="flex-1 text-center justify-start text-white text-base font-['SF_Pro'] leading-snug">Lender</div>
                </div>
            </div>
            <div className="self-stretch text-center justify-start"><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">New to Fundify? </span><span class="text-teal-500 text-base font-bold font-['Inter'] leading-normal">Sign up for free</span></div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch h-10 px-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
                <div className="flex justify-start items-center gap-2">
                    <div className="w-6 h-6 relative bg-white">
                        <div className="w-3 h-2.5 left-[12px] top-[9.91px] absolute bg-blue-500" />
                        <div className="w-4 h-2.5 left-[1.72px] top-[14.18px] absolute bg-green-600" />
                        <div className="w-[5.07px] h-2.5 left-[0.50px] top-[6.84px] absolute bg-yellow-500" />
                        <div className="w-4 h-2.5 left-[1.72px] top-[0.50px] absolute bg-red-500" />
                        <div className="w-6 h-6 left-[0.50px] top-[0.50px] absolute" />
                    </div>
                    <div className="flex justify-start items-center gap-2.5">
                        <div className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Continue with Google</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
                <div className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">or</div>
                <div className="w-44 h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
            </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch h-10 px-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
                    <div className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Employee ID *</div>
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch h-10 px-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
                    <div className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Institution</div>
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch h-10 px-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
                    <div className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Password</div>
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch h-10 px-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-center items-center gap-2.5">
                    <div className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Select role type</div>
                    <div className="w-0 h-6 relative origin-top-left -rotate-90 overflow-hidden">
                        <div className="w-5 h-3 left-[2px] top-[6.11px] absolute bg-zinc-800" />
                    </div>
                </div>
            </div>
            <div className="self-stretch justify-start text-teal-500 text-base font-bold font-['Inter'] leading-normal">Forgot password?</div>
        </div>
    </div>
    <div className="self-stretch h-10 p-2.5 bg-Button-Inactive/20 rounded-[48px] inline-flex justify-center items-center gap-2.5">
        <div className="justify-start text-Button-Text-Inactive/20 text-base font-['SF_Pro'] leading-snug">Log in</div>
    </div>
</div>
*/}