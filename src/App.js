import React, {useState} from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import BudgetTracker from './components/BudgetTracker/BudgetTracker';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import MapPage from './components/MapPage/MapPage';
import { Login, Signup } from './components/Auth/Auth';

const MainLayout = () => (
  <div>
    <HomePage />
    <Popular />
    <Offers />
    <BudgetTracker />
    <CurrencyConverter />
    <About />
    <Blog />
    <Footer />
  </div>
);

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
    <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/map" element={<MapPage />} />
        <Route 
          path="/login" 
          element={<Login onLoginStateChange={setIsLogin} />}
          />
        <Route 
          path="/signup" 
          element={<Signup onLoginStateChange={setIsLogin} />}
          />
      </Routes>
    </Router>
  );
};

export default App;
