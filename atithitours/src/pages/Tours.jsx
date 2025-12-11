import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTours from "../components/HeroTours";
import ToursGrid from "../components/ToursGrid";
import CTA from "../components/CTA";


const Tours = () => {
  return (
    <>
      <Navbar />
      <HeroTours/>
      <ToursGrid/>
      <CTA/>
      <Footer />
    </>
  );
};

export default Tours;
