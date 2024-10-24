import React from 'react';
import { Card, Button, Row, Col, Container, Carousel } from 'react-bootstrap';
import { AccountBalance, TrendingUp, Group } from '@mui/icons-material'; // MUI Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import com from '../../img/mm/4 1.png';
import com2 from '../../img/mm/4 2.png';
import com3 from '../../img/mm/4 3.png';


const Marketing = () => {
    return (
        <>

            {/* new section */}
            <section className="py-5 diagonal-card-section">
                <Container>
                    {/* Title Section */}
                    <Row className='our-services-text-home'>
                        <Col xs={10}  md={6} lg={6} > 

                            <div className=" text-heading-servics mb-4">
                                <h2>Our Service</h2>
                                <h3 className="text-primary32">We Can Help You Solve Your Problems Through Our Services</h3>
                                <p>
                                    Uniqueness is one of the main reasons that separates us from others.
                                    Our team has worked tremendously in all aspects to create an overall
                                    growth projection for our clients.
                                </p>
                            </div>

                        </Col>
                    </Row>
                    {/* Diagonal Cards Carousel */}
                    <Carousel>
                        <Carousel.Item style={{ overflow: 'visible' }}>
                            <Row className="diagonal-layout " style={{ overflow: 'visible' }}>
                                {/* Card 1 */}
                                <Col md={4} className="mb-4 card-1">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> Digital Marketing Services</Card.Title>
                                            <Card.Text>
                                                It’s not just posting and creating content that explains your brand, rather it majorly includes delivering that content to the right audience to convert them into your clientele.
                                            </Card.Text>
                                            <Link to="Digital-Marketing-Services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 2 */}
                                <Col md={4} className="mb-4 card-2">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com2} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> Offline Marketing Services</Card.Title>
                                            <Card.Text>
                                                It’s not just posting and creating content that explains your brand, rather it majorly includes delivering that content to the right audience to convert them into your clientele.
                                            </Card.Text>
                                            <Link to="Offline-Marketing-Services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 3 */}
                                <Col md={4} className="mb-4 card-3">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com3} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> Financial Services</Card.Title>
                                            <Card.Text>
                                                It’s not just posting and creating content that explains your brand, rather it majorly includes delivering that content to the right audience to convert them into your clientele.
                                            </Card.Text>
                                            <Link to="Financial-Services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        {/* Second Slide */}
                        <Carousel.Item>
                            <Row className="diagonal-layout">
                                {/* Card 4 */}
                                <Col md={4} className="mb-4 card-1">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> HR Services</Card.Title>
                                            <Card.Text>
                                                Enhance your online visibility and attract more customers with our tailored SEO strategies.
                                            </Card.Text>
                                            <Link to="hr-services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 5 */}
                                <Col md={4} className="mb-4 card-2">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com2} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> Graphic Designing Services</Card.Title>
                                            <Card.Text>
                                                Engage your audience with high-quality, engaging content crafted by our expert writers.
                                            </Card.Text>
                                            <Link to="graphic-designing-services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 6 */}
                                <Col md={4} className="mb-4 card-3">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title>Web development</Card.Title>
                                            <Card.Text>
                                                Maximize your ROI with our effective pay-per-click advertising strategies.
                                            </Card.Text>
                                            <Link to="web-development" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* 3333333 Slide */}
                        <Carousel.Item>
                            <Row className="diagonal-layout">
                                {/* Card 4 */}
                                <Col md={4} className="mb-4 card-1">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> Legal Services</Card.Title>
                                            <Card.Text>
                                                Enhance your online visibility and attract more customers with our tailored SEO strategies.
                                            </Card.Text>
                                            <Link to="legal-services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 5 */}
                                <Col md={4} className="mb-4 card-2">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com2} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title> Accounting  Services</Card.Title>
                                            <Card.Text>
                                                Engage your audience with high-quality, engaging content crafted by our expert writers.
                                            </Card.Text>
                                            <Link to="accounting-services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Card 6 */}
                                <Col md={4} className="mb-4 card-3">
                                    <Card className="h-100 custom-card-marketing">
                                        <Card.Img src={com} height={200} className='cards-img-mmarketing' />
                                        <Card.Body>
                                            <Card.Title>Printing Services</Card.Title>
                                            <Card.Text>
                                                Maximize your ROI with our effective pay-per-click advertising strategies.
                                            </Card.Text>
                                            <Link to="printing-services" className="btn btn-link">Learn more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>



        </>

    )
}

export default Marketing
