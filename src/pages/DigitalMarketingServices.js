import React from 'react'
import AboutUsSection from '../components/AboutSection/AboutUsSection'
import InfoSection from '../components/AboutSection/InfoSection'
import StatsSection from '../components/AboutSection/StatsSection'
import ExpertiseSection from '../components/AboutSection/ExpertiseSection'
import '../components/AboutSection/about.css';



function DigitalMarketingServices() {
    return (
        <div>
            <AboutUsSection />
            {/* <div className="container mt-5 pt-5">
                <h1>About Us</h1>
                <p>Welcome to the About Us page.</p>
            </div> */}
            <InfoSection />

            <StatsSection />



            <ExpertiseSection />


        </div>
    )
}

export default DigitalMarketingServices
