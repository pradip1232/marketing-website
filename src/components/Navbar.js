import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton CSS
import "./Navbar.css";
import logo from '../images/logo.png';
import Slogo from '../img/squib logo.webp';

function Navigation() {
  const location = useLocation();
  
  const [loading, setLoading] = useState(true); // Loading state
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const path = location.pathname.split('/').filter(Boolean).pop();
    const pageTitle = path
      ? path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
      : 'Squib Factory | Home';
    document.title = pageTitle;
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pagesWithBackground = [
    "/about", "/services", "/programs", "/clients", "/contact", 
    "/Offline-Marketing-Services", "/Digital-Marketing-Services", "/Financial-Services"
  ];

  const isPageWithBackground = pagesWithBackground.includes(location.pathname);
  const showSlogo = scrolled || isPageWithBackground;
  const showLogo = !showSlogo;

  // Simulate a loading effect for 2 seconds before rendering the navbar
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom-container navbar-custom ${scrolled || isPageWithBackground ? "scrolled" : ""}`}
    >
      <Container fluid className="navbar-custom-container2">
        <Navbar.Brand as={Link} to="/">
          {/* Display skeleton or logos based on loading state */}
          {loading ? (
            <Skeleton width={200} height={50} /> // Skeleton for the logo
          ) : (
            <>
              {showLogo && <img className="logo" src={logo} alt="Logo" width={402} height={104} />}
              {showSlogo && <img className="slogo" src={Slogo} alt="Slogo" width={200} />}
            </>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Display skeletons for nav links if loading */}
            {loading ? (
              <>
                <Skeleton width={70} height={20} style={{ marginRight: 20 }} />
                <Skeleton width={70} height={20} style={{ marginRight: 20 }} />
                <Skeleton width={70} height={20} style={{ marginRight: 20 }} />
                <Skeleton width={70} height={20} style={{ marginRight: 20 }} />
                <Skeleton width={70} height={20} />
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
                <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="contact-border">Contact Us</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
