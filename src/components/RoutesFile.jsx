import React from "react";
import Home from "./Home";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function RoutesFile() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
