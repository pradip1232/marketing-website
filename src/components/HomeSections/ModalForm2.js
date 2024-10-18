// import React, { useState } from "react";
// import { Modal, Accordion, Card, Button } from "react-bootstrap";


import React, { useState } from "react";
import { Modal, Accordion, Card, Button } from "react-bootstrap";


import "../../css/modalform.css"; // Import your custom styles if needed

const ModalForm2 = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Step 1", content: "This is the content for Step 1." },
    { title: "Step 2", content: "This is the content for Step 2." },
    { title: "Step 3", content: "This is the content for Step 3." },
    { title: "Step 4", content: "This is the content for Step 4." },
  ];

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex === activeStep ? -1 : stepIndex);
  };

  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Vertical Stepper Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion defaultActiveKey="0">
          {steps.map((step, index) => (
            <Card key={index} style={{ marginBottom: "1rem" }}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={index.toString()}
                onClick={() => handleStepClick(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: activeStep === index ? "#007bff" : "#f8f9fa",
                  color: activeStep === index ? "#fff" : "#000",
                }}
              >
                {step.title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>
                  <p>{step.content}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleStepClick(index + 1)}
                    disabled={index === steps.length - 1}
                  >
                    Next Step
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm2;
