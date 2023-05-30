import React from 'react';
import Nav from "./components/navbar/Navbar"
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Gallary from './pages/gallary/Gallary';
import Login from './pages/auth/login/Login';
// import Premium from './components/navbar/N';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallary' element={<Gallary />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/premium' element={<Premium />} /> */}

      </Routes>
    </>
  );
}

export default App;