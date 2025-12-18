import React, { useEffect, useState } from "react";

const Destination = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        const data = await res.json();
        setBookings(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Skeleton loader for loading state
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl p-6 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Booked Packages
          </h2>
          <p className="text-gray-600">All booked packages</p>
        </div>

        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {!loading && bookings.length === 0 && (
          <p className="text-center text-gray-500">No bookings found</p>
        )}

        {!loading && bookings.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {bookings.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                {book.pack_img && (
                  <img
                    src={`http://localhost:5000/uploads/${book.pack_img}`}
                    alt={book.pack_name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                <h3 className="text-xl font-bold mb-2">{book.pack_name}</h3>

                <div className="space-y-2 text-gray-700">
                 
                  <p>
                    <span className="font-semibold">Price / Person:</span> ₹{book.pack_price}
                  </p>
                  
                </div>

                <div className="mt-4">
                  <p className="font-semibold">Description</p>
                  <p>{book.desc_txt}</p>
                </div>

                <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mt-4">
                  Booked
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Destination;
