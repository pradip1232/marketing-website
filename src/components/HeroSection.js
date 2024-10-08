import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import './HeroSection.css'; // Assuming you have a separate CSS file for hero section styles
import { Button, Row, Col, Container } from 'react-bootstrap';
import HappyClientsSection from './HappyClientsSection';
import TestimonialSection from './testimonials';
import FeaturesSection from './FeaturesSection';
import man from '../img/Group 95.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marketing from './HomeSections/Marketing';
import girls from './../img/5 1.png';

const HeroSection = () => {
  // Define the loading state
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 home-text-col">
              <div className="hero-content text-white">
                {loading ? (
                  <>
                    <Skeleton width={`80%`} height={30} />
                    <br />
                    <Skeleton width={`60%`} height={40} />
                    <br />
                    <Skeleton width={`90%`} height={20} />
                    <br />
                    <Skeleton width={150} height={40} />
                  </>
                ) : (
                  <>
                    <h2>Let's Start Something Big Together</h2>
                    <h1>ONE-STOP</h1>
                    <p>One-Stop for all Your Business Needs</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-6 mt-4 col-md-12 text-center justify-content-center">
              {loading ? (
                <>
                  <Skeleton width={300} height={300} />
                  <br />
                  <Skeleton width={150} height={40} style={{ marginTop: '20px' }} />
                </>
              ) : (
                <>
                  <img className="man-image" src={man} alt="man" />
                  <button className=" contact-btn">Let’s Connect</button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Marketing />

      <section className="about-us-section1">
        <div className="about-us-section">
          <Container className="position-relative p-0">
            <Row className="row">
              <Col md={7} className="p-0">
                <div className="girl-image-wrapper">
                  <img src={girls} alt="Girl" className="girl-image" />
                </div>
              </Col>
              <Col md={5} className="d-flex p-0 flex-column right-side-about-heading justify-content-center align-items-start text-section">
                <div className="content-wrapper">
                  <h3>About Us</h3>
                  <h4>A Visionary aim to deliver ease-of-doing-business for all !!</h4>
                  <p>The company was established with a view to support businesses to expand and help them grow exponentially.</p>
                  <p className="mt-5 pt-4">We provide services related to different industries and have a team of experienced members from various backgrounds.</p>
                  <Button className="outline-primary-white2 get-start-home-btn" >Get Started Now</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <FeaturesSection />
      <HappyClientsSection />
      <TestimonialSection />

      <div style={{ marginBottom: '7.5rem', marginTop: '7.5rem' }}>
        <section className="bg-color-green mt-5 mb-5"
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #00758B 100%)',
            width: '100%',
            height: '39px',
            position: 'relative'
          }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row justify-content-center">
              <div className="col-md-7 text-center d-flex align-items-center justify-content-between"
                style={{
                  border: '1px solid black',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '20px',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '12px',
                  justifyContent: 'space-between'
                }}>
                <h2 style={{ fontSize: '25px', fontWeight: '500', color: 'black', marginRight: '20px' }}>
                  Do you have any questions? <br /> Feel free to connect with us
                </h2>
                <a className="btn" style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#333',
                  lineHeight: '1.6',
                  height: '50px',
                  width: '161px',
                  border: '1px solid rgba(0, 0, 0, 1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'black',
                  borderRadius: '0px'
                }}>
                  Schedule A Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
