import db from "../config/db.js";

export const submitContact = (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  const sql = `INSERT INTO contact (first_Name, last_Name, con_email, con_phone, con_subject, con_message) 
               VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [firstName, lastName, email, phone, subject, message], (err) => {
    if (err) return res.status(500).json({ message: "Database Error" });

    res.status(200).json({ message: "Message Submitted Successfully" });
  });
};
export const getAllContacts = (req, res) => {
  const sql = "SELECT * FROM contact";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "Database Error" });

    const formatted = results.map(row => ({
      id: row.con_id,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.con_email,
      phone: row.con_phone,
      subject: row.con_subject,
      message: row.con_message,
    }));

    res.status(200).json(formatted);
  });
};

