import React, { useEffect, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";

const Dashboard = () => {
  const [totalPackages, setTotalPackages] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTotalPackages(data.stats.totalPackages);
        }
      })
      .catch((err) => console.log("Error fetching stats:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center p-6 rounded-xl shadow-lg bg-blue-500 text-white transition transform hover:scale-105">
          <div className="mr-4">
            <FaBoxOpen size={30} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{totalPackages}</h2>
            <p className="text-sm">Total Packages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
