import { BrowserRouter, Routes, Route } from "react-router-dom";

import ButtonStatePage from "./projects/buttonState";
import NavbarDrop from "./projects/navbarDrop";

import './App.css'
import Root from "./projects/root";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="buttonstate" element={<ButtonStatePage/>} />
          <Route path="navbardrop" element={<NavbarDrop/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
