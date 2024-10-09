import React from 'react'
import AboutUsSection from '../components/AboutSection/AboutUsSection'
import InfoSection from '../components/AboutSection/InfoSection'
import StatsSection from '../components/AboutSection/StatsSection'
import { Container, Row, Col, Button } from 'react-bootstrap';

import ExpertiseSection from '../components/AboutSection/ExpertiseSection'
import '../components/AboutSection/about.css';



function DigitalMarketingServices() {
    return (
        <div>
            <AboutUsSection />
            {/* <div className="container mt-5 pt-5">
                <h1>About Us</h1>
                <p>Welcome to the About Us page.</p>
            </div> */}
            <div className="about-section-2">
                <Container fluid className=" position-relative d-flex justify-content-start align-items-left text-left">
                    <Row className="align-items-start w-100">
                        <Col md={9} className="text-left etxt-colomn text-black">
                            <h2>Why Choose Us ?</h2>
                            <p className="lead">
                                We are considered the best for digital marketing due to core competencies that we work upon.                            </p>
                            {/* <Button variant="outline-light" className="rounded-pill mt-3">
                                Contact Us
                            </Button> */}
                        </Col>
                    </Row>
                </Container>
            </div>
            <InfoSection />

            <StatsSection />



            <ExpertiseSection />


        </div>
    )
}

export default DigitalMarketingServices
