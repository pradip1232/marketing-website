// src/components/InfoSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import './InfoSection.css';
import boy from '../../img/10 1.png'; // Update the path to your image

const infoData = [
  {
    number: '1',
    title: 'Digital Presence',
    description:
      'It is very important to have presence where your potential customer might be, resulting in mandatory presence over digital channels. The whole world has moved to online space to interact and thus it is the dire need to have digital presence for any business to engage with its existing customers and to acquire new potential prospects.',
  },
  {
    number: '2',
    title: 'Digital Marketing',
    description:
      'Having online presence is just a start. The main step thereafter is to start digital marketing to make people aware about your business, products, or services. Using proper strategies and analytics, businesses can target their potential customers efficiently.',
  },
  {
    number: '3',
    title: 'Business Generation',
    description:
      'Many companies can be found to claim to provide services to digital marketing, but business generation through these efforts is the most significant task. Our services are directed towards measurable business growth.',
  },
];

const InfoSection = () => {
  return (
    <Container fluid className="info-section" id="info-section">
      <Row>
        {/* Left Image Section */}
        <Col md={5} className="image-section">
          <Box className="image-border">
            <img src={boy} alt="Person" className="info-image" />
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
  );
};

export default InfoSection;
