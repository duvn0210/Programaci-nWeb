import './App.css';
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RegisterLogin from './Pages/RegisterLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/inicio" element={<RegisterLogin/>} />
    <Route path="/iniciarSesion" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
