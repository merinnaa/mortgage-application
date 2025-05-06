import React, {Fragment, useState , useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApplicantCard from './pages/admin/ApplicantCrad';


//import components
import Login from "./pages/login/Login"
import Register from './pages/registration/Register';
import Dashboard from './pages/borrower/Dashboard';
import Front from './components/Front';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterLender from './pages/registration/RegisterLender';
import thankYou from './pages/thankyou/thankYou';
import RegistrationSection from './pages/RegistrationSection';
import LenderLogin from './pages/login/LenderLogin'
import Status from './pages/borrower/Status';
import AdminDashboard from './pages/admin/AdminDashboard';
import SupervisorDashboard from './pages/supervisor/SupervisorDashboard';
import LenderThankYou from './pages/thankyou/LenderThankYou';
import Application from './components/Application';
import SignIn from './pages/login/SignIn';

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
  <Route path="/register-lender" element={<RegisterLender setAuth={setAuth} />} />
  <Route path="/lender-thankyou" element={<LenderThankYou />} />

  <Route path="/login" element={ <Login setAuth={setAuth} /> } />
  <Route path="/login-lender" element={<LenderLogin setAuth={setAuth} />} />
  <Route path="/sign-in" element={<SignIn setAuth={setAuth} />} />
  
  
  <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/sign-in" />} />
  
  
  <Route path="/admin-dashboard" element={isAuthenticated ? <AdminDashboard setAuth={setAuth} /> : <Navigate to="/sign-in" />} />
  <Route path="/application" element={isAuthenticated ? <Application setAuth={setAuth} /> : <Navigate to="/sign-in" />} />
  
  
  <Route path="/supervisor-dashboard" element={isAuthenticated ? <SupervisorDashboard setAuth={setAuth} /> : <Navigate to="/sign-in" />} />
<Route path="/status" element={isAuthenticated ? <Status setAuth={setAuth} /> : <Navigate to="/sign-in" />} />
</Routes>

        
        
        </div>
        <Footer />
      </Router>
    
    </Fragment>

  );
}

export default App;
