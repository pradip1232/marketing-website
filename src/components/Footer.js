import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container>
        <Row className="text-center">
          {/* Address Section */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <FaMapMarkerAlt size={30} />
            <p>Aggarwal Corporate Heights, <br />Netaji Subhash Place,<br /> Pitampura, Delhi - 110034</p>
          </Col>

          {/* Contact Section */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <FaEnvelope size={30} />
            <p>Contact@squibfactory.com</p>
            <FaPhoneAlt size={30} />
            <p>+91-9667799617</p>
          </Col>

          {/* Social and Copyright Section */}
          <Col xs={12} md={4}>
            <div>
              <FaFacebook size={25} className="me-2" />
              <FaInstagram size={25} />
            </div>
            <p>© 2024 Squib Factory</p>
            {/* <p>Built using WordPress and the Mesmerize Theme</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
