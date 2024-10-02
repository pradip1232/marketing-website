import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // React-Bootstrap for layout
import { Typography, Box } from '@mui/material'; // MUI for typography
import '../css/WebDevelopment.css'; // Custom CSS for background image and text overlay



import { Card } from '@mui/material';





import img15 from './../img/15 1.png';
import card1 from './../img/16 1.png';
import card2 from './../img/17 1.png';
import card3 from './../img/18 1.png';
import card4 from './../img/19 1.png';
import Man from './../img/20 1.png';





const WebDevelopment = () => {
    return (
        <>
            <div className="web-development-section">
                {/* Background Image and Overlay */}
                <Box className="image-container">
                    {/* Main Container for Content */}
                    <Container className="text-overlay">
                        <Row>
                            <Col md={12} className="text-center">
                                <Typography variant="h3" component="h1" className="main-title">
                                    From Concept to Code
                                </Typography>
                                <Typography variant="h6" component="p" className="subtitle">
                                    Elevating Your Online Presence
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="text-overlay-text">
                        <Row>
                            <Col md={12} className="text-center">
                                <Typography variant="body1" component="p" className="description-text">
                                    Welcome to Squib Factory, where we go beyond digital marketing to offer end-to-end solutions
                                    for your online success. Our expanded services include Website Development and Software
                                    Development, seamlessly integrated with our renowned digital marketing expertise.
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </div>

            {/* New Section */}
            <Container className="mt-5 mb-5 text-center webdevelopment-btn">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <h2 className="service-heading">Website Development Services</h2>
                    </Col>
                </Row>
            </Container>


            {/* new section  */}
            <Container className='mt-5 mb-5'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-center">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={img15} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Lack Of Money Is The Root Of All Evil</h2>
                        <p className="services-subtext">and we focus on keeping you free from evil!</p>
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading">We help you grow !!</h4>
                        <p className="services-description">
                            Our focus is to help your business in expansion, and we offer a wide array of services related to the same objective. It includes providing assistance in obtaining funds inflow for expansion and growth.
                        </p>
                    </Col>
                </Row>

            </Container >


            {/* new section  */}
            <Container className='mt-5 mb-5'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-center">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={img15} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Lack Of Money Is The Root Of All Evil</h2>
                        <p className="services-subtext">and we focus on keeping you free from evil!</p>
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading">We help you grow !!</h4>
                        <p className="services-description">
                            Our focus is to help your business in expansion, and we offer a wide array of services related to the same objective. It includes providing assistance in obtaining funds inflow for expansion and growth.
                        </p>
                    </Col>
                </Row>

            </Container >






            {/* new section  */}

            <section className='why-sectionshoose-or-color'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <h2>
                                Why Choose Squib Factory for Website Development?
                            </h2>
                            <h5>Proven Track Record of Success
                                Tailored Solutions for Every Business
                                Emphasis on User Experience and Conversion
                                Software Development Services</h5>
                        </Col>
                    </Row>
                </Container>
            </section>








            {/* new section  */}





            <section>
                <Container className="custom-section mt-5 mb-5">
                    <Row className="align-items-center">
                        {/* Left Column: Image Area */}
                        <Col md={5} className="text-center">
                            <img
                                src={Man}
                                alt="Person Image"
                                className="person-img"
                            />
                        </Col>

                        {/* Right Column: Text Area */}
                        <Col md={7}>
                            {/* First Card */}
                            <Card className="mb-4 custom-card">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-center">
                                        <div className="number-circle">1</div>
                                    </Col>
                                    <Col md={10}>
                                        <h4 className="custom-card-title">
                                            Transforming Ideas into Powerful Solutions
                                        </h4>
                                        <p>
                                            Take your business to the next level with our custom software development services.
                                            From concept to execution, we work closely with you to understand your unique needs
                                            and deliver scalable, efficient, and innovative software solutions.
                                        </p>
                                    </Col>
                                </Row>
                            </Card>

                            {/* Second Card */}
                            <Card className="custom-card">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-center">
                                        <div className="number-circle">2</div>
                                    </Col>
                                    <Col md={10}>
                                        <h4 className="custom-card-title">Our Expertise Covers</h4>
                                        <ul className="expertise-list">
                                            <li>Custom Software Development</li>
                                            <li>Custom Coded Website & Web Application Development</li>
                                            <li>SaaS & Software Products</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* new section  */}

            <section className='why-sectionshoose-or-color mb-5 mt-5'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <h2>
                                Why Choose Squib Factory for Website Development?
                            </h2>
                            <h5>Proven Track Record of Success
                                Tailored Solutions for Every Business
                                Emphasis on User Experience and Conversion
                                Software Development Services</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* new section  */}

            <section className='why-sectionshoose-or-color2 mb-5 mt-5'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <h2>
                                Why Choose Squib Factory for Website Development?
                            </h2>
                            <h5>Proven Track Record of Success
                                Tailored Solutions for Every Business
                                Emphasis on User Experience and Conversion
                                Software Development Services</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* new section  */}

            <section className='why-sectionshoose-or-color3 mb-5 mt-5'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <h2>
                                Why Choose Squib Factory for Website Development?
                            </h2>
                            <h5>Proven Track Record of Success
                                Tailored Solutions for Every Business
                                Emphasis on User Experience and Conversion
                                Software Development Services</h5>
                        </Col>
                    </Row>
                </Container>
            </section>




        </>
    );
};

export default WebDevelopment;
