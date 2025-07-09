import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/home"
import About from "./pages/about"
import Create from "./pages/create"
import EditPage from "./pages/edit"
import Fav from "./pages/fav"
import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'


import Footer from './component/Footer';
import { Loader } from './component/loading'

function App() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-sm p-10 rounded-lg animate-pulse h-80">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Navbar/>
        <div style={{ flex: 1 }}>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<EditPage />} />
              <Route path="/fav" element={<Fav />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
