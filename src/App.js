import React from 'react';
import Nav from "./components/navbar/Navbar"
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Gallary from './pages/gallary/Gallary';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import ForgetPassword from './pages/auth/forgetPassword/ForgetPassword';
import Premium from './pages/auth/premium/Premium';
import Watchlater from './pages/menu/watchlater/Watchlater';
import Likedvideo from './pages/menu/likedvideo/Likedvideo';
import History from './pages/menu/history/History';
import Trending from './pages/menu/trending/Trending';
import Mockman from "mockman-js";
// import { useGlobal } from '../../../contexts/authContext/';


function App() {

  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallary' element={<Gallary />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/watchlater' element={<Watchlater />} />
        <Route path='/likedvideo' element={<Likedvideo />} />
        <Route path='/history' element={<History />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;