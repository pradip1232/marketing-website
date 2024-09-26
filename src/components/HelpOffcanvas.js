import React, { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons for the button
import '../css/OffcanvasHelp.css'; // Custom CSS for any additional styles

function RightSideModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Button to trigger offcanvas */}
            <Button variant="primary" onClick={handleShow} className="help-btn">
                <i className="bi bi-question-circle"></i> How I Can Help
            </Button>

            {/* Offcanvas sliding in from the right */}
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Get Help</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        {/* Name Input */}
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        {/* Email Input */}
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        {/* Message Input */}
                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default RightSideModal;
