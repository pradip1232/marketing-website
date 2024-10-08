import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HrServices.css';

import Girl from './../img/1 11.png';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import OurServices from '../components/HomeSections/OurServices';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';

const HrServices = () => {
    return (
        <>
            <Container className="hr-services mb-5">
                <Row>
                    <Col xs={12} className='' style={{
                        height: '57px',
                        width: '295px',
                        background: 'rgba(0, 117, 139, 1)',
                        border: '1px solid rgba(0, 117, 139, 1)',
                        borderRadius: '25px',

                    }}>
                        {/* <div className='hr-services-text'>
                            <Row>
                                <Col md={5}> */}
                        <h2 style={{
                            padding: '4px 0',
                            fontFamily: 'Poppins',
                            fontWeight: '700',
                            fontSize: '32px',
                            lineHeight: '48px',
                            color: '#fff',
                            letterSpacing: '2%',
                            alignItems: 'center',

                        }}>HR Services</h2>
                        {/* </Col>
                            </Row>
                        </div> */}
                    </Col>
                </Row>

            </Container>
















            {/* new section  */}
            <Container fluid className='mt-5 mb-5 first-section-img-text'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-centerr">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={Girl} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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

                    <Col lg={6} md={7} className='lack-text-w'>
                        {/* <h5 className="services-title">Financial Services</h5> */}
                        <h2 className="services-heading">To Win The Marketplace, You Must First Win The Workplace.</h2>
                        {/* <p className="services-subtext">and we focus on keeping you free from evil!</p> */}
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading2">We aim to help organizations achieve Business Excellence by providing the right talent, finding the right skills and creating the right HR ecosystem to ensure sustainability in a changing environment.</h4>
                        <p className="services-description">
                            People are the greatest asset of every organisation, and we can demonstrate how organisations that embrace this achieve their full potential faster and more cost-effectively. Team up with us and we will help your business to address challenges, implement meaningful solutions and help track sustainable performance improvements.                        </p>
                    </Col>
                </Row>

            </Container >

            <LookingWithContactBtn />

            {/* Section 2: Our Services Section */}
            <Container fluid className="financial-services-section1 p-0 mb-5 ">
                <Container fluid>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading">HR SERVICES</h1>
                            <h5 className="our-services">Our Services</h5>

                        </Col>
                    </Row>
                </Container>
                <div className="financial-services-section">


                    <Container>

                        <Row className="services-buttons">
                            {/* Service Buttons */}
                            {[
                                "Preparation of Monthly Salary Sheet.",
                                "Periodic Reconciliation of payments/statutory deductions etc. with books of accounts.",
                                "Administration of gratuity, superannuation, pension schemes etc.",
                                "Computation and deposit of TDS, ESI, PF etc.",
                                "Hiring for any role",
                                "Issue of Form 16 to employees."
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

            <ExpertiseSection />

        </>
    )
}

export default HrServices
