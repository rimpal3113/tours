import db from "../config/db.js";

// Create a new booking
export const createBooking = (req, res) => {
  console.log("BODY RECEIVED:", req.body); // Debug frontend payload

  const { pack_id, members, price_per_person, total_price, desc_txt } = req.body;

  // Validation
  if (!pack_id || !members || !price_per_person || !total_price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `
    INSERT INTO booking
    (pack_id, members, price_per_person, total_price, desc_txt)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [pack_id, members, price_per_person, total_price, desc_txt],
    (err, result) => {
      if (err) {
        console.error("BOOKING ERROR:", err);
        return res.status(500).json({
          message: "Database error",
          error: err.sqlMessage,
        });
      }

      res.status(201).json({
        message: "Booking successful",
        booking_id: result.insertId,
      });
    }
  );
};

export const getAllBookings = (req, res) => {
  const sql = `
    SELECT 
        b.book_id  ,b.pack_id, b.members, b.price_per_person, b.total_price, b.desc_txt,
      p.pack_name, p.pack_price, p.pack_desc, p.pack_img, p.total_days
    FROM booking b
    JOIN package_details p ON b.pack_id = p.pack_id
    ORDER BY b.book_id DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("FETCH BOOKINGS ERROR:", err);
      return res.status(500).json({ message: "Failed to fetch bookings", error: err.sqlMessage });
    }

    res.json(results); // Array of bookings with package info
  });
};



// Update a booking
export const updateBooking = (req, res) => {
  const { book_id } = req.params;
  const { members, price_per_person, desc_txt } = req.body;

  // Validate input
  if (!members || !price_per_person || desc_txt === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Example discount logic:
  // 5% discount for 5-9 members, 10% for 10+ members
  let discount = 0;
  if (members >= 5 && members < 10) discount = 0.05;
  else if (members >= 10) discount = 0.1;

  const total_price = members * price_per_person * (1 - discount);

  const sql = `
    UPDATE booking
    SET members = ?, price_per_person = ?, total_price = ?, desc_txt = ?
    WHERE book_id = ?
  `;

  db.query(
    sql,
    [members, price_per_person, total_price, desc_txt, book_id],
    (err, result) => {
      if (err) {
        console.error("UPDATE BOOKING ERROR:", err);
        return res
          .status(500)
          .json({ message: "Database error", error: err.sqlMessage });
      }

      res.json({
        message: "Booking updated successfully",
        updatedBooking: {
          book_id,
          members,
          price_per_person,
          total_price,
          desc_txt,
        },
      });
    }
  );
};

// Delete a booking
export const deleteBooking = (req, res) => {
  const { book_id } = req.params;

  const sql = `DELETE FROM booking WHERE book_id = ?`;

  db.query(sql, [book_id], (err, result) => {
    if (err) {
      console.error("DELETE BOOKING ERROR:", err);
      return res.status(500).json({ message: "Database error", error: err.sqlMessage });
    }

    res.json({ message: "Booking deleted successfully" });
  });
};


