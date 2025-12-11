// WhyChoose.jsx
import React from "react";

const features = [
  {
    title: "Safe & Secure",
    desc: "Your safety is our top priority with 24/7 support and insured tours.",
    icon: "fas fa-shield-alt",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Expert Guides",
    desc: "Travel with experienced local guides who know every destination intimately.",
    icon: "fas fa-users",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Premium Experience",
    desc: "Enjoy luxury accommodations and exclusive access to premium experiences.",
    icon: "fas fa-star",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Personalized Service",
    desc: "Customized itineraries tailored to your preferences and interests.",
    icon: "fas fa-heart",
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Atithi Tours?
          </h2>
          <p className="text-gray-600 text-lg">
            We're committed to making your travel dreams come true
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className={`${feature.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className={`${feature.icon} text-2xl ${feature.color}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
