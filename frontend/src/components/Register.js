import React, {Fragment, useState} from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = ({setAuth})=> {

  const [inputs, setInputs] = useState({
    email:"",
    password:"",
    name:""
  })

  const {email, password, name} = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value});
  }



  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {email, password, name};

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
        
      }else {
        setAuth(false)
        toast.error(parseRes)
        
      }
      
    } catch (error) {
      console.error(error.message)
      
    }
  }


  return (
    <Fragment>
      <h1>Register</h1>
      <form onSubmit={onSubmitForm}>
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
        <input 
        type="text"
        name = "name"
        placeholder="name"
        className="form-control my-3"
        value={name}
        onChange={(e) => onChange(e)}
        
        />
        <button className="btn btn-success btn-block">Submit</button>
        </form>
        <Link to="/login">Login</Link>
    </Fragment>
  )

}
export default Register