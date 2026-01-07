import db from "./config/db.js"; // import your existing db.js
import bcrypt from "bcrypt";

// Admin credentials
const email = "adminexample@gmail.com";
const plainPassword = "Admin@1234";

// Hash the password
bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
  if (err) throw err;

  // Insert into admin table
  db.query(
    "INSERT INTO admin (email, password) VALUES (?, ?)",
    [email, hashedPassword],
    (err, result) => {
      if (err) console.log("Error inserting admin:", err);
      else console.log("Admin inserted successfully!");
      db.end(); // close connection after insert
    }
  );
});
