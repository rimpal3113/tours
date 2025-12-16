import React, { useEffect, useState } from "react";

const ViewBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    members: 1,
    price_per_person: 0,
    total_price: 0,
    desc_txt: "",
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        const data = await res.json();
        setBookings(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Start editing a booking
  const handleEditClick = (book) => {
    setEditingId(book.id);
    setEditFormData({
      members: book.members,
      price_per_person: book.price_per_person,
      total_price: book.total_price,
      desc_txt: book.desc_txt,
    });
  };

  // Handle input changes and update total price live
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...editFormData, [name]: Number(value) || value };

    // Recalculate total price if members or price_per_person changes
    if (name === "members" || name === "price_per_person") {
      const members = Number(updatedData.members) || 0;
      const price = Number(updatedData.price_per_person) || 0;

      // Optional discount logic
      let discount = 0;
      if (members >= 5 && members < 10) discount = 0.05;
      else if (members >= 10) discount = 0.1;

      updatedData.total_price = members * price * (1 - discount);
    }

    setEditFormData(updatedData);
  };

  // Save updated booking
  const handleEditSave = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData),
      });

      if (res.ok) {
        alert("Booking updated successfully!");
        setBookings(
          bookings.map((b) =>
            b.id === id ? { ...b, ...editFormData } : b
          )
        );
        setEditingId(null);
      } else {
        alert("Failed to update booking");
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Delete booking
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Booking deleted!");
        setBookings(bookings.filter((b) => b.id !== id));
      } else {
        alert("Failed to delete booking");
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">View Bookings</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Package Name</th>
                <th className="px-4 py-3">Members</th>
                <th className="px-4 py-3">Price / Person</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((book) => (
                <tr key={book.id} className="text-sm">
                  <td className="px-4 py-3">{book.id}</td>
                  <td className="px-4 py-3">{book.pack_name}</td>
                  <td className="px-4 py-3">
                    {editingId === book.id ? (
                      <input
                        type="number"
                        name="members"
                        value={editFormData.members}
                        onChange={handleEditChange}
                        className="border p-1 rounded w-16"
                        min="1"
                      />
                    ) : (
                      book.members
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === book.id ? (
                      <input
                        type="number"
                        name="price_per_person"
                        value={editFormData.price_per_person}
                        onChange={handleEditChange}
                        className="border p-1 rounded w-24"
                        min="0"
                      />
                    ) : (
                      `₹${book.price_per_person}`
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === book.id
                      ? `₹${editFormData.total_price.toFixed(2)}`
                      : `₹${book.total_price}`}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === book.id ? (
                      <textarea
                        name="desc_txt"
                        value={editFormData.desc_txt}
                        onChange={handleEditChange}
                        className="border p-1 rounded w-full"
                        rows="2"
                      />
                    ) : (
                      book.desc_txt
                    )}
                  </td>
                  <td className="px-4 py-3 text-center flex justify-center gap-2">
                    {editingId === book.id ? (
                      <button
                        onClick={() => handleEditSave(book.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(book)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewBooking;
