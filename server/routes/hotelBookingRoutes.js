import express from "express";
import { createBooking } from "../controllers/hotelBookingController.js";

const router = express.Router();

// POST /api/hotel-booking
router.post("/", createBooking);

export default router;
