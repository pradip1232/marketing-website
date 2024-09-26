import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
const AboutUsSection = () => {
  return (
    <Container fluid className="py-5 position-absulate">
      <Row className="align-items-center">
        {/* Left Column: Text Content */}
        <Col md={6} className="text-md-left text-center">
          <h2>Digital Marketing</h2>
          <p>
            Experience the best-in-industry services by our team of experts catering to multiple clients across different industries.
          </p>
        </Col>

        {/* Right Column: Image */}
        <Col md={6}>
          <img
            src="https://example.com/your-image-url" // Replace with your actual image path
            alt="Digital Marketing Illustration"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Optional Contact Button */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="outline-dark" className="rounded-pill">
            Contact Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection;
