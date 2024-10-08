import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HrServices.css';

import Pan from './../img/4 5.png';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';
import OurServices from '../components/HomeSections/OurServices';


const AccoutingServices = () => {
    return (
        <>
            <Container className="hr-services mb-5">
                <Row>
                    <Col xs={12} className='' style={{
                        height: '57px',
                        width: '475px',
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

                        }}>Accounting Services
                        </h2>
                        {/* </Col>
                            </Row>
                        </div> */}
                    </Col>
                </Row>

            </Container>
















            {/* new section  */}
            <Container fluid className='mt-5 mb-5 pb-5 first-section-img-text'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-centerr">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={Pan} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Acounting is the Language of Business <br /> <span className='author-name-marketing text-right alignment-right justify-content-end'>– Steve Jobs</span></h2>
                        {/* <p className="services-subtext">and we focus on keeping you free from evil!</p> */}
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        <h4 className="services-subheading2">Accounting is one of the most important parts of a company without which the operations cannot be structured properly. Any kind of business entity – a startup or an existing one, needs to have a channelized accounting system for consistent business growth.</h4>
                        <p className="services-description mt-2">
                            We, being the accounting partner to your business entity provides all the necessary services to ease your stress out and lets you focus on your core business working.                        </p>
                    </Col>
                </Row>

            </Container >




            <Container className='mb-5 mt-5 pt-5 pb-5'>

                <Row className='text-center justify-content-center text-center'>
                    <Col md={12} className='' style={{
                        height: '57px',
                        width: '999px',
                        background: 'rgba(0, 117, 139, 1)',
                        border: '1px solid rgba(0, 117, 139, 1)',
                        borderRadius: '25px',
                        textAlign: 'center',

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

                        }}>Behind Every Great Business Is A Great Accountant</h2>
                        {/* </Col>
                            </Row>
                            </div> */}
                    </Col>
                    <h3
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '25px',
                            fontWeight: '400',
                            padding: '0 150px',
                            lineHeight: '37.5px',
                        }}
                        className='mt-2'
                    >
                        Let our team of experts handle your books and you focus solely on increasing your profits and expanding your business.
                    </h3>
                </Row>
            </Container>




            <LookingWithContactBtn />

            {/* Section 2: Our Services Section */}
            <Container fluid className="financial-services-section1 p-0 mb-5 ">
                <Container fluid>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1 className="financial-heading" style={{ fontSize: '109px' }}>Accounting SERVICES</h1>
                            <h5 className="our-services">Our Services</h5>

                        </Col>
                    </Row>
                </Container>
                <div className="financial-services-section">


                    <Container>

                        <Row className="services-buttons">
                            {/* Service Buttons */}
                            {[
                                "Fixed Asset Management Services",
                                "Planning for Mergers, Acquisitions, De-mergers, and Corporate re-organizations.",
                                "Maintenance of Statutory records",
                                "Accounts Reconciliation Services",
                                "Filing Income tax returns for employees of corporate clients.",
                                "Restructuring salary structure to minimize tax burden."
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

export default AccoutingServices
