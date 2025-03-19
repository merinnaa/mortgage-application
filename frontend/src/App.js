import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header/>
      <HomePage/>
      <Routes>
        <Route path='login' element={<LogIn />} />
        <Route path='login' element={<Register/>} />
      </Routes>
      <Footer />
    </Router>
     
  );
}

export default App;
