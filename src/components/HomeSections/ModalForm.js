import React, { useState } from "react";
import '../../css/modalform.css';
import {
    Modal,
    Fade,
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    TextField,
    Snackbar,
    Slide,
} from "@mui/material";
import axios from "axios";

const steps = [
    { label: "Personal Details", fields: ["name", "email", "phone"] },
    {
        label: "Business Details",
        fields: [
            { name: "businessName", type: "text", placeholder: "Business Name" },
            { name: "businessStage", type: "option", placeholder: "Which Stage is your Business Currently in?", options: ["Ideation", "Startup", "Established"] },
            { name: "companyTurnover", type: "option", placeholder: "What was your company's turnover in the last year?", options: ["0 - 49,99,999", "50,00,000 - 1,99,99,999", "2,00,00,000 - 4,99,99,999", "5,00,00,000 - 9,99,99,999", "10,00,00,000+"] },
            { name: "startYear", type: "text", placeholder: "In which year did you start your company?" },
        ]
    },
    { label: "Services", fields: [] },
    {
        label: "Web Development Details",
        fields: ["webDevelopmentType", "projectBudget", "projectURL"]
    },
    {
        label: "Designing Service Pricing",
        fields: []
    },
    {
        label: " Ad Management Service Pricing",
        fields: []
    },
    // {
    //     label: "Summary & Confirmation",
    //     fields: []
    // },
    { label: "Summary & Confirmation", fields: [] },
];

const services = [
    "Digital Marketing", "Offline Marketing", "Graphic Designing",
    "Financial Services", "Printing Services", "Accounting Services",
    "HR Services", "Legal Services", "Web Development"
];

