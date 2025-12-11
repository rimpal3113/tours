import React, { useEffect, useState } from "react";

const ToursGrid = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/packages")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.log("Fetch Error:", err));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.length === 0 && (
            <p className="text-center text-gray-600 text-lg">
              No packages found. Please add packages.
            </p>
          )}

          {tours.map((tour) => (
            <div
              key={tour.pack_id} // Use pack_id as unique key
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={`http://localhost:5000/uploads/${tour.pack_img}`}
                  alt={tour.pack_img}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.total_days} Days
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {tour.pack_name}
                </h3>
                <p className="text-gray-600 mb-4">{tour.pack_desc}</p>

                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar text-gray-400 mr-2"></i>
                  <span className="text-sm text-gray-600">{tour.total_days} Days</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ₹{tour.pack_price}
                    </span>
                    <span className="text-sm text-gray-500"> per person</span>
                  </div>

                 
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ToursGrid;
