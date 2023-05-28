import React from 'react';
import Nav from "./components/navbar/Navbar"
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
// import auth from './pages/auth/forgetPassword/ForgetPassword';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Gallery />} />
        {/* <Route path='/' element={<auth />} /> */}

      </Routes>
    </>
  );
}

export default App;