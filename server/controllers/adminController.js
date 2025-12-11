import { findAdminByEmail } from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await findAdminByEmail(email);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check hashed OR plain password
    const isPasswordMatch =
      admin.password === password ||
      (await bcrypt.compare(password, admin.password));

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: admin.admin_id, role: "admin" },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login Successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
