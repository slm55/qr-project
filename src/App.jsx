import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Shop from './pages/Shop'
import Lookbook from './pages/Lookbook'
import Layout from './pages/Layout'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>}  />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/lookbook" element={<Lookbook/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
