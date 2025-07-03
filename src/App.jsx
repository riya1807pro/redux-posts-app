import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/home"
import About from "./pages/about"
import Create from "./pages/create"
import EditPage from "./pages/edit"
import Fav from "./pages/fav"
import React from 'react'
import Navbar from './component/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/fav" element={<Fav />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
