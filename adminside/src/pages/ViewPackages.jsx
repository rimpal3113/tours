import React, { useState, useEffect } from "react";

export default function ViewPackages() {
  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    pack_name: "",
    total_days: "",
    pack_desc: "",
    pack_price: "",
    pack_img: "",
    imageFile: null,
    previewImage: "",
  });

  // Fetch packages from backend (UPDATED URL)
  useEffect(() => {
    fetch("http://localhost:5000/api/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((err) => console.log("Fetch Error:", err));
  }, []);

  // Start editing a package
  const handleEditClick = (pkg) => {
    setEditingId(pkg.pack_id);
    setEditFormData({
      pack_name: pkg.pack_name,
      total_days: pkg.total_days,
      pack_desc: pkg.pack_desc,
      pack_price: pkg.pack_price,
      pack_img: pkg.pack_img,
      imageFile: null,
      previewImage: `http://localhost:5000/uploads/${pkg.pack_img}`,
    });
  };

  // Handle input change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditFormData({
        ...editFormData,
        imageFile: file,
        previewImage: URL.createObjectURL(file),
      });
    }
  };

  // Save updated package (UPDATED URL)
  const handleEditSave = async (pack_id) => {
    const formData = new FormData();
    formData.append("pack_name", editFormData.pack_name);
    formData.append("total_days", editFormData.total_days);
    formData.append("pack_desc", editFormData.pack_desc);
    formData.append("pack_price", editFormData.pack_price);

    if (editFormData.imageFile) {
      formData.append("pack_img", editFormData.imageFile);
    }

    const res = await fetch(`http://localhost:5000/api/packages/${pack_id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      alert("Package updated successfully!");

      setPackages(
        packages.map((pkg) =>
          pkg.pack_id === pack_id
            ? {
                ...pkg,
                pack_name: editFormData.pack_name,
                total_days: editFormData.total_days,
                pack_desc: editFormData.pack_desc,
                pack_price: editFormData.pack_price,
                pack_img: editFormData.imageFile
                  ? editFormData.imageFile.name
                  : pkg.pack_img,
              }
            : pkg
        )
      );

      setEditingId(null);
    }
  };

  // Delete package (UPDATED URL)
  const handleDelete = async (pack_id) => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;

    const res = await fetch(
      `http://localhost:5000/api/packages/${pack_id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      alert("Package deleted!");
      setPackages(packages.filter((pkg) => pkg.pack_id !== pack_id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">View Packages</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Package Name</th>
              <th className="px-4 py-3">Days</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Price (₹)</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.pack_id} className="text-sm">
                <td className="px-4 py-3">{pkg.pack_id}</td>

                <td className="px-4 py-3">
                  <img
                    src={
                      editingId === pkg.pack_id
                        ? editFormData.previewImage
                        : `http://localhost:5000/uploads/${pkg.pack_img}`
                    }
                    alt="package"
                    className="w-20 h-16 rounded object-cover"
                  />

                  {editingId === pkg.pack_id && (
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="mt-2 text-xs"
                    />
                  )}
                </td>

                <td className="px-4 py-3">
                  {editingId === pkg.pack_id ? (
                    <input
                      name="pack_name"
                      value={editFormData.pack_name}
                      onChange={handleEditChange}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    pkg.pack_name
                  )}
                </td>

                <td className="px-4 py-3">
                  {editingId === pkg.pack_id ? (
                    <input
                      type="number"
                      name="total_days"
                      value={editFormData.total_days}
                      onChange={handleEditChange}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    pkg.total_days
                  )}
                </td>

                <td className="px-4 py-3">
                  {editingId === pkg.pack_id ? (
                    <textarea
                      name="pack_desc"
                      value={editFormData.pack_desc}
                      onChange={handleEditChange}
                      className="border p-1 rounded w-full"
                      rows="2"
                    />
                  ) : (
                    pkg.pack_desc
                  )}
                </td>

                <td className="px-4 py-3">
                  {editingId === pkg.pack_id ? (
                    <input
                      type="number"
                      name="pack_price"
                      value={editFormData.pack_price}
                      onChange={handleEditChange}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    pkg.pack_price
                  )}
                </td>

                <td className="px-4 py-3 text-center">
                  {editingId === pkg.pack_id ? (
                    <button
                      onClick={() => handleEditSave(pkg.pack_id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(pkg)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Update
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(pkg.pack_id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {packages.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No Packages Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
