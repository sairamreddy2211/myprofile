import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MainLanding from './components/mainlanding/mainlanding';
import Landing from './components/Landing/Landing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/journey" element={<MainLanding />} />
      </Routes>
    </Router>
  );
}

export default App;