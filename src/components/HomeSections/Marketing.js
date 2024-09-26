import React from 'react'
import { Card, Button, Row, Col, Container, Image } from 'react-bootstrap';
import { AccountBalance, TrendingUp, Group } from '@mui/icons-material'; // MUI Icons
import 'bootstrap/dist/css/bootstrap.min.css';


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
                    <Row>
                        <Col xs={6}>
                            <div className="text-left text-heading-servics mb-4">
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
                    {/* Diagonal Cards Layout */}
                    <Row className="diagonal-layout">
                        {/* Card 1 - Lower position */}
                        <Col md={4} className="mb-4 card-1">
                            <Card className="h-100 custom-card-marketing">
                                <Card.Img src={com} height={200} width={133} className='cards-img-mmarketing' />
                                <Card.Body>
                                    <Card.Title><i className="bi bi-laptop"></i> Digital Marketing Services</Card.Title>
                                    <Card.Text>
                                        It’s not just posting and creating content that explains your brand, rather it majorly includes delivering that content to the right audience to convert them into your clientele.
                                    </Card.Text>
                                    <a href="Digital-Marketing-Services" className="btn btn-link">Learn more</a>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Card 2 - Center position */}
                        <Col md={4} className="mb-4 card-2">
                            <Card className="h-100 custom-card-marketing">
                                <Card.Body>
                                    <Card.Img src={com2} height={200} width={133} height={115} className='cards-img-mmarketing' />

                                    <Card.Title><i className="bi bi-clipboard"></i> Offline Marketing Services</Card.Title>
                                    <Card.Text>
                                        It’s not just posting and creating content that explains your brand, rather it majorly includes delivering that content to the right audience to convert them into your clientele.
                                    </Card.Text>
                                    <a href="Offline-Marketing-Services" className="btn btn-link">Learn more</a>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Card 3 - Center position */}
                        <Col md={4} className="mb-4 card-3">
                            <Card className="h-100 custom-card-marketing">
                                <Card.Body>
                                    <Card.Img src={com3} height={200} width={133} height={115} className='cards-img-mmarketing' />

                                    <Card.Title><i className="bi bi-currency-dollar"></i> Financial Services</Card.Title>
                                    <Card.Text>
                                        It’s not just posting and creating content that explains your brand, rather it majorly includes delivering that content to the right audience to convert them into your clientele.
                                    </Card.Text>
                                    <a href="Financial-Services" className="btn btn-link">Learn more</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>



        </>

    )
}

export default Marketing
