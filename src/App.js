import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pool from './pool'; // Ensure correct import
import Miner from './miner'; // Ensure correct import
import Navbar from './nav';
import Register from './register';
import Login from './login';
function App() {
  const [logged, setLog] = useState(true);
  return (
    <Router>
      {!logged ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pool />} />
            <Route path="/miner" element={<Miner />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
