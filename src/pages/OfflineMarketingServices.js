import React from 'react'
import Navigation from '../components/Navbar';
import OfflineMarketing from '../components/ServiceSection/OfflineMarketing';
import AdvertisementSection from '../components/ServiceSection/AdvertisementSection';
import LookingWithContactBtn from '../components/HomeSections/LookingWithContactBtn';
import ExpertiseSection from '../components/AboutSection/ExpertiseSection';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

const OfflineMarketingServices = () => {
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
        <div>
            <Navigation />

            <OfflineMarketing />

            <AdvertisementSection />

            <LookingWithContactBtn />

            <ExpertiseSection />
        </div>
    )
}

export default OfflineMarketingServices
