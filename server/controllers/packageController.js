import {
  addPackageModel,
  getPackagesModel,
  updatePackageModel,
  deletePackageModel,
} from "../models/packageModel.js";

/* =======================
   ADD PACKAGE
======================= */
export const addPackage = (req, res) => {
  const { packageName, days, description, price } = req.body;

  const features = Array.isArray(req.body.features)
    ? req.body.features.map(f => f.trim()).join(",")
    : req.body.features || "";

  const image = req.file ? req.file.filename : null;

  if (!image) {
    return res.json({ status: "error", message: "Image is required" });
  }

  const data = {
    pack_name: packageName,
    total_days: days,
    pack_desc: description,
    pack_price: price,
    pack_img: image,
    pack_features: features,
  };

  addPackageModel(data, (err, result) => {
    if (err) {
      console.error("DB ERROR:", err);
      return res.json({ status: "error", message: err });
    }

    res.json({
      status: "success",
      message: "Package added",
      packageId: result.insertId,
    });
  });
};

/* =======================
   GET PACKAGES
======================= */
export const getPackages = (req, res) => {
  getPackagesModel((err, result) => {
    if (err) return res.json({ status: "error", message: err });
    res.json(result);
  });
};

/* =======================
   UPDATE PACKAGE
======================= */
export const updatePackage = (req, res) => {
  const pack_id = req.params.id;

  const image = req.file ? req.file.filename : req.body.old_img;

  const features = Array.isArray(req.body.features)
    ? req.body.features.map(f => f.trim()).join(",")
    : req.body.features || "";

  const data = {
    pack_name: req.body.pack_name,
    total_days: req.body.total_days,
    pack_desc: req.body.pack_desc,
    pack_price: req.body.pack_price,
    pack_img: image,
    pack_features: features,
  };

  updatePackageModel(pack_id, data, (err) => {
    if (err) return res.json({ status: "error", message: err });

    res.json({ status: "success", message: "Package updated" });
  });
};

/* =======================
   DELETE PACKAGE
======================= */
export const deletePackage = (req, res) => {
  const id = req.params.id;

  deletePackageModel(id, (err) => {
    if (err) return res.json({ status: "error", message: err });

    res.json({ status: "success", message: "Package deleted" });
  });
};
