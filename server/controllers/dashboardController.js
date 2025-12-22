import db from "../config/db.js";

export const getDashboardStats = (req, res) => {
  const query = `
    SELECT
      (SELECT COUNT(*) FROM package_details) AS totalPackages,
      (SELECT COUNT(*) FROM booking) AS totalBookings,
      (SELECT COUNT(*) FROM hotel_bookings) AS totalHotelBookings
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log("Dashboard Error:", err);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }

    console.log("Dashboard Stats:", result[0]); // 👈 DEBUG

    res.json({
      success: true,
      stats: result[0],
    });
  });
};
