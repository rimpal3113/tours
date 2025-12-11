import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  business_name: String,
  email: String,
});

export default mongoose.model("Vendor", vendorSchema);
