import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './MarketingSection.css'; // Import custom CSS for additional styles
import img from '../../img/9 2.png';
const OfflineMarketing = () => {
    return (
        <Container fluid className="marketing-section">
            <div className="align-items-center  justify-content-center">
                <div className=" container position-absolute">
                    <div className="ml-md-4 pl-md-4 offline-marketing-first" style={{ padding: '60px 85px' }}>
                        <h2 className="marketing-title">Offline Marketing</h2>
                        <p className="marketing-description">
                            Experience the best-in-industry services by our team of experts catering to multiple clients across different industries.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Image
                        src={img}
                        alt="Laptop with marketing graphics"
                        className="marketing-image"
                        fluid
                    />
                </div>
            </div>
        </Container>
    );
};

export default OfflineMarketing;
