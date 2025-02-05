import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/home" 


import Footer from "./layouts/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
 
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;