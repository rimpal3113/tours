import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaHotel,
  FaUtensils,
  FaPlane,
  FaCamera,
  FaCar,
  FaPassport,
  FaUserTie,
  FaStar,
} from "react-icons/fa";

/* PACKAGE ICON OPTIONS */
const PACKAGE_FEATURES = [
  { key: "hotel", label: "Hotel", icon: <FaHotel /> },
  { key: "meals", label: "Meals", icon: <FaUtensils /> },
  { key: "flights", label: "Flights", icon: <FaPlane /> },
  { key: "sightseeing", label: "Sightseeing", icon: <FaCamera /> },
  { key: "transfer", label: "Transfer", icon: <FaCar /> },
  { key: "visa", label: "Visa", icon: <FaPassport /> },
  { key: "tourManager", label: "Tour Manager", icon: <FaUserTie /> },
  { key: "highlights", label: "Highlights", icon: <FaStar /> },
];

export default function AddPackages({ onPackageAdded }) {
  const [packageName, setPackageName] = useState("");
  const [days, setDays] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState([]); // 👈 ICON FEATURES
  const [loading, setLoading] = useState(false);

  /* IMAGE PREVIEW */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  /* TOGGLE ICON */
  const toggleFeature = (key) => {
    setFeatures((prev) =>
      prev.includes(key)
        ? prev.filter((f) => f !== key)
        : [...prev, key]
    );
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("packageName", packageName);
    formData.append("days", days);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", imageFile);
    features.forEach((f) => formData.append("features[]", f));


    fetch("http://localhost:5000/api/packages/add", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        alert("Package Added Successfully!");

        setPackageName("");
        setDays("");
        setDescription("");
        setPrice("");
        setImageFile(null);
        setImagePreview(null);
        setFeatures([]);

        onPackageAdded && onPackageAdded();
      })
      .catch(() => alert("Failed to add package"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Add New Package
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto space-y-6"
      >
        {/* PACKAGE NAME */}
        <div>
          <label className="block mb-2">Package Title</label>
          <input
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block mb-2">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          {imagePreview && (
            <img src={imagePreview} className="mt-3 h-56 w-full object-cover rounded" />
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-2">Short Description</label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* DAYS */}
        <div>
          <label className="block mb-2 flex items-center gap-2">
            <FaCalendarAlt /> Days
          </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block mb-2">Price (₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* ICON FEATURES */}
        <div>
          <label className="block mb-3 font-semibold">Package Includes</label>
          <div className="grid grid-cols-4 gap-4">
            {PACKAGE_FEATURES.map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => toggleFeature(item.key)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-1 transition
                  ${
                    features.includes(item.key)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Add Package"}
        </button>
      </form>
    </div>
  );
}
