import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'//importa el createroot para monstar la app
import { BrowserRouter } from 'react-router-dom'//hab el enrutado basado en el hist del browser
import './index.css'
import App from './App.jsx'



//monta la app con BrowserROute para las rutas
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);

