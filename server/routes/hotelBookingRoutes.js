import express from "express";
import {
  createBooking,
  getAllBookings,
  updateExtraDetails,
} from "../controllers/hotelBookingController.js";

const router = express.Router();

// POST → create booking
router.post("/", createBooking);

// GET → fetch all bookings
router.get("/", getAllBookings);

// PUT → save admin extra fields
router.put("/:hbook_id/extra", updateExtraDetails);

export default router;
