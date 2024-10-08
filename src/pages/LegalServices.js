import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HrServices.css';

import Justice from './../img/2 7.png';
import girl from './../img/1 11.png';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';
import OurServices from '../components/HomeSections/OurServices';


const LegalServices = () => {
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

                        }}>Legal Services</h2>
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
                            <img src={Justice} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Law is valuable, not because it is law, but because there is right in it</h2>
                        {/* <p className="services-subtext">and we focus on keeping you free from evil!</p> */}
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading2">Legal decisions can be difficult and complicated, which is why it’s crucial to take an informed approach. Through our service offerings, you can count on us to guide you in every step of the process.</h4>
                        <p className="services-description">
                            We are proud to extend our legal experiences to help serve clients of all types and sizes. we help our clients successfully resolve matters as quickly and efficiently as possible.                        </p>
                    </Col>
                </Row>

            </Container >

            <LookingWithContactBtn />

            {/* Section 2: Our Services Section */}
            <Container fluid className="financial-services-section1 p-0 mb-5 ">
                <Container fluid>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading">Legal SERVICES</h1>
                            <h5 className="our-services">Our Services</h5>

                        </Col>
                    </Row>
                </Container>
                <div className="financial-services-section">


                    <Container>

                        <Row className="services-buttons">
                            {/* Service Buttons */}
                            {[
                                "Company Incorporation",
                                "Filing and pleading appeals under various provisions of various Acts.",
                                "Copyright Registration",
                                "GST Registration",
                                "Consultancy on Company Law matters.",
                                "Legal Contract Drafting"
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

export default LegalServices
