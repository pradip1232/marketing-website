import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { TextField, FormControl, InputLabel, Select, Box, MenuItem, Typography, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import man from './../img/conntact usimg 1.png'; // Ensure correct path
import callimg from './../img/conntact us icon 1.png'; // Ensure correct path
import '../css/ContactForm.css'; // Optional: For custom CSS

const Contact = () => {
  return (
    <>
      <div className="container mt-5 pt-5" style={{ marginTop: '20px!important' }}>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img
              src={callimg}
              alt="Contact Us Icon"
              className="img-fluid contact-worlds-images" // Makes the image responsive
              // style={{ maxWidth: '470px', height: 'auto' }} // Limits the image size
            />
          </div>
        </div>
      </div>

      <section>
        <div className="container mt-5 pt-5 mb-5">
          <div className="row text-contact-heading justify-content-center text-center">
            <h2>Let’s Create Something Incredible Together!</h2>
            <p>
              Whether you’re looking to build a strong online presence, improve your brand’s visibility, or grow your business with cutting-edge digital strategies, we’re here to help.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Container fluid className="text-center contact-cont-conn  py-5">
          {/* Header Section */}
          <Row className="justify-content-center reach-contant mb-4">
            <Col md={12}>
              <Button variant="primary" className="rounded-pill reach-out-btn px-4 py-2">Reach Out to Us</Button>
            </Col>
            <Col md={12} className="mt-3">
              <p>
                We're always ready to discuss your next project or answer any questions you may have.<br />
                Contact us via the methods below, and we'll get back to you as soon as possible.
              </p>
            </Col>
          </Row>

          {/* Contact Info Section */}
          <Row className="justify-content-center bg-dark-contant text-white py-4" style={{
            background: 'linear-gradient(90deg, #000000 0%, #00758B 100%)'
          }}>
            <Col md={4} className="d-flex flex-column align-items-center">
              <FaEnvelope size={40} />
              <p className="mt-2">Contact@squibfactory.com</p>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center">
              <FaPhoneAlt size={40} />
              <p className="mt-2">+91-9667799617</p>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center">
              <FaMapMarkerAlt size={40} />
              <p className="mt-2 text-center">
                Aggarwal Corporate Heights, Netaji Subhash Place,<br />
                Pitampura, Delhi - 110034
              </p>
            </Col>

          </Row>

          {/* Social Media Section */}
          <Row className="justify-content-center text-center icon-contant mt-4">
            <Col md={12} className="mb-3">
              <h5>Connect With Us on Social Media</h5>
            </Col>
            <Col md={4} className="d-flex justify-content-center justify-content-md-evenly">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={43} className="mx-2 text-primary" aria-label="Facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={43} className="mx-2 text-danger" aria-label="Instagram" />
              </a>

              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={43} className="mx-2 text-primary" aria-label="LinkedIn" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="justify-content-start">
          <Col md={6} className="text-left">
            <Typography variant="h4" align="left" className='lets-content' gutterBottom>
              Let’s Collaborate!
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    placeholder="Enter your name"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Your message"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>How Did You Hear About Us?</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="">
                        <em>Select an option</em>
                      </MenuItem>
                      <MenuItem value="Friend">Friend</MenuItem>
                      <MenuItem value="Social Media">Social Media</MenuItem>
                      <MenuItem value="Search Engine">Search Engine</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" className='submit-btn-contact' type="submit" fullWidth>
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </form>

          </Col>
          <Col md={6} className="text-center">
            <Box
               className="contact-man-box"
            >
              <img
                src={man}
                alt="Person pointing"
                className="img-fluid"
             
              />
            </Box>
          </Col>

        </Row>
        <Row className="text-center  mt-4">
          <Col>
            <p className='last-text-contact'>We look forward to hearing from you and helping you achieve your digital marketing goals!</p>
          </Col>
        </Row>
      </Container >
    </>
  );
}

export default Contact;
