import React, { useEffect, useState } from "react";
import {
  FaHotel,
  FaUtensils,
  FaCar,
  FaUserTie,
  FaMapMarkedAlt,
} from "react-icons/fa";

const ToursGrid = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/packages")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.log("Fetch Error:", err));
  }, []);

  // 🔹 FEATURE → ICON + COLOR MAP
  const featureIcons = {
    hotel: {
      icon: <FaHotel />,
      bg: "bg-pink-500",
      label: "Hotel",
    },
    meals: {
      icon: <FaUtensils />,
      bg: "bg-orange-500",
      label: "Meals",
    },
    transfer: {
      icon: <FaCar />,
      bg: "bg-yellow-400",
      label: "Transfer",
    },
    sightseeing: {
      icon: <FaMapMarkedAlt />,
      bg: "bg-purple-500",
      label: "Sightseeing",
    },
    guide: {
      icon: <FaUserTie />,
      bg: "bg-blue-500",
      label: "Guide",
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => {
            const featuresArray = tour.pack_features
              ? tour.pack_features
                  .split(",")
                  .map((f) => f.trim().toLowerCase())
                  .filter((f) => featureIcons[f])
              : [];

            return (
              <div
                key={tour.pack_id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={`http://localhost:5000/uploads/${tour.pack_img}`}
                  alt={tour.pack_name}
                  className="w-full h-48 object-cover"
                />

 {/* ✅ CIRCULAR ICON FEATURES */}
 {featuresArray.length > 0 && (
                    <div className="flex gap-4 mb-4 mt-6 ml-6">
                      {featuresArray.map((feature, index) => {
                        const item = featureIcons[feature];
                        return (
                          <div
                            key={index}
                            title={item.label}
                            className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${item.bg}`}
                          >
                            {item.icon}
                          </div>
                        );
                      })}
                    </div>
                  )}





                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.pack_name}
                  </h3>

                  <p className="text-gray-600 mb-4">{tour.pack_desc}</p>

                
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{tour.pack_price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {tour.total_days} Days
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ToursGrid;
