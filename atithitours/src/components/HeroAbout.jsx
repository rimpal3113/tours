// src/components/HeroAbout.jsx
import React from "react";

const HeroAbout = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Atithi Tours
          </h1>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            "Atithi Devo Bhava" - Guest is God. Since 2010, we've been
            showcasing India's incredible diversity through authentic travel
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
