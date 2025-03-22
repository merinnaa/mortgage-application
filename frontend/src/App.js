import React, {Fragment, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



//import components
import Login from "./components/Login"
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  return (
    <Fragment>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/login" element= {< Login  setAuth={setAuth}/> }/>
            <Route path="/register" element= {< Register  setAuth={setAuth}/> }/>
            <Route path="/dashboard" element= {< Dashboard  setAuth={setAuth}/> }/>

          </Routes>

        </div>
      </Router>

    </Fragment>

  );
}

export default App;
