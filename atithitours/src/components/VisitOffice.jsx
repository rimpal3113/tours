// src/components/VisitOffice.jsx
import React from "react";

const VisitOffice = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-lg">
            Located in the heart of Adventure City, we're easily accessible for consultations.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Interactive Map
              </h3>
              <p className="text-gray-500">
                Map integration would be added here in a real implementation
              </p>
              <p className="text-sm text-gray-400 mt-2">
                123 Travel Street, Adventure City, AC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitOffice;
