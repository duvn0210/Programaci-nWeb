import './App.css';
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RegisterLogin from './Pages/RegisterLogin';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/inicio" element={<RegisterLogin/>} />
    <Route path="/iniciarSesion" element={<Login/>} />
    <Route path="/registrarse" element={<Register/>} />
    <Route path="/graficas" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
