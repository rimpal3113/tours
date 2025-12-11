// src/components/ContactHero.jsx
import React from "react";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            "Namaste! Ready to discover India's magic? Our experts are here to craft your perfect Indian adventure."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
