import React from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
// import mm from './../img/66 1.png';
import mm from './../img/1  (6).webp';
import dd from './../img/44 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/marketing.css';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';


import a from './../img/up/ICONS 1.png';
import b from './../img/up/ICONS 2.png';
import c from './../img/up/ICONS 3.png';
import d from './../img/up/ICONS 4.png';
import e from './../img/up/ICONS 5.png';
import f from './../img/up/ICONS 5.png';
import g from './../img/up/ICONS 7.png';
import h from './../img/up/ICONS 8.png';
import hi from './../img/up/squib icon 1 1.png';


import om from './../img/up/9 3.png';




import a1 from './../img/up/iconssssss 2.png';
import b1 from './../img/up/iconssssss 3.png';
import c1 from './../img/up/iconssssss 4.png';
import d1 from './../img/up/iconssssss 5.png';
import e1 from './../img/up/iconssssss 6.png';
import f1 from './../img/up/iconssssss 7.png';
import g1 from './../img/up/iconssssss 8.png';
import h1 from './../img/up/iconssssss 9.png';




const MarketingPage = () => {
    return (
        <>

            <section className="marketing-page" style={{ padding: '10px 30px' }}>


                <Container fluid
                    style={{
                        marginTop: '9rem',
                        textAlign: 'center',
                    }}
                >
                    <Row>
                        <Col md={12}>
                            <div
                                style={{
                                    padding: '0px 3rem 3rem 3rem',
                                    borderRight: '1px solid black',
                                    borderLeft: '1px solid black',
                                    borderBottom: '1px solid black',
                                }}
                            >
                                <img src={mm} alt="Marketing Image" style={{ width: '100%' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>



            <Container className='marketing-text'>
                <h2>Marketing is the essence of every business</h2>
                <p>A good product is nothing without right audience for which it is meant for. That’s exactly what we achieve from marketing. Bridging the gap between your business and your potential customer.</p>
            </Container>

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

                        }}>We cater to your requirements of ATL as well as BTL marketing activities. </h2>
                        {/* </Col>
            </Row>
            </div> */}
                    </Col>

                </Row>
            </Container>




            <section className='digimarketing-section-marketing mb-5 mt-5'>


                <Container fluid className='mt-5 pt-2' >
                    <Row>

                        <h2 className='digi-heading-m'>DIGITAL MARKETING</h2>
                    </Row>
                </Container>
                <Container fluid className="digital-marketing-section mb-5 pb-5">
                    <Row className='digi-cont-m'>
                        {/* Left Column for 3 columns with diagonal cards */}
                        <Col md={6} style={{ marginTop: '5rem' }}>
                            <Row>
                                {/* First Column with Images */}
                                <Col md={4} className="first-col">
                                    <Card className="custom-card-m square-card1">
                                        <img src={a} alt="Social Media Account Management" />
                                        <Card.Body>Social Media Account Management</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card2">
                                        <img src={b} alt="Search Engine Optimization" />
                                        <Card.Body>Search Engine Optimization (SEO)</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card3">
                                        <img src={c} alt="Content Creation" />
                                        <Card.Body>Content Creation</Card.Body>
                                    </Card>
                                </Col>

                                {/* Second Column with Text Only */}
                                <Col md={4} className="second-col" style={{ marginTop: '6rem' }}>
                                    <Card className="custom-card-m square-card4">
                                        <img src={d} />

                                        <Card.Body>Social Media Paid Campaigns</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card5 color-mid-cards">
                                        <img src={hi} />

                                        <Card.Body>PPC Campaigns</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card6">
                                        <img src={f} />

                                        <Card.Body>Search Engine Marketing</Card.Body>
                                    </Card>
                                </Col>

                                {/* Third Column with Text Only */}
                                <Col md={4} className="third-col" style={{ marginTop: '19rem' }}>
                                    <Card className="custom-card-m square-card7">
                                        <img src={g} />

                                        <Card.Body>Influencer Marketing</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card8">
                                        <img src={h} />

                                        <Card.Body>PR & Communication</Card.Body>
                                    </Card>
                                    {/* <Card className="custom-card-m square-card9">
                                    <img src={h} />

                                    <Card.Body>Others</Card.Body>
                                </Card> */}
                                </Col>
                            </Row>
                        </Col>

                        {/* Right Column with Image */}
                        <Col md={6} className="right-col">
                            <div className="image-container-m">
                                <img src={dd} alt="Digital Marketing" className="right-image" />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

            {/* MArkeing section to right side content  */}


            <section className='offline-marketingsection-marketing'>
                <Container fluid className="marketing-section-m mt-5 pt-5">

                    <Row>

                        <h2 className='marketing-heading-m'>OFFLINE MARKETING</h2>
                    </Row>
                </Container>
                <Container fluid className="digital-marketing-section mb-5 pb-5">
                    <Row className='digi-cont-m'>
                        {/* Right Column with Image */}
                        <Col md={6} className="right-col">
                            <div className="image-container-m">
                                <img src={om} alt="Digital Marketing" className="right-image" />
                            </div>
                        </Col>
                        {/* Left Column for 3 columns with diagonal cards */}
                        <Col md={6} style={{ marginTop: '5rem' }}>
                            <Row>
                                {/* First Column with Images */}
                                <Col md={4} className="first-col" style={{ marginTop: '19rem' }}>
                                    <Card className="custom-card-m square-card1">
                                        <img src={g1} alt="Social Media Account Management" />
                                        <Card.Body>Metro Station Naming Rights</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card2">
                                        <img src={h1} alt="Search Engine Optimization" />
                                        <Card.Body>Inside Station Branding</Card.Body>
                                    </Card>
                                    {/* <Card className="custom-card-m square-card3">
                                    <img src={c} alt="Content Creation" />
                                    <Card.Body>Content Creation</Card.Body>
                                </Card> */}
                                </Col>

                                {/* Second Column with Text Only */}
                                <Col md={4} className="second-col" style={{ marginTop: '6rem' }}>
                                    <Card className="custom-card-m square-card5 color-mid-cards">
                                        <img src={d1} />

                                        <Card.Body>Transit Media Advertising</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card4">
                                        <img src={e1} />

                                        <Card.Body>Bus Branding</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card6">
                                        <img src={f1} />

                                        <Card.Body>Cab Branding</Card.Body>
                                    </Card>
                                </Col>

                                {/* Third Column with Text Only */}
                                <Col md={4} className="third-col" >
                                    <Card className="custom-card-m square-card7">
                                        <img src={a1} />

                                        <Card.Body>Hoarding Advertising</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card8">
                                        <img src={b1} />

                                        <Card.Body>Airport Branding</Card.Body>
                                    </Card>
                                    <Card className="custom-card-m square-card9">
                                        <img src={c1} />

                                        <Card.Body>Metro Branding</Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>



            </section>














            <LookingWithContactBtn />
            <ExpertiseSection />
        </>
    )
}

export default MarketingPage
