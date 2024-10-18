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
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';

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
                options: ['0 - 49,999', '50,000 - 199,999', '500,000 - 999,999', '1,000,000+'],
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
                options: ['Digital Marketing Services', 'HR Services', 'Legal Services', 'Web Development'],
            },
        ],
    },
    {
        label: 'Page Management Service Pricing',
        fields: [
            {
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
                type: 'buttonGroup',
                options: [
                    { text: ' 10% of your ad budget (whichever is higher)', price: '₹5000' },
                    { text: ' 10% of your ad budget (whichever is higher)', price: '₹5000' },

                ],
            },
        ],
    },
    { label: 'Review & Submit' },
];

// Styles
const useStyles = makeStyles(() => ({
    selectedButton: {
        backgroundColor: '#1976d2 !important',
        color: 'white !important',
        '&:hover': {
            backgroundColor: '#115293',
        },
    },
    normalButton: {
        backgroundColor: 'white',
        color: '#1976d2',
        border: '1px solid #1976d2',
        '&:hover': {
            backgroundColor: '#e3f2fd',
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

    const handleButtonGroupChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setSelectedService(value);

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

    const handleSubmit = () => setOpenDialog(true);

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setShowSnackbar(true);
        handleReset();
    };

    const handleCloseSnackbar = () => setShowSnackbar(false);

    return (
        <>
            <div
                className='mainContainer'
                style={{ display: 'flex', maxWidth: '800px', margin: '10rem auto', padding: '20px' }}
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
                                    {field.options.map((option) => (
                                        <Button
                                            key={typeof option === 'string' ? option : option.text}
                                            onClick={() =>
                                                handleButtonGroupChange(
                                                    field.name,
                                                    typeof option === 'string' ? option : option.text
                                                )
                                            }
                                            className={
                                                formData[field.name] === (typeof option === 'string' ? option : option.text)
                                                    ? classes.selectedButton
                                                    : classes.normalButton
                                            }
                                            sx={{ mr: 1, mb: 1 }}
                                        >
                                            {typeof option === 'string' ? option : `${option.text} ${option.price}`}
                                        </Button>
                                    ))}
                                </Box>
                            ) : null}
                        </Box>
                    ))}

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            variant="contained"
                            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                        </Button>
                    </Box>
                </div>
            </div>

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
