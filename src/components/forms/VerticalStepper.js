import React, { useState } from 'react';
import {
    Box,
    Button,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    TextField,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    Alert,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';

// Transition function for Snackbar animation
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const steps = [
    { label: 'Personal Details', fields: ['Name', 'Email', 'Phone Number'] },
    {
        label: 'Business Details',
        fields: [
            { name: 'Business Name', type: 'text' },
            { name: 'Business Stage', type: 'radio', options: ['Ideation', 'Startup', 'Established'] },
            { name: 'Turnover Last Year', type: 'checkbox', options: ['0 - 49,999', '50,000 - 199,999', '500,000 - 999,999', '1,000,000+'] },
            { name: 'Established Year', type: 'text' }
        ]
    },
    { label: 'Financial Details', fields: ['Annual Revenue', 'Number of Employees'] },
    { label: 'Review & Submit' },
];

const useStyles = makeStyles((theme) => ({
    snackbar: {
        backgroundColor: 'green', // Green background
        color: 'white',
        borderRadius: '8px', // Rounded corners
    },
}));

const VerticalStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false); // State for the Snackbar

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setFormData((prevData) => (prevData[name] ? { ...prevData, [name]: [...prevData[name], value] } : { ...prevData, [name]: [value] }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setShowSnackbar(true); // Show Snackbar on closing dialog
        handleReset(); // Reset the form after closing the dialog
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false); // Close the Snackbar
    };

    return (
        <Box sx={{ maxWidth: 500, margin: '0 auto', bgcolor: 'white', padding: 2, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Step {activeStep + 1}
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
                {steps.map((step, index) => (
                    <Step key={step.label} completed={index < activeStep}>
                        <StepLabel>{step.label}</StepLabel>
                        {index === activeStep && (
                            <StepContent>
                                {step.fields && step.fields.map((field) => {
                                    if (field.type === 'radio') {
                                        return (
                                            <RadioGroup name={field.name} onChange={handleChange} key={field.name}>
                                                {field.options.map((option) => (
                                                    <FormControlLabel
                                                        key={option}
                                                        value={option}
                                                        control={<Radio />}
                                                        label={option}
                                                    />
                                                ))}
                                            </RadioGroup>
                                        );
                                    }
                                    if (field.type === 'checkbox') {
                                        return (
                                            <div key={field.name}>
                                                <FormLabel>{field.name}</FormLabel>
                                                {field.options.map((option) => (
                                                    <FormControlLabel
                                                        key={option}
                                                        control={
                                                            <Checkbox
                                                                name={field.name}
                                                                value={option}
                                                                onChange={handleChange}
                                                            />
                                                        }
                                                        label={option}
                                                    />
                                                ))}
                                            </div>
                                        );
                                    }
                                    return (
                                        <TextField
                                            key={field.name}
                                            label={field.name}
                                            name={field.name}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            onChange={handleChange}
                                            value={formData[field.name] || ''}
                                        />
                                    );
                                })}
                                <Box sx={{ mt: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={index === steps.length - 1 ? handleSubmit : handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        )}
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Box sx={{ p: 3 }}>
                    <Typography>All steps completed - you're finished</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
            )}

            {/* Dialog for displaying form data */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Form Data</DialogTitle>
                <DialogContent>
                    <Box>
                        {Object.entries(formData).map(([key, value]) => (
                            <Box key={key} sx={{ marginBottom: 2 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{key}:</Typography>
                                <Typography>
                                    {Array.isArray(value) ? value.join(', ') : value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for thank-you message */}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={5000} // Auto close in 5 seconds
                onClose={handleCloseSnackbar}
                TransitionComponent={Transition} // Use the custom transition
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning at top-right
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Thank you for your time!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default VerticalStepper;
