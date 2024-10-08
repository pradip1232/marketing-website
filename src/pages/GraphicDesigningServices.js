import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Container } from '@mui/material';
import { Card } from '@mui/material';
import Man from './../img/Untitled design 4.png'
import '../css/Graphic.css';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';

const GraphicDesigningServices = () => {
    return (
        <>
            <Container className='graphic-first-section mb-5 '>
                <Row>
                    <Col xs={12} className='' style={{
                        height: '57px',
                        width: '641px',
                        background: 'rgba(0, 117, 139, 1)',
                        border: '1px solid rgba(0, 117, 139, 1)',
                        borderRadius: '25px',

                    }}>
                        {/* <div className='hr-services-text'>
                            <Row>
                                <Col md={5}> */}
                        <h2 style={{
                            padding: '4px 0',
                            fontFamily: 'Poppins',
                            fontWeight: '700',
                            fontSize: '32px',
                            lineHeight: '48px',
                            color: '#fff',
                            letterSpacing: '2%',
                            alignItems: 'center',

                        }}>Graphic Designing Services</h2>
                        {/* </Col>
                            </Row>
                        </div> */}
                    </Col>
                </Row>

            </Container>



            {/* new section  */}
            <Container fluid className='mt-5 mb-5 first-section-img-text'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-centerr">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={Man} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Design Is Not Just What It Looks Like. Design Is How It Works. <span className='author-name-marketing'>– Steve Jobs</span></h2>
                        {/* <p className="services-subtext">and we focus on keeping you free from evil!</p> */}
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading2">There’s no limit to what we can design for you. Whether you are looking for stunning new logo design or spectacular new website design, we cater to all your requirements. Our team of experienced and high quality designers are ready to turn your ideas into reality.</h4>
                        <p className="services-description">
                            We help you to choose right combination of colors, shapes and words to mark an impact on the world. Design is basically thinking made visual. If it confuses you it is not a design, it will be a design when it helps you.                                           </p>
                    </Col>
                </Row>

            </Container >

            
            <LookingWithContactBtn />

            {/* Section 2: Our Services Section */}
            <Container fluid className="financial-services-section1 p-0 mb-5 ">
                <Container fluid>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading">GRAPHIC DESIGNING</h1>
                            <h5 className="our-services">Our Services</h5>

                        </Col>
                    </Row>
                </Container>
                <div className="financial-services-section">


                    <Container>
                        {/* <Row className="mb-4 text-center">
                            <Col>
                                <h1 className="financial-heading">FINANCIAL SERVICES</h1>
                                <h5 className="our-services">Our Services</h5>
                            </Col>
                        </Row> */}
                        <Row className="services-buttons">
                            {/* Service Buttons */}
                            {[
                                "Logo Designing",
                                "Business Card Designing",
                                "Merchandise Designing",
                                "Menu Designing",
                                "Social Media Post Designing",
                                "Advertisement Designing"
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
            </Container>

            <ExpertiseSection />

        </>
    )
}

export default GraphicDesigningServices
