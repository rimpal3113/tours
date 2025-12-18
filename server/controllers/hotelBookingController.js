import db from "../config/db.js"; 

// Create a new booking
export const createBooking = (req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO hotel_bookings (
      booking_date_created,
      guest_name,
      location,
      hotel_name,
      hotel_address,
      hotel_phone,
      booking_pnr,
      booking_date,
      room_category,
      no_of_pax,
      no_of_rooms,
      check_in_date,
      check_out_date,
      check_in_time,
      check_out_time,
      no_of_nights,
      meal_plan
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  const values = [
    new Date().toISOString().slice(0, 10), // booking_date_created
    data.guest_name,
    data.location,
    data.hotel_name,
    data.hotel_address,
    data.hotel_phone,
    data.booking_pnr,
    data.booking_date,
    data.room_category,
    Number(data.no_of_pax),
    Number(data.no_of_rooms),
    data.check_in_date,
    data.check_out_date,
    data.check_in_time,
    data.check_out_time,
    Number(data.no_of_nights),
    data.meal_plan,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error saving booking:", err);
      return res.status(500).json({ error: "Failed to save booking" });
    }
    res.status(201).json({ id: result.insertId });
  });
};
