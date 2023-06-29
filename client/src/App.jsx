import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Cart, Landing, Marketplace, ProductPage, ProfilePage } from './pages/';
import { NavBar } from './components/';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/item/:id" element={<ProductPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/start" element={<Landing />} />
        </Routes>
    </>
  );
}

export default App;
