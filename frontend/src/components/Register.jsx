import React, {Fragment, useState} from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 const Register = ({setAuth})=> {

   const [inputs, setInputs] = useState({
     email:"",
     password:"",
    first_name:"",
    last_name:"",
    confirmPassword: ""
   })

   const [errors, setErrors] = useState({});

const navigate = useNavigate();
   const {email, password, first_name, last_name, confirmPassword} = inputs;

   const onChange = (e) => {
     setInputs({ ...inputs, [e.target.name]: e.target.value});
   }



  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(inputs)

const newErrors = ({});
if(!inputs.first_name) newErrors.first_name = "First name is required";
if(!inputs.last_name) newErrors.last_name = "Last Name is required";
if(!inputs.email) newErrors.email = "Email is is required";
if(!inputs.password) newErrors.password ="Password is required";

if (inputs.confirmPassword !== inputs.password) {
  newErrors.confirmPassword = "Passwords do not match";
}

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return; 
}

setErrors({})

    try {
     const body = {email, password, first_name, last_name};

     const response = await fetch("https://mortgage-application-server.vercel.app/auth/register", {
       method: "POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
        
    });

     const parseRes = await response.json();

     if(parseRes.token) {
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
     toast.success("Registered Successfully")
     navigate("/thankyou")  
    }else {
      setAuth(false)
     toast.error(parseRes)
        
    }
      
  } catch (error) {
   console.error(error.message)
      
  }
  
  }





  return (
    <>
      <div className="w-full h-[982px] relative bg-stone-100 overflow-hidden">
   
    <form 
    onSubmit={onSubmitForm}
    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[541px] p-12 bg-white rounded-lg inline-flex flex-col justify-start items-center gap-11">
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
                <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Sign up</div>
                <div className="self-stretch text-center justify-start"><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Already have an account? </span><Link to={'/login'} class="text-teal-500 text-base font-bold font-['Inter'] leading-normal">Log in</Link></div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div 
                    className={`w-full h-10  rounded-lg  outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5
                    ${ errors.first_name ? ' outline-orange-600':' outline-black' }
  `}>
                        <input
                        
                        name="first_name"
                        placeholder="First Name"
                        type="text"
                        value={first_name}
           onChange={(e) => onChange(e)}
                         className="w-full h-full px-4  placeholder:text-zinc-800 text-base font-normal font-['Inter'] leading-normal"/>
                         
                    </div>
                    {errors.first_name && <div className="self-stretch h-6 justify-start text-orange-600 text-base font-normal font-['Inter'] leading-normal">{errors.first_name}</div>}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className={`w-full h-10  rounded-lg  outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5
                    ${ errors.last_name? ' outline-orange-600':' outline-black' }
  `}>
                        <input 
                        name="last_name"
                        placeholder="Last Name"
                        type="text"
                        
                        value={last_name}
           onChange={(e) => onChange(e)}
                        
                        className="flex-1 h-full px-4 justify-start placeholder:text-zinc-800 text-base font-normal font-['Inter'] leading-normal" />
                    </div>
                    {errors.last_name && <div className="self-stretch h-6 justify-start text-orange-600 text-base font-normal font-['Inter'] leading-normal">{errors.last_name}</div>}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className={`w-full h-10  rounded-lg  outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5
                    ${ errors.email ? ' outline-orange-600':' outline-black' }
  `}>
                        < input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
          onChange={(e) => onChange(e)}
                        className="flex-1 h-full px-4 justify-start placeholder:text-zinc-800 text-base font-normal font-['Inter'] leading-normal" />
                    </div>
                    {errors.email && <div className="self-stretch h-6 justify-start text-orange-600 text-base font-normal font-['Inter'] leading-normal">{errors.email}</div>}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className={`w-full h-10  rounded-lg  outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5
                    ${ errors.password ? ' outline-orange-600':' outline-black' }
  `}>
                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                                 onChange={(e) => onChange(e)}

                         className="flex-1 h-full px-4 justify-start placeholder:text-zinc-800 text-base font-normal font-['Inter'] leading-normal" />
                    </div>
                    {errors.password && <div className="self-stretch h-6 justify-start text-orange-600 text-base font-normal font-['Inter'] leading-normal">{errors.password}</div>}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className={`w-full h-10  rounded-lg  outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2.5
                    ${ errors.confirmPassword ? ' outline-orange-600':' outline-black' }
  `}>
                        <input
                        
                        type="password" 
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => onChange(e)}
                        className="w-full h-full px-4 justify-start placeholder:text-zinc-800 text-base font-normal font-['Inter'] leading-normal"  />
                    </div>
                    {errors.confirmPassword && <div className="self-stretch h-6 justify-start text-orange-600 text-base font-normal font-['Inter'] leading-normal">{errors.confirmPassword}</div>}
                </div>
            </div>
        </div>
        <div className="self-stretch h-10  bg-Button-Inactive/20 rounded-[48px] inline-flex justify-center items-center gap-2.5">
<button 

className={`w-full h-full  p-2.5 rounded-[48px] text-Button-Text-Inactive/20 text-base font-['SF_Pro'] leading-snug
${  inputs.first_name && inputs.last_name &&  inputs.email &&  inputs.password &&  inputs.confirmPassword ? "bg-red-400 text-white" : "bg-neutral-100 text-stone-500"}
`}>Sign up</button>
</div>
    </form>
   
</div>
    </>
  )
}

export default Register
