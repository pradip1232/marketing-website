import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // React-Bootstrap for layout
import { Typography, Box } from '@mui/material'; // MUI for typography
import '../css/WebDevelopment.css'; // Custom CSS for background image and text overlay

// import './../components/AboutSection/InfoSection.css';

import { Card } from '@mui/material';





import img15 from './../img/15 1.png';
import card1 from './../img/16 1.png';
import card2 from './../img/17 1.png';
import card3 from './../img/18 1.png';
import card4 from './../img/19 1.png';
import Man from './../img/20 1.png';

import boy from './../img/10 1.png'; // Update the path to your image



const infoData = [
    {
        number: '1',
        title: 'Transforming Ideas into Powerful Solutions',
        description:
            'Take your business to the next level with our custom software development services. From concept to execution, we work closely with you to understand your unique needs and deliver scalable, efficient, and innovative software solutions.',
    },
    {
        number: '2',
        title: 'Our Expertise Covers',
        description:
            'Custom Software Development , Custom Coded Website & Web Application Development ,SaaS & Software Products',
    }
    // ,
    // {
    //     number: '3',
    //     title: 'Business Generation',
    //     description:
    //         'Many companies can be found to claim to provide services to digital marketing, but business generation through these efforts is the most significant task. Our services are directed towards measurable business growth.',
    // },
];




