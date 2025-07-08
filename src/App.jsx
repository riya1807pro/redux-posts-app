import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/home"
import About from "./pages/about"
import Create from "./pages/create"
import EditPage from "./pages/edit"
import Fav from "./pages/fav"
import React from 'react'
import Navbar from './component/Navbar'


import Footer from './component/Footer';

function App() {
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
