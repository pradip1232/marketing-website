import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import '../AboutSection/StatsSection.css';
import arrow from '../../img/11 1.png';

const LookingWithContactBtn = () => {
    return (
        <div className="looking-for-section" >
            <Row className="align-items-center justify-content-center text-center">
                <Col md={8} className="text-section">
                    <h3 className="section-title">Looking For Expert Marketing Services</h3>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-center text-center">
                <Col md={8}>
                    <div className="contact-box text-right">
                        <p>Connect with us right away</p><br />
                        <Button variant="outline-info" className="contact-button">Contact Us</Button>
                        <img src={arrow} alt="Arrow" className="arrow-image" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LookingWithContactBtn
