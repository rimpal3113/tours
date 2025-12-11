import db from "../config/db.js";

export const addPackageModel = (data, callback) => {
  const sql = `
    INSERT INTO package_details 
    (pack_name, total_days, pack_desc, pack_price, pack_img)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [data.pack_name, data.total_days, data.pack_desc, data.pack_price, data.pack_img],
    callback
  );
};

export const getPackagesModel = (callback) => {
  db.query("SELECT * FROM package_details ORDER BY pack_id DESC", callback);
};

export const updatePackageModel = (id, data, callback) => {
  const sql = `
    UPDATE package_details 
    SET pack_name=?, total_days=?, pack_desc=?, pack_price=?, pack_img=?
    WHERE pack_id=?
  `;

  db.query(
    sql,
    [
      data.pack_name,
      data.total_days,
      data.pack_desc,
      data.pack_price,
      data.pack_img,
      id,
    ],
    callback
  );
};

export const deletePackageModel = (id, callback) => {
  db.query("DELETE FROM package_details WHERE pack_id=?", [id], callback);
};
