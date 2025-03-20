import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    
    <Router className='text-white h-[100vh] flex justify-center items-center bg-center' style={{'background':'url("https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}>
      <Header/>
      <HomePage/>
      <Routes>
        <Route path='login' element={<LogIn />} />
        <Route path='register' element={<Register/>} />
      </Routes>
      <Footer />
    </Router>
    
     
  );
}

export default App;