const WebDevelopment = () => {
    return (
        <>
            <div className="web-development-section">
                {/* Background Image and Overlay */}
                <Box className="image-container">
                    {/* Main Container for Content */}
                    <Container className="text-overlay">
                        <Row>
                            <Col md={12} className="text-center">
                                <Typography variant="h3" component="h1" className="main-title">
                                    From Concept to Code
                                </Typography>
                                <Typography variant="h6" component="p" className="subtitle">
                                    Elevating Your Online Presence
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="text-overlay-text">
                        <Row>
                            <Col md={12} className="text-center">
                                <Typography variant="body1" component="p" className="description-text">
                                    Welcome to Squib Factory, where we go beyond digital marketing to offer end-to-end solutions
                                    for your online success. Our expanded services include Website Development and Software
                                    Development, seamlessly integrated with our renowned digital marketing expertise.
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </div>

            {/* New Section */}
            <Container className="mt-5 mb-5 text-center webdevelopment-btn">
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <h2 className="service-heading">Website Development Services</h2>
                    </Col>
                </Row>
            </Container>


            {/* new section  */}
            <Container fluid className='mt-5 mb-5 get-start-container'>
                <Row className="align-items-center imgORtext">
                    <Col lg={6} md={12} className="text-center-img">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={img15} alt="Financial Growth" className="img-fluid FinancialGrowthimg" />
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
                        <h2 className="services-heading">Crafted for Impact, Designed for Success</h2>
                        {/* <p className="services-subtext">and we focus on keeping you free from evil!</p> */}
                        <hr className='' style={{ width: '299px', border: '1px solid #000000' }} />
                        {/* <h4 className="services-subheading">We help you grow !!</h4> */}
                        <p className="services-description">
                            In the digital age, your website is the face of your business. Our expert team of developers combines creativity and functionality to build stunning, user-friendly websites that captivate your audience. Whether you're establishing an online presence or looking to revamp your current site, we've got you covered.                        </p>
                    </Col>
                </Row>

            </Container >



            <Container className="mt-5 mb-5 services-section">
                <Row className="d-flex align-items-center">
                    {/* Left Side: Text Area */}
                    <Col md={6}>
                        <div className="text-area">
                            <h2>Our Service Includes</h2>
                            <div className="service-list-container">
                                <ul className="service-list">
                                    <li>Responsive Website Design</li>
                                    <li>E-commerce Solutions</li>
                                    <li>Custom Web Development</li>
                                    <li>Website Maintenance and Support</li>
                                </ul>
                            </div>
                        </div>
                    </Col>


                    {/* Right Side: Image Cards Area */}
                    <Col md={6}>
                        <Row className="d-flex justify-content-around">
                            <Col md={6} className="mb-4 mt-5">
                                <Card className="service-card">
                                    <img src={card4} alt="Website Maintenance and Support" className="service-img" />
                                </Card>
                            </Col>
                            <Col md={6} className="mb-4">
                                <Card className="service-card">
                                    <img src={card1} alt="Responsive Website Design" className="service-img" />
                                </Card>
                            </Col>

                            <Col md={6} className="mb-4 mt-5">
                                <Card className="service-card">
                                    <img src={card2} alt="E-commerce Solutions" className="service-img" />
                                </Card>
                            </Col>

                            <Col md={6} className="mb-4">
                                <Card className="service-card">
                                    <img src={card3} alt="Custom Web Development" className="service-img" />
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>













            {/* new section  */}

            <section className='why-sectionshoose-or-color'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={9}>
                            <h2>
                                Why Choose Squib Factory for Website Development?
                            </h2>
                            <h5>Proven Track Record of Success
                                Tailored Solutions for Every Business
                                Emphasis on User Experience and Conversion
                                Software Development Services</h5>
                        </Col>
                    </Row>
                </Container>
            </section>








            {/* new section  */}



            <Container fluid className="info-section cate-varients2" id="info-section">
                <Row>
                    {/* Left Image Section */}
                    <Col md={5} className="image-section">
                        <Box className="image-border">
                            <img src={Man} alt="Person" className="info-image" />
                        </Box>
                    </Col>

                    {/* Right Content Section */}
                    <Col md={7} className="content-section">
                        <Box className="info-content">
                            {infoData.map((item, index) => (
                                <Row key={index} className="info-item">
                                    <Col md={2}>
                                        <Box className="number-box mt-2">{item.number}</Box>
                                    </Col>
                                    <Col md={10}>
                                        <Box className="text-content">
                                            <Typography variant="h5" className="info-title">{item.title}</Typography>
                                            <Typography variant="body1" className="info-description">
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Col>
                                </Row>
                            ))}
                        </Box>
                    </Col>
                </Row>
            </Container>

            {/* <section>
                <Container className="custom-section mt-5 mb-5">
                    <Row className="align-items-center">
                        <Col md={5} className="text-center">
                            <img
                                src={Man}
                                alt="Person Image"
                                className="person-img"
                            />
                        </Col>

                        <Col md={7}>
                            <Card className="mb-4 custom-card">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-center">
                                        <div className="number-circle">1</div>
                                    </Col>
                                    <Col md={10}>
                                        <h4 className="custom-card-title">
                                            Transforming Ideas into Powerful Solutions
                                        </h4>
                                        <p>
                                            Take your business to the next level with our custom software development services.
                                            From concept to execution, we work closely with you to understand your unique needs
                                            and deliver scalable, efficient, and innovative software solutions.
                                        </p>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="custom-card">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-center">
                                        <div className="number-circle">2</div>
                                    </Col>
                                    <Col md={10}>
                                        <h4 className="custom-card-title">Our Expertise Covers</h4>
                                        <ul className="expertise-list">
                                            <li>Custom Software Development</li>
                                            <li>Custom Coded Website & Web Application Development</li>
                                            <li>SaaS & Software Products</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section> */}






            {/* new section  */}

            <section className='why-sectionshoose-or-color mb-5 mt-5'>

                <Container className="py-4">

                    <Row className="d-flex justify-content-center">
                        <Col md={10}>
                            <h2>
                                Why Opt for Squib Factory for Software Development?
                            </h2>
                            <h5>Experienced and Agile Development Team Comprehensive Understanding of Business Processes Commitment to Quality and Timely Delivery
                                Seamless Integration with Digital Marketing</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* new section  */}







            <section className='why-sectionshoose-or-color2 mb-5 mt-5'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={10}>
                            {/* <h2>
                                Why Choose Squib Factory for Website Development?
                            </h2> */}
                            <h5>What sets us apart is our holistic approach. Our website and software development seamlessly integrate with our renowned digital marketing services. From SEO-friendly websites to software solutions that enhance your online presence, we ensure a cohesive strategy that drives results.</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* new section  */}

            <section className='why-sectionshoose-or-color3 mb-5 mt-5'>

                <Container className="py-5">

                    <Row className="d-flex justify-content-center">
                        <Col md={10}>
                            <h2>
                                Ready to Elevate Your Digital Presence?
                            </h2>
                            <h5>Explore the possibilities with Squib Factory. Our dedicated team is ready to transform your digital landscape. Let's build something remarkable together.</h5>
                        </Col>
                    </Row>
                </Container>
            </section>




        </>
    );
};

export default WebDevelopment;
