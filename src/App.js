// src/App.js
import React from "react";
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/600.css'; // For weight 600
import { Helmet } from 'react-helmet';
import logo from './img/logo.png';
import title from './img/squib logo circle.webp';

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
import DigitalMarketingServices from "./pages/DigitalMarketingServices";
import FinancialServices from "./pages/FinancialServices";
import HelpOffcanvas from "./components/HelpOffcanvas";
import HelpModal from "./components/HelpModal";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesigningServices from "./pages/GraphicDesigningServices";
import HrServices from "./pages/HrServices";
import LegalServices from "./pages/LegalServices";
import AccountingServices from "./pages/AccountingServices";
import PrintingServices from "./pages/PrintingServices";
import MarketingPage from "./pages/Marketing";
import BussniessCard from "./components/forms/Bussniess";
import VerticalStepper from "./components/forms/VerticalStepper";
import MM from "./components/HomeSections/MM";

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="icon" href={title} type="image/png" />
      </Helmet>

      <Navigation />
      {/* <HelpOffcanvas /> */}
      <HelpModal />
      <Routes>

        <Route path="/forms/BussniessCard" element={<BussniessCard />} />
        <Route path="/forms/VerticalStepper" element={<VerticalStepper />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="Offline-Marketing-Services" element={<OfflineMarketingServices />} />
        <Route path="Digital-Marketing-Services" element={<DigitalMarketingServices />} />
        <Route path="Financial-Services" element={<FinancialServices />} />
        <Route path="web-development" element={<WebDevelopment />} />
        <Route path="graphic-designing-services" element={<GraphicDesigningServices />} />
        <Route path="hr-services" element={<HrServices />} />
        <Route path="legal-services" element={<LegalServices />} />
        <Route path="accounting-services" element={<AccountingServices />} />
        <Route path="printing-services" element={<PrintingServices />} />
        <Route path="marketing" element={<MarketingPage />} />
        <Route path="/newmodal" element={<MM />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
