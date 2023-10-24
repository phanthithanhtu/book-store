import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TheloaiPage from './pages/Theloai/TheloaiPage'; // Import the TheloaiPage component

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/theloai" element={<TheloaiPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
