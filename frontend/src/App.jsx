import React, {Fragment, useState , useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//import components
import Login from "./components/Login"
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Front from './components/Front';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterLender from './components/RegisterLender';
import thankYou from './components/thankYou';
import RegistrationSection from './components/RegistrationSection';
import LenderLogin from './components/LenderLogin'
import Status from './components/Status';
import AdminDashboard from './components/AdminDashboard';
import SupervisorDashboard from './components/SupervisorDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  async function isAuth() {
    try {
      const response = await fetch ("https://mortgage-application-server.vercel.app/auth/is-verify", {
        method: "GET",
        headers: {token: localStorage.token}
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  useEffect(() => {
    isAuth()
  },[ ])

  return (
    <Fragment>
     
      <Router >
      <Header isAuthenticated={isAuthenticated} setAuth={setAuth} />
        <div className='min-h-screen flex flex-col'>
          <ToastContainer/>
          <Routes>
  <Route path="/" element={<Front />} />
  <Route path="/registration" element={<RegistrationSection />} />

  <Route path="/register" element={<Register setAuth={setAuth} />} />
  <Route path="/register-lender" element={<RegisterLender setAuth={setAuth} />} />
  <Route path="/thankyou" element={<thankYou />} />

  <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" />} />
  <Route path="/login-lender" element={!isAuthenticated ? <LenderLogin setAuth={setAuth} /> : <Navigate to="/admin-dashboard" />} />
  
  
  <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/login" />} />
  
  
  <Route path="/admin-dashboard" element={isAuthenticated ? <AdminDashboard setAuth={setAuth} /> : <Navigate to="/login-lender" />} />
  
  
  <Route path="/supervisor-dashboard" element={isAuthenticated ? <SupervisorDashboard setAuth={setAuth} /> : <Navigate to="/login-lender" />} />
<Route path="/status" element={isAuthenticated ? <Status setAuth={setAuth} /> : <Navigate to="/login" />} />
</Routes>

        
        
        </div>
        <Footer />
      </Router>
    
    </Fragment>

  );
}

export default App;
