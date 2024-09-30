// src/components/StatsSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css'; // Make sure to create and style this CSS file
import LookingWithContactBtn from '../HomeSections/LookingWithContactBtn';

const StatsSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.2,    // Trigger animation when 20% of the component is visible
    });

    return (
        <Container fluid className="stats-section1" ref={ref}>
            {/* Quote Section */}
            <div className="stats-section text-center justify-content-center" height={351}>

                <Row className="quote-section text-center justify-content-center">
                    <Col md={6} className='text-colors border-dark'>
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
                        {inView && <CountUp end={25} duration={2} suffix="" className="stat-number" />}
                        <Typography variant="h6">Million+ Engagements</Typography>
                    </Box>
                </Col>
                <Col md={3} className="stat-box">
                    <Box>
                        {inView && <CountUp end={300} duration={2} suffix="" className="stat-number" />}
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
            <LookingWithContactBtn />

        </Container>
    );
};

export default StatsSection;
