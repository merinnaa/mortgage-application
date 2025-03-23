import React, {Fragment, useEffect, useState} from "react";
import { toast } from "react-toastify";


const Dashboard = ({setAuth})=> {
  const [name, setName] = useState("")

  async function getName() {
    try {
      const response = await fetch("https://mortgage-application-server.vercel.app/dashboard/", {
        method: "GET",
        headers: {token: localStorage.token}
      });
  
      const parseRes = await response.json();

      setName(parseRes.name.toUpperCase())
      
    } catch (error) {
      console.error(error.message)
      
    }

  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setAuth(false)
    toast.success("Loged out Successfully!!")
  }

  useEffect(()=> {
    getName()
  },[])

  return (
    <Fragment>
      <h1 className="text-center text-primary text-large my-5" >Fundify</h1>
      <h2>Welcome {name}</h2>
      <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
    </Fragment>
  )

}
export default Dashboard