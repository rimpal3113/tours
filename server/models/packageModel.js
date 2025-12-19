import db from "../config/db.js";

/* =========================
   ADD PACKAGE
========================= */
export const addPackageModel = (data, callback) => {
  const sql = `
    INSERT INTO package_details 
    (pack_name, total_days, pack_desc, pack_price, pack_img, pack_features)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.pack_name,
      data.total_days,
      data.pack_desc,
      data.pack_price,
      data.pack_img,
      data.pack_features,
    ],
    callback
  );
};

/* =========================
   GET PACKAGES
========================= */
export const getPackagesModel = (callback) => {
  db.query("SELECT * FROM package_details ORDER BY pack_id DESC", callback);
};

/* =========================
   UPDATE PACKAGE
========================= */
export const updatePackageModel = (id, data, callback) => {
  const sql = `
    UPDATE package_details 
    SET pack_name=?, total_days=?, pack_desc=?, pack_price=?, pack_img=?, pack_features=?
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
      data.pack_features,
      id,
    ],
    callback
  );
};

/* =========================
   DELETE PACKAGE
========================= */
export const deletePackageModel = (id, callback) => {
  db.query("DELETE FROM package_details WHERE pack_id=?", [id], callback);
};
