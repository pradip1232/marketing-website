
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const OurServices = () => {
    return (
        <div>
            <div className="financial-services-section">


                <Container>

                    <Row className="services-buttons">
                        {/* Service Buttons */}
                        {[
                            "Private Equity Fund Raise",
                            "Crowd Funding",
                            "Overdraft Limits",
                            "Working Capital Loans",
                            "Professional Loans",
                            "Commercial Loans"
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
        </div>
    )
}

export default OurServices
