import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/FinancialServices.css';
import '../css/FinancialServicesSection.css';
import financialImage from './../img/6 39521.png'; // Import your image
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';

function FinancialServices() {
    return (
        <>
            {/* Section 1: Financial Growth Section */}
            <Container className="financial-section my-5 py-4">
                <Row className="align-items-center">
                    <Col lg={4} md={12} className="text-center">
                        <img src={financialImage} alt="Financial Growth" className="img-fluid" />
                        <Button variant="primary" className="mt-3 get-started-button">Get Started Now</Button>
                    </Col>
                    <Col lg={8} md={12}>
                        <h5 className="services-title">Financial Services</h5>
                        <h2 className="services-heading">Lack Of Money Is The Root Of All Evil</h2>
                        <p className="services-subtext">and we focus on keeping you free from evil!</p>
                        <h4 className="services-subheading">We help you grow !!</h4>
                        <p className="services-description">
                            Our focus is to help your business in expansion, and we offer a wide array of services related to the same objective. It includes providing assistance in obtaining funds inflow for expansion and growth.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Section 2: Our Services Section */}
            <div className="financial-services-section">
                <Container>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading">FINANCIAL SERVICES</h1>
                            <h5 className="our-services">Our Services</h5>
                        </Col>
                    </Row>
                    <Row className="services-buttons">
                        {/* Service Buttons */}
                        {[
                            "Private Equity Fund Raise",
                            "Crowd Funding",
                            "Overdraft Limits",
                            "Working Capital Loans",
                            "Professional Loans",
                            "Commercial Loans"
                        ].map((service, index) => (
                            <Col lg={4} md={6} sm={12} className="mb-3" key={index}>
                                <Button variant="outline-light" className="service-button">
                                    {service}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Section 3: Expertise Section */}
            <div className='mt-5 mb-5'>

            <ExpertiseSection />
            </div>
        </>
    );
}

export default FinancialServices;
