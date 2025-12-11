import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import VisitOffice from "../components/VisitOffice";
import Faq from "../components/Faq";


const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero/>
      <ContactForm/>
      <VisitOffice/>
      <Faq/>
      <Footer />
    </>
  );
};

export default Contact;
