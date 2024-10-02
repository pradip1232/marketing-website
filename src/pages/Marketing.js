import React from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import mm from './../img/66 1.png';
import dd from './../img/44 1.png';

import '../css/marketing.css';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';

const MarketingPage = () => {
    return (
        <>
            <Container className='marketing-img'>
                <Row>
                    <Col xs={12}>
                        <img src={mm} />
                    </Col>
                </Row>
            </Container>
            <Container className='marketing-text'>
                <h2>Marketing is the essence of every business</h2>
                <p>A good product is nothing without right audience for which it is meant for. That’s exactly what we achieve from marketing. Bridging the gap between your business and your potential customer.</p>
            </Container>
            <Container className='marketing-btn mt-5 mb-5'>
                <h2>We cater to your requirements of ATL as well as BTL marketing activities. </h2>
            </Container>




            <Container className="digital-marketing-section mb-5 pb-5">
                <Row>
                    {/* Left Column for 3 columns with diagonal cards */}
                    <Col md={6} style={{ marginTop: '5rem' }}>
                        <Row>
                            <Col md={4} className="first-col">
                                <Card className="custom-card square-card">
                                    <Card.Body>Social Media Account Management</Card.Body>
                                </Card>
                                <Card className="custom-card square-card">
                                    <Card.Body>Search Engine Optimization (SEO)</Card.Body>
                                </Card>
                                <Card className="custom-card square-card">
                                    <Card.Body>Content Creation</Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} className="second-col" style={{ marginTop: '6rem' }}>
                                <Card className="custom-card square-card">
                                    <Card.Body>Social Media Paid Campaigns</Card.Body>
                                </Card>
                                <Card className="custom-card square-card">
                                    <Card.Body>PPC Campaigns</Card.Body>
                                </Card>
                                <Card className="custom-card square-card">
                                    <Card.Body>Search Engine Marketing</Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} className="third-col " style={{ marginTop: '12rem' }}>
                                <Card className="custom-card square-card">
                                    <Card.Body>Influencer Marketing</Card.Body>
                                </Card>
                                <Card className="custom-card square-card">
                                    <Card.Body>PR & Communication</Card.Body>
                                </Card>
                                <Card className="custom-card square-card">
                                    <Card.Body>Others</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    {/* Right Column with Image */}
                    <Col md={6} className="right-col">
                        <div className="image-container">
                            <img src={dd} alt="Digital Marketing" className="right-image" />
                        </div>
                    </Col>
                </Row>
            </Container>


















            <LookingWithContactBtn />
            <ExpertiseSection />
        </>
    )
}

export default MarketingPage
