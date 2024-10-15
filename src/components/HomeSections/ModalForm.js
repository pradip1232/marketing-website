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
            { name: "businessName", type: "text", placeholder: "Registered Business Name" },
            { name: "businessStage", type: "option", options: ["Ideation", "Startup", "Established"] },
            { name: "companyTurnover", type: "option", options: ["0 - 49,99,999", "50,00,000 - 1,99,99,999", "2,00,00,000 - 4,99,99,999", "5,00,00,000 - 9,99,99,999", "10,00,00,000+"] },
            { name: "startYear", type: "text", placeholder: "Started Year" },
        ]
    },
    { label: "Services", fields: [] },
    {
        label: "Web Development Details",
        fields: ["webDevelopmentType", "projectBudget", "projectURL"]
    },
    {
        label: "Digital Marketing Budget",
        fields: ["adManagementBudget", "pagesManagement"]
    },
    {
        label: "Profile Your Full",
        fields: ["designingServicePrice", "adManagementPrice"]
    },
    {
        label: "Project Details for Digital Marketing",
        fields: ["projectDetails"]
    },
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
        adManagementBudget: "",
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
        if (service === "Web Development") {
            setActiveStep(3);
        } else if (service === "Digital Marketing") {
            setActiveStep(4);
        } else {
            setActiveStep(steps.length - 1);
        }
    };

    const handleNext = () => {
        if (validateFields()) {
            if (activeStep < steps.length - 1) {
                setActiveStep(prevStep => prevStep + 1);
            } else {
                handleSubmit();
            }
        }
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
            adManagementBudget: "",
            projectDetails: "",
            projectBudget: "",
            projectURL: "",
            webDevelopmentType: ""
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'http://localhost/squib/form_data.php',
                formData
            );
            console.log(response.data);
            setSnackbarMessage("Form submitted successfully!");
            setOpenSnackbar(true);
            resetFormData();
            handleClose();
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            alert('There was an error submitting the form. Please check the console for more details.');
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

        if (activeStep === steps.length - 1) {
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
            const fieldName = typeof field === "string" ? field : field.name;
            const fieldType = typeof field === "string" ? "text" : field.type;

            return (
                <Box key={fieldName} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        {field.placeholder || fieldName.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </Typography>
                    {fieldType === "text" ? (
                        <TextField
                            fullWidth
                            name={fieldName}
                            value={formData[fieldName]}
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            error={!!errors[fieldName]}
                            helperText={errors[fieldName]}
                            InputLabelProps={{ shrink: true }}
                        />
                    ) : fieldType === "option" ? (
                        <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                            {field.options.map((option) => (
                                <Button
                                    key={option}
                                    variant={formData[fieldName] === option ? "contained" : "outlined"}
                                    onClick={() => setFormData(prevData => ({ ...prevData, [fieldName]: option }))}
                                    sx={{ minWidth: "100px", mb: 1 }}
                                >
                                    {option}
                                </Button>
                            ))}
                        </Box>
                    ) : null}
                </Box>
            );
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
                            width: "80vw",
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            display: 'flex',
                        }}
                    >
                        <Box sx={{ width: '5%', mr: 2 }}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((step, index) => (
                                    <Step key={index}>
                                        <StepLabel>{index.label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box sx={{ width: '90%' }}>
                        <Typography variant="h5">{steps[activeStep].label}</Typography>

                            {renderFields()}
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>

                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <Snackbar
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                autoHideDuration={5000}
                message={snackbarMessage}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                TransitionComponent={(props) => <Slide {...props} direction="left" />}
            />
        </>
    );
};

export default ModalForm;
