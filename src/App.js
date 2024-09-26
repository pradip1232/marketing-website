// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import OfflineMarketingServices from "./pages/OfflineMarketingServices";
import Marketing from "./components/HomeSections/Marketing";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Offline-Marketing-Services" element={<OfflineMarketingServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
