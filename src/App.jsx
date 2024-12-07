import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import TOS from './Pages/TOS/TOS';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Auth from './Pages/Auth/Auth';
import Onboarding from './Pages/Onboarding/Onboarding';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/TermsOfService' element={<TOS />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/onboarding' element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
