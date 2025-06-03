import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright'
import ServiceSection1 from '../components/services/ServiceSection1';
import ServiceSection2 from '../components/services/ServiceSection2';
import Appointment from '../components/services/Appointment';
import ServiceHoursSection from '../components/services/ServiceHourSection';
// Add more as you create additional sections

const Service = () => {
  return (
    <>
      <Header />
      <ServiceSection1 />
      <ServiceSection2 />
      <Appointment/>
      <ServiceHoursSection/>
      {/* More sections like <ServiceSection3 /> */}
      <Footer />
      <Copyright/>
    </>
  );
};

export default Service;
