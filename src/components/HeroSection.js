import React from 'react';
import './HeroSection.css'; // Assuming you have a separate CSS file for hero section styles
import { Card, Button, Row, Col, Container, Image } from 'react-bootstrap';
import { AccountBalance, TrendingUp, Group } from '@mui/icons-material'; // MUI Icons
import HappyClientsSection from './HappyClientsSection';
import TestimonialSection from './testimonials';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';
import man from '../img/Group 95.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marketing from './HomeSections/Marketing';
import girls from './../img/5 1.png';




const HeroSection = () => {
  return (<>

    <section className="hero-section">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 home-text-col">
            <div className="hero-content text-white">
              <h2>Let's Start Something Big Together</h2>
              <h1>ONE-STOP</h1>
              <p>One-Stop for all Your Business Needs</p>
              <button className="btn learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="col-lg-6 mt-4 col-md-12 text-center justify-content-center ">
            <img className="man-image" src={man} alt="man" />
            <button className="btn contact-btn">Let’s Connect</button>
          </div>
        </div>
      </div>
    </section>





    <Marketing />


    <section className="about-us-section1 ">
      <div className='about-us-section'>


        <Container className="position-relative p-0">
          <Row className='row '>
            {/* Left Side - Girl Image */}
            <Col md={6} className="p-0">
              <div className="girl-image-wrapper">
                <img src={girls} alt="Girl" className="girl-image" />
              </div>
            </Col>

            {/* Right Side - Text and Button */}
            <Col md={6} className="d-flex p-0 flex-column right-side-about-heading justify-content-center align-items-start text-section">
              <div className="content-wrapper">
                <h3>About Us</h3>
                <h4>A Visionary aim to deliver ease-of-doing-business for all !!</h4>
                <p>
                  The company was established with a view to support businesses to expand and help
                  them grow exponentially.
                </p>
                <p>
                  We provide services related to different industries and have a team of experienced
                  members from various backgrounds.
                </p>
                <Button variant="outline-primary">Get Started Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>




    <FeaturesSection />








    <HappyClientsSection />

    <TestimonialSection />

    <div style={{
      marginBottom: '7.5rem',
      marginTop: '7.5rem',
    }}>

      <section
        className="bg-color-green mt-5 mb-5"
        style={{
          background: 'linear-gradient(90deg, #000000 0%, #00758B 100%)',
          width: '100%',
          height: '39px', // Keep the height fixed for the background strip
          position: 'relative', // Allow positioning of inner container

        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div
              className="col-md-7 text-center d-flex align-items-center justify-content-between" // Align elements properly
              style={{
                border: '1px solid black',
                backgroundColor: 'white',
                borderRadius: '5px', // Added slight rounding for better appearance
                position: 'absolute', // Positioning the box container
                top: '50%', // Center the box vertically
                left: '50%', // Center the box horizontally
                transform: 'translate(-50%, -50%)', // Correct the centering
                padding: '20px', // Add padding for better spacing within the box
                zIndex: 2, // Ensure it's above the gradient strip
                display: 'flex', // Flexbox for better alignment
                flexDirection: 'row', // Align elements horizontally
                marginTop: '12px',
                justifyContent: 'space-between',
                // width: '100%', // Full width for better spacing
                // maxWid', // Limit max width for the content
              }}
            >
              <h2 style={{ fontSize: '25px', fontWeight: '500', color: 'black', marginRight: '20px' }}>
                Do you have any question? <br />
                Feel free to connect with us
              </h2>
              <a
                className="btn"
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#333',
                  lineHeight: '1.6',
                  height: '50px', // Increased height for better button appearance
                  width: '161px',
                  border: '1px solid rgba(0, 0, 0, 1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center', // Center the text inside the button
                  textDecoration: 'none', // Remove underline from link
                  // backgroundColor: '#00758B', // Add a background color to the button
                  color: 'black', // Make the button text white for contrast
                  borderRadius: '0px', // Add some rounding to the button
                }}
              >
                Schedule A Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* <Footer /> */}

  </>
  );
};

export default HeroSection;
