import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Font Awesome icons
import './AdvertisementSection.css'; // Custom CSS for arrow positions
import img from '../../img/12 3.png';
const AdvertisementSection = () => {
    return (

        <>
            <Container fluid className='why-choose-us'>
                <Row>
                    <Col md={11}>
                        <h2>Why Choose Us ?</h2>
                        <p>
                            We convert your vision into a success story with assured results all across INDIA. From rural areas to sub-urban to metropolitan cities, we have presence everywhere
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="advertisement-section mb-5">
                <Row>
                    <Col xs={5} className="text-center mb-5">
                        <h2 className='chosse-heading'>Choose from our wide options for advertisements across INDIA</h2>
                    </Col>
                </Row>

                <Row className="position-relative advertisement-grid">
                    <Col xs={12} md={6} lg={3} className="text-center mt-5 down-side">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Transit Media Advertising</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Hoarding Advertising</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Bus Branding</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={3} className="text-center mt-5 down-side">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Airport Branding</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Col xs={3} className="text-center mb-5 mt-5 pb-5 pt-4 central-card">
                    <Card className="advertisement-card add-center-btn central">
                        <Card.Body className='center-btn'>
                            <Card.Title>Advertisements</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>





                <Row className="position-relative advertisement-grid">
                    <Col xs={12} md={6} lg={3} className="text-center  top-side">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Airport Branding</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Metro Branding</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Metro Station Naming Rights</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center top-side">
                        <Card className="advertisement-card">
                            <Card.Body>
                                <Card.Title>Inside Station Branding</Card.Title>
                                <Card.Text>Grab Your Spot Today!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    {/* Arrows */}
                    {/* <img src={img} className="arrow arrow-up" />
                    <img src={img} className="arrow arrow-up2" />
                    <img src={img} className="arrow arrow-down" /> */}
                    {/* 
                <img src={img} className="arrow arrow-right" />
                <img src={img} className="arrow arrow-left" />
                <img src={img} className="arrow arrow-right-up" />
                <img src={img} className="arrow arrow-left-down" /> */}
                </Row>
            </Container>

            <Container >
                <Row className="align-items-center justify-content-center text-center">
                    <Col md={8} className="text-section">
                        <h3 className="section-title">WE ALSO DEAL IN TV & RADIO ADS</h3>
                        <h5 className='section-text'>Get in touch for your TV or Radio spots</h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AdvertisementSection;
