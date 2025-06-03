import React from "react";
import Header from "../components/Header";
import About from "../components/About/About";
import AboutHero from "../components/About/AboutHero";
import Experience from "../components/About/Experience";
import AboutSummary from "../components/About/AboutSummary";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
// import Appointment from '../components/Home/Appointment';

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <About />
      <Experience />
      <AboutSummary />
      <Footer />
      <Copyright />
    </>
  );
};

export default AboutPage;
