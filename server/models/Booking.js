import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  packageId: mongoose.Schema.Types.ObjectId,
  date: Date,
});

export default mongoose.model("Booking", bookingSchema);
