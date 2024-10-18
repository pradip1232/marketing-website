import React, { useState } from 'react';
import './vertical.css'; // Assuming your CSS file is named `vertical.css`

// Step components
const PersonalData = ({ formData, handleChange }) => (
    <div>
        <h2>Personal Data</h2>
        <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
        />
        <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
        />
    </div>
);



const BusinessDetails1 = ({ formData, handleChange }) => {
    const businessStages = ['Ideation', 'Startup', 'Established'];
    const turnovers = [
        '0 - 49,999',
        '50,000 - 1,99,999',
        '2,00,000 - 4,99,999',
        '5,00,000 - 9,99,999',
        '10,00,000+'
    ];

    return (
        <div>
            <h2>Business Details</h2>
            <input
                type="text"
                name="businessName"
                placeholder="Registered Business Name"
                value={formData.businessName}
                onChange={handleChange}
            />
            <div>
                <p>Which Stage is your Business Currently in?</p>
                {businessStages.map((stage) => (
                    <button
                        key={stage}
                        className={`stage-button ${formData.businessStage === stage ? 'active' : ''}`}
                        onClick={() => handleChange({ target: { name: 'businessStage', value: stage } })}
                    >
                        {stage}
                    </button>
                ))}
            </div>
            <div>
                <p>What was your company’s turnover in the last year?</p>
                {turnovers.map((turnover) => (
                    <button
                        key={turnover}
                        className={`turnover-button ${formData.turnover === turnover ? 'active' : ''}`}
                        onClick={() => handleChange({ target: { name: 'turnover', value: turnover } })}
                    >
                        {turnover}
                    </button>
                ))}
            </div>
            <input
                type="text"
                name="startedYear"
                placeholder="In which year did you start your company?"
                value={formData.startedYear}
                onChange={handleChange}
            />
        </div>
    );
};



const ServiceSelection = ({ formData, handleChange }) => {
    const services = [
        { name: 'Digital Marketing', value: 'digitalMarketing' },
        { name: 'HR Service', value: 'hrService' },
        { name: 'Legal Service', value: 'legalService' },
        { name: 'Web Development', value: 'webDevelopment' },
    ];

    return (
        <div>
            <h2>Select Your Service</h2>
            <div className="service-list">
                {services.map((service) => (
                    <div
                        key={service.value}
                        className={`service-option ${formData.selectedService === service.value ? 'active' : ''
                            }`}
                        onClick={() => handleChange({ target: { name: 'selectedService', value: service.value } })}
                    >
                        {service.name}
                    </div>
                ))}
            </div>
        </div>
    );
};


const DigitalMarketingDetails = ({ formData, handleChange }) => (
    <div>
        <h2>Digital Marketing Details</h2>
        <input
            type="text"
            name="campaignType"
            placeholder="Enter campaign type"
            value={formData.campaignType}
            onChange={handleChange}
        />
    </div>
);

const BusinessDetails = ({ formData, handleChange }) => (
    <div>
        <h2>Business Details</h2>
        <input
            type="text"
            name="businessName"
            placeholder="Enter business name"
            value={formData.businessName}
            onChange={handleChange}
        />
    </div>
);

const BusinessBudget = ({ formData, handleChange }) => (
    <div>
        <h2>Business Budget</h2>
        <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            value={formData.budget}
            onChange={handleChange}
        />
    </div>
);

const BusinessType = ({ formData, handleChange }) => (
    <div>
        <h2>Business Type</h2>
        <input
            type="text"
            name="businessType"
            placeholder="Enter business type"
            value={formData.businessType}
            onChange={handleChange}
        />
    </div>
);

const ReviewSubmit = ({ formData }) => (
    <div>
        <h2>Review & Submit</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Service Selected:</strong> {formData.selectedService}</p>
        <p><strong>Business Name:</strong> {formData.businessName}</p>
        <p><strong>Budget:</strong> {formData.budget}</p>
        <p><strong>Business Type:</strong> {formData.businessType}</p>
    </div>
);

const VerticalStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        selectedService: '',
        campaignType: '',
        businessName: '',
        budget: '',
        businessType: '',
    });

    const steps = [
        { label: 'Personal Data', content: PersonalData },
        { label: 'Business Details', content: BusinessDetails1 }, // New Business Details step

        { label: 'Service Selection', content: ServiceSelection },
        ...(formData.selectedService === 'digitalMarketing'
            ? [
                { label: 'Digital Marketing Details', content: DigitalMarketingDetails },
                { label: 'Business Budget', content: BusinessBudget },
                { label: 'Business Type', content: BusinessType },
            ]
            : []),
        { label: 'Review & Submit', content: ReviewSubmit },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleSubmit = () => {
        alert('Form Submitted Successfully!');
        console.log(formData);
    };

    const CurrentStepContent = steps[activeStep].content;
    const isLastStep = activeStep === steps.length - 1;

    return (
        <div className="stepper-container">
            <div className="stepper">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`step ${index === activeStep ? 'active' : ''}`}
                    >
                        <div className="step-number">{index + 1}</div>
                        {/* <div className="step-label">{step.label}</div> */}
                        <hr />
                    </div>
                ))}
            </div>

            <div className="content">
                <CurrentStepContent formData={formData} handleChange={handleChange} />
                <div className="buttons">
                    <button onClick={handleBack} disabled={activeStep === 0}>
                        Back
                    </button>
                    <button onClick={isLastStep ? handleSubmit : handleNext}>
                        {isLastStep ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerticalStepper;
