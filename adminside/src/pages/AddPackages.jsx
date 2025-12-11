import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function AddPackages({ onPackageAdded }) {
  const [packageName, setPackageName] = useState("");
  const [days, setDays] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);

  // ---------------- IMAGE PREVIEW ----------------
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // ---------------- SUBMIT PACKAGE ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("packageName", packageName);
    formData.append("days", days);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", imageFile);

    fetch("http://localhost:5000/api/packages/add", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);
        alert("Package Added Successfully!");

        // Reset Form
        setPackageName("");
        setDays("");
        setDescription("");
        setPrice("");
        setImageFile(null);
        setImagePreview(null);

        // If parent wants to refresh package list
        if (onPackageAdded) {
          onPackageAdded();
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Failed to add package");
      })
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
        {/* Package Name */}
        <div>
          <label className="block text-gray-700 mb-2">Package Title</label>
          <input
            type="text"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter package name"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full h-60 object-cover rounded-lg shadow"
            />
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-2">
            Short Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter short description"
          ></textarea>
        </div>

        {/* Days */}
        <div>
          <label className="block text-gray-700 mb-2 flex items-center gap-2">
            <FaCalendarAlt /> Days
          </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter days"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 mb-2">Price (₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {loading ? "Uploading..." : "Add Package"}
        </button>
      </form>
    </div>
  );
}
