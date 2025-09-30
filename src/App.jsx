///vistas 

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';//importas rutas crea enlances
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User';
import './App.css';

//componet principal de la app
export default function App() {

  return ( 
    <div style={{padding: 20, fontFamily:'Inter, system-ui, sans-serif'}} >
      <nav style={{marginBottom: 16}}>
      
        <NavLink to="/" end style={({isActive})=> ({marginRight: 8, fontWeight: isActive ? '700' : '400'})}>Home
        </NavLink > 

        <NavLink to="about" end style={({isActive}) => ({marginRight: 8, fontWeight: isActive ? '700':'400'})} >About</NavLink> 

        <NavLink to="user" end style={({isActive}) => ({marginRight: 8, fontWeight: isActive ? '700' : '400'})}>User </NavLink>
      </nav>

  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/user/:id" element={<User />} /> //
      </Routes>

    </div>
  );
}
