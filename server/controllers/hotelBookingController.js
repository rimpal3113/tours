import {
  createBookingModel,
  getAllBookingsModel,
  updateExtraDetailsModel,
} from "../models/hotelBooking.js";

/* =========================
   CREATE BOOKING
========================= */
export const createBooking = (req, res) => {
  const data = req.body;

  createBookingModel(data, (err, result) => {
    if (err) {
      console.error("Error saving booking:", err);
      return res.status(500).json({ error: "Failed to save booking" });
    }
    res.status(201).json({ message: "Booking saved successfully", hbook_id: result.insertId });
  });
};

/* =========================
   GET ALL BOOKINGS
========================= */
export const getAllBookings = (req, res) => {
  getAllBookingsModel((err, results) => {
    if (err) {
      console.error("Error fetching bookings:", err);
      return res.status(500).json({ error: "Failed to fetch bookings" });
    }
    res.json(results);
  });
};

/* =========================
   UPDATE EXTRA DETAILS
========================= */
export const updateExtraDetails = (req, res) => {
  const hbook_id = req.params.hbook_id;
  const extra = req.body;

  updateExtraDetailsModel(hbook_id, extra, (err, result) => {
    if (err) {
      console.error("Error updating extra details:", err);
      return res.status(500).json({ error: "Failed to update extra details" });
    }
    res.json({ message: "Extra details updated successfully" });
  });
};
