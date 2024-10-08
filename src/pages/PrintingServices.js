import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HrServices.css';

import Color from './../img/77 1.png';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';
import OurServices from '../components/HomeSections/OurServices';


const PrintingServices = () => {
    return (
        <>
            <Container className="hr-services mb-5 justify-content-center text-center">
                <Row>
                    <Col xs={12} className='' style={{
                        height: '57px',
                        width: '475px',
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

                        }}>Printing Services
                        </h2>
                        {/* </Col>
                            </Row>
                        </div> */}
                    </Col>
                </Row>


            </Container>


            <Container className="text-center">
                <h3 style={{
                    fontFamily: 'Poppins',
                    fontSize: '24px',
                    fontWeight: '400',
                    marginTop: '-2rem'
                }}>
                    We Offer The Best Combination Of Price, Quality And Service
                </h3>
            </Container>












            {/* new section  */}
            <Container fluid className='mt-5 mb-5 first-section-img-text'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-centerr">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={Color} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Why Choose Us ?</h2>
                        {/* <p className="services-subtext">and we focus on keeping you free from evil!</p> */}
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading2">We are highly concerned about the needs of our clients and hence we always provide quality printing services at reasonable prices. Our stringent quality management policies, along with our client friendly approaches have helped us to attain maximum satisfaction of our clients.</h4>
                        <p className="services-description">
                            Our areas of expertise is to provide printing services for corporate sector and also work on individual print projects with complete commitment and hard work and offer the best printing services. </p>
                    </Col>
                </Row>

            </Container >












            <Container className="mt-5 mb-5 pt-5 services-section">
                <Row className="d-flex align-items-center">
                    {/* Left Side: Text Area */}
                    <Col md={6}>
                        <div className="text-area">
                            <h2>Advantages of Digital Printing</h2>
                            <div className="service-list-container">
                                <ul className="service-list">
                                    <li>Low costs for short runs printing</li>
                                    <li>Print the exact volume you need</li>
                                    <li>Flexibility to lower/minimum quantities of print </li>
                                    <li>Affordable inexpensive black and white digital printing</li>
                                </ul>
                            </div>
                        </div>
                    </Col>



                </Row>
            </Container>









            <LookingWithContactBtn />

            {/* Section 2: Our Services Section */}
            <Container fluid className="financial-services-section1 p-0 mb-5 ">
                <Container fluid>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading">Printing SERVICES</h1>
                            <h5 className="our-services">Our Services</h5>

                        </Col>
                    </Row>
                </Container>
                <div className="financial-services-section">


                    <Container>

                        <Row className="services-buttons">
                            {/* Service Buttons */}
                            {[
                                "Flex Printing",
                                "Canopy Printing",
                                "Customized Calendars and Diaries",
                                "Banner Printing",
                                "Letterhead Printing",
                                "Brochures/Flyers"
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

export default PrintingServices
