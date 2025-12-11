// src/components/Stats.jsx
import React from "react";

const statsData = [
  { value: "50,000+", label: "Happy Travelers" },
  { value: "150+", label: "Destinations" },
  { value: "500+", label: "Tours Completed" },
  { value: "4.9/5", label: "Average Rating" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
