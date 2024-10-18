import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './HappyClientsSection.css'; // Optional for custom styles

// Import all images from 1 to 56
import first from '../img/client_logo/1.webp';
import second from '../img/client_logo/2.webp';
import third from '../img/client_logo/3.webp';
import fourth from '../img/client_logo/4.webp';
import fifth from '../img/client_logo/5.webp';
import sixth from '../img/client_logo/6.webp';
import seventh from '../img/client_logo/7.webp';
import eighth from '../img/client_logo/8.webp';
import ninth from '../img/client_logo/9.webp';
import tenth from '../img/client_logo/10.webp';
import eleventh from '../img/client_logo/11.webp';
import twelfth from '../img/client_logo/12.webp';
import thirteenth from '../img/client_logo/13.webp';
import fourteenth from '../img/client_logo/14.webp';
import fifteenth from '../img/client_logo/15.webp';
import sixteenth from '../img/client_logo/16.webp';
import seventeenth from '../img/client_logo/17.webp';
import eighteenth from '../img/client_logo/18.webp';
import nineteenth from '../img/client_logo/19.webp';
import twentieth from '../img/client_logo/20.webp';
import twentyFirst from '../img/client_logo/21.webp';
import twentySecond from '../img/client_logo/22.webp';
import twentyThird from '../img/client_logo/23.webp';
import twentyFifth from '../img/client_logo/25.webp';
import twentySixth from '../img/client_logo/26.webp';
import twentySeventh from '../img/client_logo/27.webp';
import twentyEighth from '../img/client_logo/28.webp';
import twentyNinth from '../img/client_logo/29.webp';
import thirtieth from '../img/client_logo/57.webp';
import thirtyFirst from '../img/client_logo/31.webp';
import thirtySecond from '../img/client_logo/32.webp';
import thirtyThird from '../img/client_logo/33.webp';
import thirtyFourth from '../img/client_logo/34.webp';
import thirtyFifth from '../img/client_logo/35.webp';
import thirtySixth from '../img/client_logo/36.webp';
import thirtySeventh from '../img/client_logo/37.webp';
import thirtyEighth from '../img/client_logo/38.webp';
import thirtyNinth from '../img/client_logo/39.webp';
import fortieth from '../img/client_logo/40.webp';
import fortyFirst from '../img/client_logo/41.webp';
import fortySecond from '../img/client_logo/42.webp';
import fortyThird from '../img/client_logo/43.webp';
import fortyFourth from '../img/client_logo/44.webp';
import fortyFifth from '../img/client_logo/45.webp';
import fortySixth from '../img/client_logo/46.webp';
import fortySeventh from '../img/client_logo/47.webp';
import fortyEighth from '../img/client_logo/48.webp';
import fortyNinth from '../img/client_logo/49.webp';
import fiftieth from '../img/client_logo/50.webp';
import fiftyFirst from '../img/client_logo/51.webp';
import fiftySecond from '../img/client_logo/52.webp';
import fiftyThird from '../img/client_logo/53.webp';
import fiftyFourth from '../img/client_logo/54.webp';
import fiftyFifth from '../img/client_logo/55.webp';
import fiftySixth from '../img/client_logo/56.webp';

// Add all image imports to an array for easy iteration
const clientLogos = [
    first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth,
    eleventh, twelfth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth, eighteenth, nineteenth, twentieth,
    twentyFirst, twentySecond, twentyThird, twentyFifth, twentySixth, twentySeventh, twentyEighth, twentyNinth, thirtieth,
    thirtyFirst, thirtySecond, thirtyThird, thirtyFourth, thirtyFifth, thirtySixth, thirtySeventh, thirtyEighth, thirtyNinth, fortieth,
    fortyFirst, fortySecond, fortyThird, fortyFourth, fortyFifth, fortySixth, fortySeventh, fortyEighth, fortyNinth, fiftieth,
    fiftyFirst, fiftySecond, fiftyThird, fiftyFourth, fiftyFifth, fiftySixth
];

const HappyClientsSection = () => {
    // Split images into groups of 4 for each carousel slide
    const groupedLogos = [];
    for (let i = 0; i < clientLogos.length; i += 4) {
        groupedLogos.push(clientLogos.slice(i, i + 4));
    }

    return (
        <section className="happy-clients-section">
            <Container fluid className="text-center hppy-clint-cont">
                {/* Section Heading */}
                <h1 className="happy-heading">HAPPY CLIENTS</h1>
                <h4 className="happy-subheading text-center">Our Happy Clients</h4>
                <p>We are delighted to have catered to all these brands.</p>

                {/* Carousel */}
                <div className="slider-container">
                    <Carousel 
                        indicators={false} 
                        interval={3000}  // Slower interval for smooth transition
                        slide={true}  // Ensures smooth sliding between cards
                        controls={true} // Show navigation controls
                    >
                        {groupedLogos.map((logoGroup, index) => (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {logoGroup.map((logo, logoIndex) => (
                                        <Col md={2} key={logoIndex}>
                                            <Card className="client-card">
                                                <Card.Img 
                                                    src={logo} 
                                                    alt={`Client ${index * 4 + logoIndex + 1}`} 
                                                    className="img-fluid"
                                                />
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </section>
    );
};

export default HappyClientsSection;
