import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaHotel,
} from "react-icons/fa";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPackages: 0,
    totalBookings: 0,
    totalHotelBookings: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats);
        }
      })
      .catch((err) => console.log("Error fetching stats:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-3">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Total Packages */}
        <div className="flex items-center p-6 rounded-xl shadow-lg bg-blue-600 text-white hover:scale-105 transition">
          <FaBoxOpen size={36} className="mr-4" />
          <div>
            <h2 className="text-3xl font-bold">{stats.totalPackages}</h2>
            <p className="text-sm opacity-90">Total Packages</p>
          </div>
        </div>

        {/* Total Bookings */}
        <div className="flex items-center p-6 rounded-xl shadow-lg bg-green-600 text-white hover:scale-105 transition">
          <FaClipboardList size={36} className="mr-4" />
          <div>
            <h2 className="text-3xl font-bold">{stats.totalBookings}</h2>
            <p className="text-sm opacity-90">Total Bookings</p>
          </div>
        </div>

        {/* Total Hotel Bookings */}
        <div className="flex items-center p-6 rounded-xl shadow-lg bg-purple-600 text-white hover:scale-105 transition">
          <FaHotel size={36} className="mr-4" />
          <div>
            <h2 className="text-3xl font-bold">
              {stats.totalHotelBookings}
            </h2>
            <p className="text-sm opacity-90">
              Total Hotel Bookings
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