const ModalForm = ({ open, handleClose }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessStage: "",
        companyTurnover: "",
        startYear: "",
        selectedService: "",
        pagesManagement: "",
        designingServicePrice: "",
        adManagementPrice: "",
        adManagementBudget: [],
        projectDetails: "",
        projectBudget: "",
        projectURL: "",
        webDevelopmentType: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    };

    const validateFields = () => {
        const stepFields = steps[activeStep].fields;
        const newErrors = {};

        stepFields.forEach(field => {
            const fieldName = typeof field === "string" ? field : field.name;
            if (!formData[fieldName]) {
                newErrors[fieldName] = "This field is required.";
            }
        });

        if (activeStep === 2 && !formData.selectedService) {
            newErrors.selectedService = "Please select a service before proceeding.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleServiceSelect = (service) => {
        setFormData(prevData => ({ ...prevData, selectedService: service }));
        if (service === "Digital Marketing") {
            setActiveStep(3);
        } else {
            setActiveStep(steps.length - 1);
        }
    };

    const handleNext = () => {
        // if (validateFields()) {
        if (activeStep < steps.length - 1) {
            setActiveStep(prevStep => prevStep + 1);
        } else {
            handleSubmit();
        }
        // }
    };

    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const resetFormData = () => {
        setActiveStep(0);
        setFormData({
            name: "",
            email: "",
            phone: "",
            businessName: "",
            businessStage: "",
            companyTurnover: "",
            startYear: "",
            selectedService: "",
            pagesManagement: "",
            designingServicePrice: "",
            adManagementPrice: "",
            adManagementBudget: [],
            projectDetails: "",
            projectBudget: "",
            projectURL: "",
            webDevelopmentType: ""
        });
    };



    const handleSubmit = async () => {
        console.log('Submitting form with data:', formData); // Log the data being submitted
        try {
            const response = await axios.post(
                'http://localhost/squib/form_data.php',
                formData
            );

            console.log('Response from server:', response.data); // Log the server response
            setSnackbarMessage(response.data.message);
            setOpenSnackbar(true);
            resetFormData();
            handleClose();
        } catch (error) {
            console.error('Error submitting form:', error); // Log the error object

            // Check if the error is due to response from the server
            if (error.response) {
                console.error('Server responded with status:', error.response.status);
                console.error('Response data:', error.response.data);
                alert(`Error: ${error.response.data.message || 'Failed to submit form.'}`);
            } else if (error.request) {
                console.error('No response received from server:', error.request);
                alert('Error: No response received from the server. Please check your network connection.');
            } else {
                console.error('Error setting up request:', error.message);
                alert(`Error: ${error.message}`);
            }
        }
    };


    const renderFields = () => {
        if (activeStep === 2) {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom>Choose Your Service:</Typography>
                    <Box sx={{ width: '100%', maxWidth: '400px' }}>
                        {services.map((service) => (
                            <Button
                                key={service}
                                fullWidth
                                variant={formData.selectedService === service ? "contained" : "outlined"}
                                color="primary"
                                onClick={() => handleServiceSelect(service)}
                                sx={{
                                    marginBottom: 1,
                                    textTransform: 'none',
                                    backgroundColor: formData.selectedService === service ? '#00695c' : '#f5f5f5',
                                    color: formData.selectedService === service ? '#fff' : '#000',
                                }}
                            >
                                {service}
                            </Button>
                        ))}
                    </Box>
                    {errors.selectedService && (
                        <Typography color="error">{errors.selectedService}</Typography>
                    )}
                </Box>
            );
        }


        if (activeStep === 3) {
            const digitalMarketingOptions = [
                { name: "META FB", price: "₹2000" },
                { name: "LinkedIn", price: "₹1000" },
                { name: "YouTube", price: "₹2000" },
                { name: "Twitter", price: "₹1000" },
                { name: "Google My Business", price: "₹1000" },
            ];

            const handleMultiSelect = (option) => {
                setFormData(prevData => {
                    const alreadySelected = prevData.adManagementBudget.includes(option.name);
                    return {
                        ...prevData,
                        adManagementBudget: alreadySelected
                            ? prevData.adManagementBudget.filter(item => item !== option.name)
                            : [...prevData.adManagementBudget, option.name]
                    };
                });
            };

            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom>Digital Marketing Budget:</Typography>
                    <Box sx={{ width: '100%', maxWidth: '400px' }}>
                        {digitalMarketingOptions.map((option) => (
                            <Button
                                key={option.name}
                                fullWidth
                                variant={formData.adManagementBudget.includes(option.name) ? "contained" : "outlined"}
                                color="primary"
                                onClick={() => handleMultiSelect(option)}
                                sx={{
                                    marginBottom: 1,
                                    textTransform: 'none',
                                    backgroundColor: formData.adManagementBudget.includes(option.name) ? '#00695c' : '#f5f5f5',
                                    color: formData.adManagementBudget.includes(option.name) ? '#fff' : '#000',
                                }}
                            >
                                {option.name} {option.price}
                            </Button>
                        ))}
                    </Box>

                </Box>
            );
        }


        if (activeStep === 4) {
            const digitalMarketingOptions = [
                { name: "Up to 5 creatives -", price: "₹1000" },
                { name: "Up to 10 creatives -", price: "₹2000" },
                { name: "Up to 15 creatives -", price: "₹3000" },
                { name: "Up to 20 creatives-", price: "₹4000" },
                { name: "Up to 25 creatives-", price: "₹5000" },
                { name: "Up to 30 creatives -", price: "₹6000" },
                { name: "Up to 40 creatives-", price: "₹8000" },
                { name: "Up to 50 creatives -", price: "₹11000" },
                { name: "Up to 60 creatives -", price: "₹14000" },
            ];

            const handleMultiSelect = (option) => {
                setFormData(prevData => {
                    const alreadySelected = prevData.adManagementBudget.includes(option.name);
                    return {
                        ...prevData,
                        adManagementBudget: alreadySelected
                            ? prevData.adManagementBudget.filter(item => item !== option.name)
                            : [...prevData.adManagementBudget, option.name]
                    };
                });
            };

            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom>Number of Creatives Needed Monthly</Typography>
                    <Box sx={{ width: '100%', maxWidth: '400px' }}>
                        {digitalMarketingOptions.map((option) => (
                            <Button
                                key={option.name}
                                fullWidth
                                variant={formData.adManagementBudget.includes(option.name) ? "contained" : "outlined"}
                                color="primary"
                                onClick={() => setFormData(prevData => ({ ...prevData, adManagementBudget: option.name }))}
                                sx={{
                                    marginBottom: 1,
                                    textTransform: 'none',
                                    backgroundColor: formData.adManagementBudget.includes(option.name) ? '#00695c' : '#f5f5f5',
                                    color: formData.adManagementBudget.includes(option.name) ? '#fff' : '#000',
                                }}
                            >
                                {option.name} {option.price}
                            </Button>
                        ))}
                    </Box>
                    <Typography variant="p">Note: The default ratio is 70% static posts and 30% reels.
                        If more reels are required, charges may increase accordingly.</Typography>

                </Box>
            );
        }


        if (activeStep === 5) {
            const digitalMarketingOptions = [
                { name: " or 10% of your ad budget (whichever is higher)", price: "₹5000" },
                { name: " or 15% of your ad budget (whichever is higher)", price: "₹10000" },
            ];

            // Function to handle selection
            const handleSelection = (optionName) => {
                setFormData({
                    ...formData,
                    adManagementBudget: [optionName], // Set the selected option as the only item in the array
                });
            };

            console.log("handleSelection " + setFormData);

            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom>Digital Marketing Budget:</Typography>
                    <Box sx={{ width: '100%', maxWidth: '400px' }}>
                        {digitalMarketingOptions.map((option) => (
                            <Button
                                key={option.name}
                                fullWidth
                                variant={formData.adManagementBudget.includes(option.name) ? "contained" : "outlined"}
                                color="primary"
                                onClick={() => handleSelection(option.name)} // Implemented selection handling
                                sx={{
                                    marginBottom: 1,
                                    textTransform: 'none',
                                    backgroundColor: formData.adManagementBudget.includes(option.name) ? '#00695c' : '#f5f5f5',
                                    color: formData.adManagementBudget.includes(option.name) ? '#fff' : '#000',
                                }}
                            >
                                {option.price}
                                {option.name}
                            </Button>
                        ))}
                    </Box>
                </Box>
            );
        }



        // if (activeStep === 6) {
        //     return (
        //         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        //             <Typography variant="body1">Designing Service Price: {formData.designingServicePrice}</Typography>
        //             <Typography variant="body1">Ad Management Price: {formData.adManagementPrice}</Typography>
        //             <Typography variant="body1">Ad Management Budget: {formData.adManagementBudget.join(", ")}</Typography>
        //         </Box>
        //     );
        // }







        if (activeStep === steps.length - 1) { // Summary Step
            return (
                <Box>
                    <Typography variant="h6" gutterBottom>Review your details:</Typography>
                    {Object.entries(formData).map(([key, value]) => (
                        <Typography key={key} variant="body1">
                            {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}: {value}
                        </Typography>
                    ))}
                </Box>
            );
        }

        return steps[activeStep].fields.map((field) => {
            if (typeof field === "string") {
                return (
                    <Box key={field} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                            {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                        </Typography>
                        <TextField
                            fullWidth
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Box>
                );
            } else if (field.type === "text") {
                return (
                    <Box key={field.name} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                            {field.placeholder}
                        </Typography>
                        <TextField
                            fullWidth
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    </Box>
                );
            } else if (field.type === "option") {
                return (
                    <Box key={field.name} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                            {field.name.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                            {field.options.map((option) => (
                                <Button
                                    key={option}
                                    variant={formData[field.name] === option ? "contained" : "outlined"}
                                    onClick={() => setFormData(prevData => ({ ...prevData, [field.name]: option }))}
                                    sx={{ minWidth: "100px", mb: 1 }}
                                >
                                    {option}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                );
            }
            return null;
        });
    };

    return (
        <>
            <Modal open={open} onClose={handleClose} closeAfterTransition BackdropProps={{ timeout: 500 }}>
                <Fade in={open}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "60vw",
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Box sx={{ display: "flex", width: "100%" }}>
                            <Box sx={{ mr: 3, flexShrink: 0 }}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={index}>
                                            <StepLabel>{index.label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" component="h2" align="left" color="black" sx={{ mb: 3 }}>
                                    {steps[activeStep].label}
                                </Typography>
                                {renderFields()}
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                sx={{ mr: 2 }}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                disabled={activeStep === 2 && !formData.selectedService}
                            >
                                {activeStep === steps.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

            <Snackbar
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                TransitionComponent={(props) => <Slide {...props} direction="up" />}
                autoHideDuration={3000}
            />
        </>
    );
};

export default ModalForm;