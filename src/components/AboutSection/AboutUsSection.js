import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../img/9 2.png'; // Ensure this path is correct for your image
import './about.css';

const AboutUsSection = () => {
  return (
    <section className='about-section-deigital'>

      <div className="about-section">
        <Container fluid className="py-5 position-relative d-flex justify-content-start align-items-left text-left">
          <Row className="align-items-start w-100">
            <Col md={8} className="text-left etxt-colomn text-black">
              <h2>Digital Marketing</h2>
              <p className="lead">
                Experience the best-in-industry services by our team of experts catering to multiple clients across different industries.
              </p>
              <Button variant="outline-light" className="rounded-pill mt-3">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AboutUsSection;
