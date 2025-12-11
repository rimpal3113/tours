import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tours",
});

db.connect((err) => {
  if (err) console.log("DB Connection Error:", err);
  else console.log("MySQL Connected Successfully");
});

export default db;
