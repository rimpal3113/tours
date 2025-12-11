import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";
import OurStory from "../components/OurStory";
import CoreValues from "../components/CoreValues";
import MeetTeam from "../components/MeetTeam";
import Stats from "../components/Stats";


const About = () => {
  return (
    <>
      <Navbar />
      <HeroAbout/>
      <OurStory/>
      <CoreValues/>
      <MeetTeam/>
      <Stats/>
      <Footer />
    </>
  );
};

export default About;
