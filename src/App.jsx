import './App.css';
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" element={<Home/>} />
    <Route path="/iniciarSesion" element={<Login/>} />
    </BrowserRouter>
    
  );
}

export default App;
