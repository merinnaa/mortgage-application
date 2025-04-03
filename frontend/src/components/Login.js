import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {GoogleLogin} from '@react-oauth/google'


const Login = ({setAuth})=> {
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
  const googleSuccess = async (response) => {
    try {
      const tokenId = response.tokenId;

      const responseGoogle = await fetch("https://mortgage-application-server.vercel.app/google-login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenId }),
      });

      const parseRes = await responseGoogle.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Google Login Success!");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error(error.message);
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
      <GoogleLogin
        clientId="445644859415-32ejmapv6q579590duc4oniuv8saethp.apps.googleusercontent.com"  // Google Client ID
        buttonText="Login with Google"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
      />
      <Link to="/register">Register</Link>
    </Fragment>
  )

}
export default Login