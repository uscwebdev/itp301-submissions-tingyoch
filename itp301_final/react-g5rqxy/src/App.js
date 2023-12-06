import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar.js';
import About from './pages/About.js';
import Creative from './pages/Creative.js';
import Analytic from './pages/Analytic.js';
import ContactMe from './pages/ContactMe.js';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route index element={<About />} />
          <Route path="/Creative.js" element={<Creative />} />
          <Route path="/Analytic.js" element={<Analytic />} />
          <Route path="/ContactMe.js" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}
