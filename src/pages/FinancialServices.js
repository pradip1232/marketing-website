import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/FinancialServices.css';
import '../css/FinancialServicesSection.css';
import financialImage from './../img/6 39521.png'; // Import your image
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';

function FinancialServices() {
    return (
        <>
            {/* Section 1: Financial Growth Section */}
            <Container fluid className="financial-section my-5 py-4">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={5}>
                            <div className='fin-main-heading'>

                                <h5 className="services-title">Financial Services</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Row className="align-items-center imgORtext">
                    <Col lg={5} md={12} className="text-center">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={financialImage} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
                            <Button
                                variant="primary"
                                className="get-started-button"
                                style={{
                                    position: 'absolute',
                                    bottom: '70px',
                                    right: '-101px',
                                    height: '54px',
                                    width: '272px',
                                }}
                            >
                                Get Started Now
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6} md={7} className='lack-text'>
                        {/* <h5 className="services-title">Financial Services</h5> */}
                        <h2 className="services-heading">Lack Of Money Is The Root Of All Evil</h2>
                        <p className="services-subtext">and we focus on keeping you free from evil!</p>
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading">We help you grow !!</h4>
                        <p className="services-description">
                            Our focus is to help your business in expansion, and we offer a wide array of services related to the same objective. It includes providing assistance in obtaining funds inflow for expansion and growth.
                        </p>
                    </Col>
                </Row>
            </Container>

            <LookingWithContactBtn />

            {/* Section 2: Our Services Section */}
            <Container fluid className="financial-services-section1 p-0">
                <Container fluid>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading">FINANCIAL SERVICES</h1>
                            <h5 className="our-services">Our Services</h5>

                        </Col>
                    </Row>
                </Container>
                <div className="financial-services-section">


                    <Container>
                        {/* <Row className="mb-4 text-center">
                            <Col>
                                <h1 className="financial-heading">FINANCIAL SERVICES</h1>
                                <h5 className="our-services">Our Services</h5>
                            </Col>
                        </Row> */}
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
            </Container>

            {/* Section 3: Expertise Section */}
            <div className='mt-5 mb-5'>

                <ExpertiseSection />
            </div>
        </>
    );
}

export default FinancialServices;
