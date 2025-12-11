// src/components/Faq.jsx
import React from "react";

const Faq = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Quick answers to common questions about our tours and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How far in advance should I book my tour?
            </h3>
            <p className="text-gray-600">
              We recommend booking at least 3-6 months in advance for popular
              destinations, especially during peak seasons. However, we can
              often accommodate last-minute bookings for certain tours.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What is included in the tour price?
            </h3>
            <p className="text-gray-600">
              Our tour prices typically include accommodations, transportation,
              guided activities, entrance fees, and meals as specified. Any
              optional activities or personal expenses are not included.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Can I customize my tour itinerary?
            </h3>
            <p className="text-gray-600">
              Absolutely! We specialize in creating personalized experiences.
              Contact our team to discuss your preferences, interests, and
              budget for a custom-tailored adventure.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What about travel insurance?
            </h3>
            <p className="text-gray-600">
              We strongly recommend comprehensive travel insurance for all our
              tours. We can help arrange suitable coverage that includes trip
              cancellation, medical emergencies, and adventure activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
