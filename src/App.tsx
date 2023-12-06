import { BrowserRouter, Routes, Route } from "react-router-dom";

import ButtonStatePage from "./projects/buttonState";
import NavbarDrop from "./projects/navbarDrop";
import Home from "./projects/Home";

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="buttonstate" element={<ButtonStatePage/>} />
          <Route path="navbardrop" element={<NavbarDrop/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
