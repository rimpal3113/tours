import db from "../config/db.js";

export const saveContactMessage = (data) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO contact_messages 
      (first_name, last_name, email, phone, subject, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [data.firstName, data.lastName, data.email, data.phone, data.subject, data.message],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

export const getAllMessages = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM contact_messages ORDER BY id DESC", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
