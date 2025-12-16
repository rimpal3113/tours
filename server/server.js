import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import packageRoutes from "./routes/packageRoutes.js";
import dashboardRoutes from "./routes/fordashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import contactRoutes from "./routes/ContactRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/admin", adminRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
