import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './HeroSection.css';

import thumb from '../img/8 1.png';
import grow from '../img/8 2.png';
import grow2 from '../img/8 3.png';

const FeaturesSection = () => {
  return (
    <section className="features-section acount-heading">
      <Container>

        {/* First Feature (Right Side Image) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Row className="align-items-right text-right accountability-right-home justify-content-end feature">
            <Col md={6} className='text-right height-width-home'>
              <h4>Accountability</h4>
              <p>
                It's not just words, we provide measurable data reports in a timely manner to give you
                updates on progress, and what your brand has achieved through us. Well, a satisfied
                client is all we need!!
              </p>
            </Col>
            <Col md={1} className="text-center">
              <Image src={thumb} alt="Accountability Icon" />
            </Col>
          </Row>
        </motion.div>

        {/* Second Feature (Left Side Image) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Row className="align-items-center feature-c flex-row-reverse87">
            <Col md={1} className="text-center ml-2 pl-2">
              <Image src={grow2} alt="Growth Icon" className='ml-2 pl-2 mid-images-home' fluid />
            </Col>
            <Col md={7}>
              <h4>Your Growth is our Focus</h4>
              <p>
                Our goal is to give you exponential growth, and what could be better than having an increase in sales.
                <br />
                <br />
                Yes, you read it correct. We aim to provide you sustainable growth in revenue along with maximized brand awareness through various services we provide.
              </p>
            </Col>
          </Row>
        </motion.div>

        {/* Third Feature (Right Side Image) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Row className="align-items-right text-right accountability-right-home justify-content-end feature mt-5 pt-5">
            <Col md={6} className='text-right'>
              <h4>One-Stop Service Provider</h4>
              <p>
                Every business caters to a different audience with different objectives. Hence, to
                cater to all your needs, we built a team of experts from different backgrounds to
                create a ONE-STOP service providing company for your business.
              </p>
            </Col>
            <Col md={1} className="text-center">
              <Image src={grow} alt="Service Provider Icon" />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
