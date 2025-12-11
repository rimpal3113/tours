// src/components/OurStory.jsx
import React from "react";

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Founded in 2010 by a group of passionate travelers from diverse Indian
              backgrounds, Atithi Tours began with a simple mission: to showcase India's
              incredible diversity and rich cultural heritage to the world.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              "Atithi" means "guest" in Sanskrit, embodying India's ancient tradition of
              hospitality where guests are treated as divine. This philosophy guides every
              aspect of our operations, ensuring authentic, respectful, and memorable experiences.
            </p>
            <p className="text-gray-600 text-lg">
              Today, we specialize in crafting personalized journeys across India's
              magnificent landscapes - from the snow-capped Himalayas to pristine beaches,
              ancient temples to vibrant cities. Our expert team of local guides, cultural
              specialists, and travel consultants work tirelessly to create extraordinary
              experiences that connect travelers with India's soul.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
              alt="Travel team"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">14+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
