// src/pages/Services.js
import React from "react";
import Navigation from "../components/Navbar";
import OfflineMarketing from "../components/ServiceSection/OfflineMarketing";
import AdvertisementSection from "../components/ServiceSection/AdvertisementSection";

function Services() {
  return (

    <>
      <Navigation />
      {/* <div className="container mt-5 pt-5">
        <h1>Our Services</h1>
        <p>Here is a list of the services we offer.</p>
      </div> */}
      <OfflineMarketing />

      <AdvertisementSection />
    </>
  );
}

export default Services;
