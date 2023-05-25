import React from 'react';
import Nav from "./components/navbar/Navbar"
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;