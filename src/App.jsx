import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Home from "./pages/Home.page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
