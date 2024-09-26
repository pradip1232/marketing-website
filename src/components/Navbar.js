import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from '../images/logo.png';
import Slogo from '../img/squib logo.webp';

function Navigation() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/').filter(Boolean).pop();
    const pageTitle = path
      ? path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
      : 'Squib Factory | Home';
    document.title = pageTitle;
  }, [location]);

  const [scrolled, setScrolled] = useState(false);

  const pagesWithBackground = ["/about", "/services", "/programs", "/clients", "/contact", "/Offline-Marketing-Services"];

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

  // Check if the current page is in the list of pagesWithBackground
  const isPageWithBackground = pagesWithBackground.includes(location.pathname);

  // Combine scrolled or isPageWithBackground to determine which logo to show
  const showSlogo = scrolled || isPageWithBackground;
  const showLogo = !showSlogo;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom-container navbar-custom ${scrolled || isPageWithBackground ? "scrolled" : ""}`}
    >
      <Container fluid className="navbar-custom-container2">
        <Navbar.Brand as={Link} to="/">
          {showLogo && <img className="logo" src={logo} alt="Logo" width={402} height={104} />}
          {showSlogo && <img className="slogo" src={Slogo} alt="Slogo" width={200} />}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
            <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contact-border">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
