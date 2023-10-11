import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
