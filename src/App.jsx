import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Linki from './components/Linki';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:username" element={<Linki />} />
    </Routes>
    </>
  )
}

export default App
