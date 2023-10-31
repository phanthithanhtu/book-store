import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BrowsePage from './pages/Browse/BrowsePage';
import { LoginPage } from './pages/Login/LoginPage';
import { UserProvider } from './pages/Login/UserContext';
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dangnhap" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/theloai" element={<BrowsePage />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
