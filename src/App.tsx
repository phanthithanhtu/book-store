import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TheloaiPage from './pages/Theloai/TheloaiPage';
import { LoginPage } from './pages/Dangnhap/Dangnhap'; // Import the TheloaiPage component

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/theloai" element={<TheloaiPage />} />
        <Route path="/dangnhap" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
