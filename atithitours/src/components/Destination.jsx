// Destination.jsx
import React from "react";

const destinations = [
  {
    title: "Manali Paradise",
    desc: "Experience breathtaking Himalayan beauty with adventure sports and serene valleys in Manali.",
    price: "₹24,999",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    link: "tours.html",
  },
  {
    title: "Goa Beach Paradise",
    desc: "Relax on pristine beaches, enjoy water sports, and experience vibrant nightlife in Goa.",
    price: "₹22,999",
    img: "https://images.unsplash.com/photo-1464822759844-d150f39ac1ac?w=400&h=250&fit=crop",
    link: "tours.html",
  },
  {
    title: "Haridwar Spiritual Journey",
    desc: "Witness sacred Ganga Aarti, visit ancient temples, and find spiritual peace in Haridwar.",
    price: "₹15,999",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
    link: "tours.html",
  },
];

const Destination = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our handpicked collection of extraordinary destinations around the world
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 animate-fade-in"
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dest.title}</h3>
                <p className="text-gray-600 mb-4">{dest.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{dest.price}</span>
                  <a
                    href={dest.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
