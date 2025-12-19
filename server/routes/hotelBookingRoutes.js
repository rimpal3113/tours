import express from "express";
import { createBooking,getAllBookings} from "../controllers/hotelBookingController.js";

const router = express.Router();

// POST /api/hotel-booking
router.post("/", createBooking);
router.get("/", getAllBookings);


export default router;
