import React, { useEffect, useState } from "react";

const BookPackage = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [members, setMembers] = useState(1);
  const [description, setDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch all packages
  useEffect(() => {
    fetch("http://localhost:5000/api/packages")
      .then((res) => res.json())
      .then((data) => {
        console.log("PACKAGES:", data);
        setPackages(data);
      })
      .catch((err) => console.error("Package fetch error:", err));
  }, []);

  // Calculate total price dynamically
  useEffect(() => {
    if (selectedPackage) {
      setTotalPrice(Number(selectedPackage.pack_price) * Number(members));
    }
  }, [selectedPackage, members]);

  // On package select
  const handlePackageChange = (e) => {
    const pkg = packages.find(
      (p) => p.pack_id === Number(e.target.value)
    );
    setSelectedPackage(pkg);
    setDescription(pkg.pack_desc);
  };

  // Submit booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedPackage) {
      alert("Please select a package");
      return;
    }

    const bookingData = {
      pack_id: selectedPackage.pack_id,
      members: Number(members),
      price_per_person: Number(selectedPackage.pack_price),
      total_price: Number(totalPrice),
      desc_txt: description
    };

    console.log("SENDING BOOKING:", bookingData);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Booking failed");
        return;
      }

      alert("Package booked successfully ✅");
      console.log("Booking Response:", data);

      // Reset form
      setSelectedPackage(null);
      setMembers(1);
      setDescription("");
      setTotalPrice(0);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Book Package (Admin)
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-5"
      >
        {/* Package Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Package
          </label>
          <select
            onChange={handlePackageChange}
            value={selectedPackage?.pack_id || ""}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">-- Select Package --</option>
            {packages.map((pkg) => (
              <option key={pkg.pack_id} value={pkg.pack_id}>
                {pkg.pack_name} - ₹{pkg.pack_price}
              </option>
            ))}
          </select>
        </div>

        {/* Package Info */}
        {selectedPackage && (
          <div className="flex items-center gap-4 border p-3 rounded-lg">
            {selectedPackage.pack_img && (
  <img
    src={`http://localhost:5000/uploads/${selectedPackage.pack_img}`}
    alt={selectedPackage.pack_name}
    className="w-24 h-16 object-cover rounded-md"
  />
)}

            <div>
              <h3 className="font-semibold">{selectedPackage.pack_name}</h3>
              <p className="text-sm text-gray-600">
                Price per person: ₹{selectedPackage.pack_price}
              </p>
              <p className="text-sm text-gray-600">
                Total days: {selectedPackage.total_days}
              </p>
            </div>
          </div>
        )}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Package Description
          </label>
          <textarea
            rows="3"
            value={description}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Members */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Number of Members
          </label>
          <input
            type="number"
            min="1"
            required
            value={members}
            onChange={(e) => setMembers(Number(e.target.value))}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Price Calculation */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p>Price per person: ₹{selectedPackage?.pack_price || 0}</p>
          <p>Members: {members}</p>
          <p className="font-bold mt-2">Total: ₹{totalPrice}</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!selectedPackage || loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Booking..." : "Book Package"}
        </button>
      </form>
    </div>
  );
};

export default BookPackage;
