// src/components/StatsSection.js
import React, { useState } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css'; // Make sure to create and style this CSS file
import arrow from '../../img/11 1.png';

const StatsSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.2,    // Trigger animation when 20% of the component is visible
    });

    return (
        <Container fluid className="stats-section1" ref={ref}>
            {/* Quote Section */}
            <div className="stats-section">

                <Row className="quote-section">
                    <Col className='text-colors'>
                        <Typography variant="h4" className="quote">
                            "YOU CAN'T SELL, IF YOU CAN'T TELL"
                        </Typography>
                        <Typography variant="subtitle1" className="quote-author">
                            - Beth Comstock
                        </Typography>
                    </Col>
                </Row>
            </div>

            {/* Stats Section */}
            <Row className="stats-row">
                <Col md={3} className="stat-box">
                    <Box>
                        {inView && <CountUp end={80} duration={2} suffix="+" className="stat-number" />}
                        <Typography variant="h6">Clients</Typography>
                    </Box>
                </Col>
                <Col md={3} className="stat-box">
                    <Box>
                        {inView && <CountUp end={25} duration={2} suffix=" Million+" className="stat-number" />}
                        <Typography variant="h6">Million+ Engagements</Typography>
                    </Box>
                </Col>
                <Col md={3} className="stat-box">
                    <Box>
                        {inView && <CountUp end={300} duration={2} suffix=" Million+" className="stat-number" />}
                        <Typography variant="h6">Million+ Audience Reached</Typography>
                    </Box>
                </Col>
                <Col md={3} className="stat-box">
                    <Box>
                        {inView && <CountUp end={100} duration={2} suffix="%" className="stat-number" />}
                        <Typography variant="h6">Guaranteed Result</Typography>
                    </Box>
                </Col>
            </Row>

            <div className="looking-for-section" >
                <Row className="align-items-center justify-content-center text-center">
                    <Col md={8} className="text-section">
                        <h3 className="section-title">Looking For Expert Marketing Services</h3>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center text-center">
                    <Col md={8}>
                        <div className="contact-box">
                            <p>Connect with us right away</p>
                            <Button variant="outline-info" className="contact-button">Contact Us</Button>
                            <img src={arrow} alt="Arrow" className="arrow-image" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default StatsSection;
