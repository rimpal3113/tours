// src/components/CoreValues.jsx
import React from "react";

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These principles guide everything we do and shape the experiences we
            create for our travelers.
          </p>
        </div>

        {/* Core Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-heart text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Passion for Travel</h3>
            <p className="text-gray-600">
              We believe travel has the power to transform lives, broaden perspectives, and create lasting connections.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-shield-alt text-2xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Safety First</h3>
            <p className="text-gray-600">
              Your safety and well-being are our top priorities. We maintain the highest safety standards across all our operations.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-leaf text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Travel</h3>
            <p className="text-gray-600">
              We are committed to responsible tourism that respects local communities and preserves natural environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
