import React from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Service";
import Contact from "../components/Home/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Appointment from "../components/Home/Appointment";
import FAQCarousel from "../components/Home/Faq";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Appointment />
      <FAQCarousel />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
