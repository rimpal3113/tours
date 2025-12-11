// src/components/CTA.jsx
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Contact our travel experts today to customize your perfect journey
        </p>
        <a
          href="contact.html"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-block"
        >
          Get Your Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTA;
