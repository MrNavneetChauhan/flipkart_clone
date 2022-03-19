
import { Home } from './components/home/Home';
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Cart } from './components/cart/Cart';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
