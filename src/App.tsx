import { BrowserRouter, Routes, Route } from "react-router-dom";

import ButtonState from "./projects/ButtonState";
import NavbarDropDown from "./projects/NavbarDropDown";
import Home from "./projects/Home";
import StateForm from "./projects/Form";

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buttonstate" element={<ButtonState />} />
          <Route path="navbardrop" element={<NavbarDropDown />} />
          <Route path="stateform" element={<StateForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
