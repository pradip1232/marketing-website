import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './HeroSection.css';

import thumb from '../img/8 1.png';
import grow from '../img/8 2.png';
import grow2 from '../img/8 3.png';
const FeaturesSection = () => {
    return (


        <section className="features-section acount-heading">
            <Container>
                {/* First Feature (Right Side Image) */}
                <Row className=" align-items-right text-right justify-content-end feature">
                    <Col md={7} className='text-right'>
                        <h4 >Accountability</h4>
                        <p>
                            It's not just words, we provide measurable data reports in a timely manner to give you
                            updates on progress, and what your brand has achieved through us. Well, a satisfied
                            client is all we need!!
                        </p>
                    </Col>
                    <Col md={2} className="text-center">
                        <Image src={thumb} alt="Accountability Icon" fluid />
                    </Col>
                </Row>

                {/* Second Feature (Left Side Image) */}
                <Row className="align-items-center feature-c flex-row-reverse87">
                    <Col md={2} className="text-center">
                        <Image src={grow} alt="Growth Icon" fluid />
                    </Col>
                    <Col md={7}>
                        <h4>Your Growth is our Focus</h4>
                        <p>
                            Our goal is to give you exponential growth, and what could be better than having an
                            increase in sales? We aim to provide you sustainable growth in revenue along with
                            maximized brand awareness through the various services we provide.
                        </p>
                    </Col>
                </Row>

                {/* Third Feature (Right Side Image) */}
                <Row className="align-items-right text-right justify-content-end feature">
                    <Col md={7} className='text-right'>
                        <h4>One-Stop Service Provider</h4>
                        <p>
                            Every business caters to a different audience with different objectives. Hence, to
                            cater to all your needs, we built a team of experts from different backgrounds to
                            create a ONE-STOP service providing company for your business.
                        </p>
                    </Col>
                    <Col md={2} className="text-center">
                        <Image src={grow2} alt="Service Provider Icon" fluid />
                    </Col>
                </Row>
            </Container>
        </section>




    );
};

export default FeaturesSection;
