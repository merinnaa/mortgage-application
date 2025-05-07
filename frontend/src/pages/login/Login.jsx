import React, {Fragment, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google'


const Login = ({setAuth})=> {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email:"",
    password:""
  })

  const {email, password} = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value});
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {email, password};

      const response = await fetch("https://mortgage-application-server.vercel.app/auth/login", {
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login Successfully!!")
        navigate("/thankyou");
      }else {
        setAuth(false)
        toast.error(parseRes)
        
      }
      
    } catch (error) {
      console.error(error.message)
      
    }
  }
  
  // Google login success handler
  const googleSuccess = async (credentialResponse) => {
    try {
      // The response object contains `credential` and `clientId`
      // const { credential, clientId, selectBy } = credentialResponse;
  
      // Send the data to the backend (no need to stringify the credential, it's already a string)
      const responseGoogle = await fetch("https://mortgage-application-server.vercel.app/gauth/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: credentialResponse.credential,  // The token from Google Sign-In
        clientId: credentialResponse.clientId,      // Your client ID from Google
        select_by: credentialResponse.select_by }),  // Send the correct data
      });
  
      // Ensure the backend responds with a JSON object
      if (!responseGoogle.ok) {
        throw new Error('Google login failed. Please try again.');
      }
  
      // Parse the response
      const parseRes = await responseGoogle.json();
  
      // Check if the token is in the response
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Google Login Success!");
        navigate('/dashboard');  // Fixed the typo here
      } else {
        setAuth(false);
        toast.error(parseRes.error || 'Unknown error occurred');
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message || 'An error occurred during Google login');
    }
  };
  // Google login error handler
  const googleFailure = (error) => {
    toast.error("Google Login Failed. Try Again!");
  };


  return (
    <>



   
    <form 
    onSubmit = {onSubmitForm}
   
>
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
                
             
          {/* Google Login Button */ }

          <div  className="flex justify-start items-center gap-2.5">

<GoogleOAuthProvider clientId="445644859415-0ek2a6s4n67ml9dh9uc0ap8bfk1fi17k.apps.googleusercontent.com"  // Google Client ID
>

<GoogleLogin
    
  buttonText="Login with Google"
  onSuccess={googleSuccess}
  onFailure={googleFailure}
  cookiePolicy={'single_host_origin'}
  className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal flex justify-start items-center gap-2.5"
/>

</GoogleOAuthProvider>

</div>


            </div>
        
            <div className="self-stretch inline-flex justify-center items-center gap-2.5">
    <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
    <div className="text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">or</div>
    <div className="w-44 h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full h-10 px-3 rounded-lg bg-white border border-black focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                        <input 
                         type="email"
                         name = "email"
                         placeholder="Email address *"
                         
                         value={email}
                         onChange={(e) => onChange(e)}
                        className="w-full h-full text-zinc-800 text-base font-normal font-['Inter'] leading-normal outline-none bg-transparent" / >
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="w-full h-10 px-3 rounded-lg bg-white border border-black focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                        < input
                        type = "password"
                        name = "password"
                        placeholder="Password *"
                        
                        value={password}
                        onChange={(e) => onChange(e)}
                        className="w-full h-full text-zinc-800 text-base font-normal font-['Inter'] leading-normal outline-none bg-transparent" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full mt-4">
  <button
    disabled={!email || !password}
    type="submit"
    className={`w-full h-10 p-2.5 rounded-[48px] text-base font-semibold leading-snug transition 
      ${email && password ? "bg-red-400 text-white" : "bg-neutral-100 text-stone-500 cursor-not-allowed"}
    `}
  >
    Log in
  </button>
</div>



       
       

    </form>
    


      
    </>
  )

}
export default Login