// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  guest_name: String,
  location: String,
  hotel_name: String,
  hotel_address: String,
  hotel_phone: String,
  booking_pnr: String,
  booking_date: String,
  room_category: String,
  no_of_pax: Number,
  no_of_rooms: Number,
  check_in_date: String,
  check_out_date: String,
  check_in_time: String,
  check_out_time: String,
  no_of_nights: Number,
  meal_plan: String,
  hotel_policy: String,
  cancellation_policy: String,
  note: String,
});

export default mongoose.model("Booking", bookingSchema);
