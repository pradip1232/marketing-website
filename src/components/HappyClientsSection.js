import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './HappyClientsSection.css'; // Optional for custom styles

const HappyClientsSection = () => {
    return (
        <section className="happy-clients-section">
            <Container fluid className="text-center">
                {/* Section Heading */}
                <h1 className="happy-heading">HAPPY CLIENTS</h1>
                <h4 className="happy-subheading">Our Happy Clients</h4>
                <p>We are delighted to have catered to all these brands.</p>

                {/* Carousel */}
                <div className='slider-container'>


                    <Carousel indicators={false} interval={2000}>
                        <Carousel.Item>
                            <Row className="justify-content-center">
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo1.png" alt="Client 1" />
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo2.png" alt="Client 2" />
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo3.png" alt="Client 3" />
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo4.png" alt="Client 4" />
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row className="justify-content-center">
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo5.png" alt="Client 5" />
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo6.png" alt="Client 6" />
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo7.png" alt="Client 7" />
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <Card className="client-card">
                                        <Card.Img src="/path-to-client-logo8.png" alt="Client 8" />
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </section>
    );
};

export default HappyClientsSection;
