import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Home from "./pages/Home.page";
import Footer from "./components/footer.component";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
