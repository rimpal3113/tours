import db from "../config/db.js"; // your MySQL connection

export const getDashboardStats = (req, res) => {
  const query = "SELECT COUNT(*) AS totalPackages FROM package_details";

  db.query(query, (err, result) => {
    if (err) {
      console.log("Dashboard Error:", err);
      return res.status(500).json({ success: false, message: "Server Error" });
    }

    const totalPackages = result[0].totalPackages;

    res.json({
      success: true,
      stats: {
        totalPackages,
      },
    });
  });
};
