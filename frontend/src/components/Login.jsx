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
    <Fragment>
      <h1>Login</h1>
      <form onSubmit = {onSubmitForm}>
        <input 
          type="email"
          name = "email"
          placeholder="email"
          className="form-control my-3"
          value={email}
          onChange={(e) => onChange(e)}

        />
        <input 
        type="password"
        name = "password"
        placeholder="password"
        className="form-control my-3"
        value={password}
        onChange={(e) => onChange(e)}
        
        />

       <button className="btn btn-success btn-block">Login</button>
      </form>
      {/* Google Login Button */ }
      <GoogleOAuthProvider clientId="445644859415-32ejmapv6q579590duc4oniuv8saethp.apps.googleusercontent.com"  // Google Client ID
      >

      <GoogleLogin
          
        buttonText="Login with Google"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
      />

      </GoogleOAuthProvider>
      <Link to="/register">Register</Link>
    </Fragment>
  )

}
export default Login