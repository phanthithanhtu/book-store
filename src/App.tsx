import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BrowsePage from './pages/Browse/BrowsePage';
import { LoginPage } from './pages/Login/LoginPage';
import { UserProvider } from './pages/Login/UserContext';
import StoryDetail from './pages/StoryDetail/StoryDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import ChapterView from './pages/ChapterView/ChapterView';
import ChapPage from './pages/ChapterView/ChapPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dangnhap" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/theloai" element={<BrowsePage />} />
            <Route path="/novel/:url" element={<StoryDetail />} />
            <Route path="truyen/:url/:chapnum" element={<ChapPage />} />
          </Routes>
          <Footer />
        </UserProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
