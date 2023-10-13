import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./global.scss";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div
        className="main-container"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
