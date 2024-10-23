import React, { useState } from 'react';
import {
    Box,
    Button,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    Alert,
    TextField,
    // Row,
    // Col,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';




// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';


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
    { label: 'Thank You' },
];

// Styles
const useStyles = makeStyles(() => ({
    selectedButton: {
        backgroundColor: '#00758B!important',
        color: 'white !important',
        borderRadius: '0px!important',
        '&:hover': {
            backgroundColor: '#115293',
        },
    },
    normalButton: {
        // fontSize: '10px!important',

        backgroundColor: '#F2F2F2!important',
        color: 'black!important',
        borderRadius: '0px!important',
        // border: '1px solid #1976d2!important',
        '&:hover': {
            backgroundColor: '#F2F2F2!important',
        },
    },
}));

const VerticalStepper = () => {
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
        const s = value.concat(" ", price);
        setFormData((prev) => ({
            ...prev,
            [name]: value, // Store service name
            [`${name}_price`]: price, // Store corresponding price
        }));

        setSelectedService(value);
        setSelectedPrice(price);

        console.log(`Selected Service: ${value}, Price: ${price} ,  name: ${name}`); // Verify selected details.

        // my code 

        if (name === 'Select a Service' && value !== 'Digital Marketing Services') {
            // Jump to the last step if any other service is selected
            setActiveStep(steps.length - 1 );
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



    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("API URL new ENV file: " + apiUrl + "modal_form.php");
    console.log(process.env);
    console.log(process.env.REACT_APP_TEST_VAR);





    const handleSubmit = async () => {
        try {
            console.log('Submitting form data:', formData); // Check formData before submission.

            // const response = await fetch('http://localhost/squib/modal_form.php', {
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

            <Button onClick={() => setLgShow(true)} style={{ margin: '15rem' }}>Large modal</Button>
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
                                <Button
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
        </>
    );

};

export default VerticalStepper;
