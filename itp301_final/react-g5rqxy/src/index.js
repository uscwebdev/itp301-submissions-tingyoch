import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './styling/navStyle.css';
import './styling/aboutStyle.css';
import './styling/contactStyle.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
