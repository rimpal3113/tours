import express from "express";
import { createBooking,getAllBookings ,updateBooking,deleteBooking} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getAllBookings);
router.put("/:id", updateBooking);       // for editing
router.delete("/:id", deleteBooking);    // for deleting
export default router;
