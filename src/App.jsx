import './App.css'
import Landing from './components/Landing'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import LinkiPage from './components/LinkiPage';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:username" element={<LinkiPage />} />
    </Routes>
    </>
  )
}

export default App
