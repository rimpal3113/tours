// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    rating: 5,
    text: `"Atithi Tours made our honeymoon unforgettable. Every detail was perfectly planned, and the guides were exceptional!"`,
  },
  {
    name: "Michael Chen",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    rating: 5,
    text: `"The Himalayan trek exceeded all expectations. Professional, safe, and absolutely breathtaking!"`,
  },
  {
    name: "Emma Davis",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    rating: 5,
    text: `"From booking to return, everything was seamless. Atithi Tours truly cares about their customers."`,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from real adventurers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
