import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyrights from '../components/Copyright';
import BookAppointment from '../components/contact/BookAppointment';
import ContactCards from '../components/contact/ContactCards';
import ConsultationInfo from '../components/contact/ConsultationInfo';
import Appointment from '../components/services/Appointment';

const Contact = () => {
  return (
    <>
      <Header />
        <BookAppointment />
        <ContactCards/>
        <Appointment/>
        <ConsultationInfo/>
      <Footer />
       <Copyrights />
    </>
  );
};

export default Contact;
