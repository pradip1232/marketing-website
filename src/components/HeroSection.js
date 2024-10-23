import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import './HeroSection.css'; // Assuming you have a separate CSS file for hero section styles
// import '../css/modalform.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import HappyClientsSection from './HappyClientsSection';
import TestimonialSection from './testimonials';
import FeaturesSection from './FeaturesSection';
// import man from '../img/Group 95.png';
import man from '../img/1  (1).webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';

import Marketing from './HomeSections/Marketing';
import girls from './../img/5 1.png';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@mui/material';

import { Fade, Box, Typography } from '@mui/material';
import ModalForm from "./HomeSections/ModalForm";
import VerticalStepper from "./HomeSections/MM";













import {

  Stepper,
  Step,
  StepLabel,
  StepContent,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';


// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// Snackbar Transition Animation
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// Step Data
const steps = [
  {
    label: 'Personal Details',
    fields: [
      { name: 'Name', type: 'text' },
      { name: 'Email', type: 'text' },
      { name: 'Phone Number', type: 'text' },
    ],
  },
  {
    label: 'Business Details',
    fields: [
      { name: 'Business Name', type: 'text' },
      {
        name: 'Business Stage',
        type: 'buttonGroup',
        options: ['Ideation', 'Startup', 'Established'],
      },
      {
        name: 'Turnover Last Year',
        type: 'buttonGroup',
        options: ['0 - 49,99,999', '50,00,000 - 1,99,99,999', ' 2,00,00,000 - 4,99,99,999', '5,00,00,000 - 9,99,99,999', '10,00,00,000+'],
      },
      { name: 'Established Year', type: 'text' },
    ],
  },
  {
    label: 'Services',
    fields: [
      {
        name: 'Select a Service',
        type: 'buttonGroup',
        options: [
          'Digital Marketing Services',
          'Offline Marketing',
          'Graphic Designing',
          'Financial Services',
          'Printing Services',
          'Accounting Services',
          'HR Services', 'Legal Services', 'Web Development'],
      },
    ],
  },
  {
    label: 'Page Management Service Pricing',
    fields: [
      {
        name: 'Page Management Service Pricing',
        type: 'buttonGroup',
        options: [
          { text: 'META (Fb & Instagram)', price: '₹2000' },
          { text: 'Google Ads', price: '₹3000' },
          { text: 'YouTube ', price: '₹2000' },
          { text: 'Twitter ', price: '₹1000' },
          { text: 'Google My Business ', price: '₹1000' },
        ],
      },
    ],
  },
  {
    label: 'Designing Service Pricing',
    fields: [
      {
        name: 'Designing Service Pricing',
        type: 'buttonGroup',
        options: [
          { text: 'Up to 5 creatives', price: '₹1000' },
          { text: 'Up to 10 creatives', price: '₹2000' },
          { text: 'Up to 15 creatives', price: '₹3000' },
          { text: 'Up to 20 creatives', price: '₹4000' },
          { text: 'Up to 25 creatives', price: '₹5000' },
          { text: 'Up to 30 creatives', price: '₹6000' },
          { text: 'Up to 40 creatives', price: '₹8000' },
          { text: 'Up to 50 creatives', price: '₹11000' },
          { text: 'Up to 60 creatives', price: '₹14000' },
        ],
      },
    ],
  },
  {
    label: ' Ad Management Service Pricing',
    fields: [
      {
        name: 'Ad Management Service Pricing',
        type: 'buttonGroup',
        options: [
          { text: ' 10% of your ad budget (whichever is higher)', price: '₹5000' },
          { text: ' 10% of your ad budget (whichever is higher)', price: '₹5000' },

        ],
      },
    ],
  },
  // { label: 'Review & Submit' },
];

const useStyles = makeStyles(() => ({
  selectedButton: {
    backgroundColor: '#00758B!important',
    marginBottom: '10px!important',

    color: 'white !important',
    borderRadius: '0px!important',
    '&:hover': {
      backgroundColor: '#115293',
    },
  },
  normalButton: {
    // fontSize: '10px!important',

    backgroundColor: 'white!important',
    color: 'black!important',
    marginBottom: '10px!important',
    borderRadius: '0px!important',
    border: '1px solid white!important',
    '&:hover': {
      backgroundColor: 'white!important',
    },
  },
}));



const HeroSection = () => {

  const leftColAnimation = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0%)', opacity: 1 },
    config: { duration: 1200, tension: 280, friction: 30 },
  });

  const rightColAnimation = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: 'translateX(0%)', opacity: 1 },
    config: { duration: 1200, tension: 280, friction: 30 },
  });


  // Define the loading state
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);






  // Setting up the useInView hook
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Animation for left and right columns
  const leftColAnimationAbout = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: inView ? 'translateX(0%)' : 'translateX(-100%)', opacity: inView ? 1 : 0 },
    config: { duration: 800, tension: 200, friction: 30 },
  });

  const rightColAnimationAbout = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: inView ? 'translateX(0%)' : 'translateX(100%)', opacity: inView ? 1 : 0 },
    config: { duration: 800, tension: 200, friction: 30 },
  });


  const isDesktop = useMediaQuery('(min-width:768px)');









  //modal

  // Modal state
  const [open, setOpen] = useState(false); // Manage modal state

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);













  // modal form logic 
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [selectedService, setSelectedService] = useState('');

  const validateField = (name, value, pattern) => {
    if (!value) return 'This field is required';
    if (pattern && !pattern.test(value)) return 'Invalid format';
    return '';
  };

  const handleInputChange = (name, value, pattern) => {
    const error = validateField(name, value, pattern);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleButtonGroupChange = (name, value, price = '') => {
    // Update formData with both value and price.
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Store service name
      [`${name}_price`]: price, // Store corresponding price
    }));

    setSelectedService(value);
    setSelectedPrice(price);

    console.log(`Selected Service: ${value}, Price: ${price}`); // Verify selected details.

    // my code 

    if (name === 'Select a Service' && value !== 'Digital Marketing Services') {
      // Jump to the last step if any other service is selected
      setActiveStep(steps.length - 1);
    }
  };

  const handleNext = () => {
    const currentFields = steps[activeStep].fields || [];
    const newErrors = {};
    let isValid = true;

    // Validate fields
    currentFields.forEach((field) => {
      const value = formData[field.name] || '';
      const error = validateField(field.name, value, field.pattern);
      if (error) isValid = false;
      newErrors[field.name] = error;
    });

    setErrors(newErrors);

    if (isValid) {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => {
    setActiveStep(0);
    setFormData({});
    setErrors({});
  };

  // const handleSubmit = () => setOpenDialog(true);





  // const apiUrl = process.env.REACT_APP_API_URL;
  const apiUrl = 'https://squibfactory.com/apis';
  console.log("API URL new ENV ddd: " + apiUrl);

  const handleSubmit = async () => {
    try {
      console.log('Submitting form data:', formData); // Check formData before submission.

      // const response = await fetch('form_data.php', {
      const response = await fetch(`${apiUrl}/modal_form.php`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        setSnackbarMessage('Form submitted successfully!');
        setShowSnackbar(true);
        handleReset();
      } else {
        const errorData = await response.json();
        setSnackbarMessage(`Error: ${errorData.message || 'Submission failed'}`);
        setShowSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage(`Error: ${error.message}`);
      setShowSnackbar(true);
    }
  };






  // const [selectedService, setSelectedService] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(''); // Store selected price












  const handleCloseDialog = () => {
    setOpenDialog(false);
    setShowSnackbar(true);
    handleReset();
  };

  const handleCloseSnackbar = () => setShowSnackbar(false);


  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);









  return (
    <>


      <section className="hero-section">
        <div className="container position-relative">
          <div className="row align-items-center hero-section-row">
            <animated.div style={leftColAnimation} className="col-lg-6 col-md-12 home-text-col">
              <div className="hero-content text-white">

                <h2>Let's Start Something Big Together</h2>
                <h1>ONE-STOP</h1>
                <p>One-Stop for all Your Business Needs</p>
                <button className="btn learn-more-btn">Learn More</button>


              </div>
            </animated.div>

            <animated.div style={rightColAnimation} className="col-lg-6 mt-4 col-md-12 text-center justify-content-center">

              <>
                <img className="man-image" src={man} alt="man" />

                <button className="contact-btn let-contact-btn" onClick={() => setLgShow(true)} >
                  Let’s Connect
                </button>
              </>

            </animated.div>
          </div>
        </div>
      </section>






      {/* modal form  */}

      {/* <Button onClick={() => setLgShow(true)} style={{ margin: '15rem' }}> modal</Button> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <div
            className='mainContainer'
            style={{ display: 'flex', maxWidth: 'auto', padding: '20px' }}
          >
            <div className='verticalStepperContainer' style={{ width: '40px', marginRight: '20px', flexShrink: 0 }}>
              <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
                {steps.map((step, index) => (
                  <Step key={step.label} completed={index < activeStep}>
                    <StepLabel>{index.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className='contentContainer' style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" component="h2" align="left" color="black" sx={{ mb: 3 }}>
                {steps[activeStep].label}
              </Typography>
              {steps[activeStep]?.fields?.map((field) => (
                <Box key={field.name} sx={{ mb: 2 }}>
                  {field.type === 'text' ? (
                    <TextField
                      label={field.name}
                      fullWidth
                      variant="outlined"
                      error={!!errors[field.name]}
                      helperText={errors[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value, field.pattern)}
                    />
                  ) : field.type === 'buttonGroup' ? (
                    <Box>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {field.name}
                      </Typography>
                      {activeStep === 1 ? ( // Only step 2 uses row layout
                        <Row>
                          {field.options.map((option) => (
                            <Col key={option} sm={4} md={3}>

                              <Button
                                onClick={() => handleButtonGroupChange(field.name, option)}
                                className={
                                  formData[field.name] === option
                                    ? classes.selectedButton
                                    : classes.normalButton
                                }
                                sx={{ mr: 1, mb: 1 }}
                              >
                                {option}
                              </Button>
                            </Col>
                          ))}
                        </Row>
                      ) : (
                        <Box display="flex" flexDirection="column">
                          {field.options.map((option) => (
                            <Row>
                              <Col sm={12} md={6}>

                                <Button
                                  key={typeof option === 'string' ? option : option.text}
                                  onClick={() =>
                                    handleButtonGroupChange(
                                      field.name,
                                      typeof option === 'string' ? option : option.text, option.price
                                    )
                                  }
                                  className={
                                    formData[field.name] === (typeof option === 'string' ? option : option.text)
                                      ? classes.selectedButton
                                      : classes.normalButton
                                  }
                                  sx={{ mb: 1 }}
                                >
                                  {typeof option === 'string' ? option : `${option.text} ${option.price}`}
                                </Button>
                              </Col>
                            </Row>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ) : null}
                </Box>
              ))}
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
                <Button className="nextbtn-modal" style={{ border: '1px solid #00758B', color: 'black', background: 'white' }}
                  variant="contained"
                  onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </div>
          </div>
        </Modal.Body>
      </Modal>






      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Form Data</DialogTitle>
        <DialogContent>
          {Object.entries(formData).map(([key, value]) => (
            <Box key={key} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {key}:
              </Typography>
              <Typography>{value}</Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        TransitionComponent={Transition}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thank you for your time!
        </Alert>
      </Snackbar>




      <ModalForm open={open} handleClose={handleClose} />
      {/* <VerticalStepper open={open} handleClose={handleClose} /> */}







      <Marketing />



      <section className="about-us-section1" ref={ref}>
        <div className="about-us-section">
          <Container className="position-relative p-0">
            <Row className="row-girls-sections">
              {/* Apply animation only on desktop */}
              {isDesktop ? (
                <>
                  <animated.div style={leftColAnimationAbout} className='col-md-7 p-0'>
                    <div className="girl-image-wrapper">
                      <img src={girls} alt="Girl" className="girl-image" />
                    </div>
                  </animated.div>
                  <animated.div style={rightColAnimationAbout} className="col-md-5 d-flex  flex-column right-side-about-heading justify-content-center align-items-start text-section">
                    <div className="content-wrapper">
                      <h3>About Us</h3>
                      <h4>A Visionary aim to deliver ease-of-doing-business for all !!</h4>
                      <p>The company was established with a view to support businesses to expand and help them grow exponentially.</p>
                      <p className="mt-5 pt-4">We provide services related to different industries and have a team of experienced members from various backgrounds.</p>
                      <Button className="outline-primary-white2 get-start-home-btn">Get Started Now</Button>
                    </div>
                  </animated.div>
                </>
              ) : (
                <>
                  {/* No animation on mobile */}
                  <div className='col-md-7 p-0'>
                    <div className="girl-image-wrapper">
                      <img src={girls} alt="Girl" className="girl-image" />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex  flex-column right-side-about-heading justify-content-center align-items-start text-section">
                    <div className="content-wrapper">
                      <h3>About Us</h3>
                      <h4>A Visionary aim to deliver ease-of-doing-business for all !!</h4>
                      <p>The company was established with a view to support businesses to expand and help them grow exponentially.</p>
                      <p className="mt-5 pt-4">We provide services related to different industries and have a team of experienced members from various backgrounds.</p>
                      <Button className="outline-primary-white2 get-start-home-btn">Get Started Now</Button>
                    </div>
                  </div>
                </>
              )}
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
              <div className="col-md-7 text-center d-flex align-items-center justify-content-between schdule-call-caontainer"
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
                  height: '41px',
                  width: '194px',
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
