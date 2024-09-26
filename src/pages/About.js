// src/pages/About.js
import React from "react";
import AboutUsSection from "../components/AboutSection/AboutUsSection";
import '../components/AboutSection/about.css';
import InfoSection from "../components/AboutSection/InfoSection";
import StatsSection from "../components/AboutSection/StatsSection";
import ExpertiseSection from "../components/AboutSection/ExpertiseSection";
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

function About() {
    // const location = useLocation(); // Get the current location

    // useEffect(() => {
    //     // Extract the last part of the pathname, replace dashes with spaces, and capitalize the first letter
    //     const path = location.pathname.split('/').filter(Boolean).pop();
    //     const pageTitle = path
    //         ? path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    //         : 'Home'; // Default to 'Home' if no path is found
    //     document.title = pageTitle; // Set the page title dynamically
    // }, [location]);

    return (
        <>
            <AboutUsSection />
            {/* <div className="container mt-5 pt-5">
                <h1>About Us</h1>
                <p>Welcome to the About Us page.</p>
            </div> */}
            <InfoSection />

            <StatsSection />



            <ExpertiseSection />

        </>
    );
}

export default About;
