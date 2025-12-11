import db from "../config/db.js";

export const findAdminByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM admin WHERE email = ? LIMIT 1",
      [email],
      (err, results) => {
        if (err) reject(err);
        else resolve(results.length > 0 ? results[0] : null);
      }
    );
  });
};
