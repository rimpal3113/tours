import db from "../config/db.js";

/* =========================
   CREATE BOOKING
========================= */
export const createBookingModel = (data, callback) => {
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
      meal_plan,
      hotel_policy,
      cancellation_policy,
      note
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  const values = [
    new Date().toISOString().slice(0, 10),
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
    data.hotel_policy,
    data.cancellation_policy,
    data.note,
  ];

  db.query(sql, values, callback);
};

/* =========================
   GET ALL BOOKINGS
========================= */
export const getAllBookingsModel = (callback) => {
  const sql = `SELECT * FROM hotel_bookings ORDER BY hbook_id DESC`;
  db.query(sql, callback);
};

/* =========================
   UPDATE EXTRA DETAILS
========================= */
export const updateExtraDetailsModel = (hbook_id, extra, callback) => {
  const sql = `
    UPDATE hotel_bookings SET
      inclusions = ?,
      exclusions = ?,
      total_cost = ?,
      advance_paid = ?,
      balance = ?,
      notee = ?
    WHERE hbook_id = ?
  `;

  const values = [
    extra.inclusions,
    extra.exclusions,
    extra.total_cost,
    extra.advance_paid,
    extra.balance,
    extra.note,
    hbook_id,
  ];

  db.query(sql, values, callback);
};
