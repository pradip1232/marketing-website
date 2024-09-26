// src/ExpertiseSection.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExpertiseSection.css"; // Separate CSS file






import ract from '../../img/Rectangle 25.png';


const expertiseData = [
    { title: "Offline Marketing", description: "We have a network of OOH advertising channels to best suit your offline marketing needs.", buttonText: "Know more" },
    { title: "Financial Services", description: "We have an active presence in the financial market to help your business raise funds.", buttonText: "Know more" },
    { title: "Accounting Services", description: "We facilitate various accounting services to help you to be focused on core of your business.", buttonText: "Know more" },
    { title: "HR Services", description: "Our experienced team helps you in every aspect related to human resource services.", buttonText: "Know more" },
    { title: "Digital Marketing", description: "We provide best-in-industry result-oriented digital marketing services.", buttonText: "Know more" },
    { title: "Graphic Designing", description: "Our experts are ready to shape your idea into creative reality by various means.", buttonText: "Know more" },
    { title: "Legal Services", description: "We facilitate various services to help you in legal matters resulting in your ease of doing business.", buttonText: "Know more" },
    { title: "Printing Services", description: "Experienced team of experts ready to launch your brand to market.", buttonText: "Know more" },
];

const ExpertiseSection = () => {
    return (
        <Box className="expertise-section" sx={{ padding: "10rem 0" }}>
            <Container >

                <Row className="justify-content-center">
                    {/* Left Container */}
                    <Col md={6} className="left-side-cards">
                        <Typography variant="h4" sx={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
                            Area Of Expertise
                        </Typography>
                        <Row>
                            {expertiseData.slice(0, 4).map((item, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <Card className="expertise-card shadow">
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                            <Button variant="link">{item.buttonText}</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* Right Container */}
                    <Col md={6} className="right-side-cards">
                        <Row>
                            {expertiseData.slice(4).map((item, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <Card className="expertise-card shadow">
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                            <Button variant="link">{item.buttonText}</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
};

export default ExpertiseSection;
