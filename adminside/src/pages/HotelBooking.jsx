import { useState } from "react";

const HotelBooking = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    guest_name: "",
    location: "",
    hotel_name: "",
    hotel_address: "",
    hotel_phone: "",
    booking_pnr: "",
    booking_date: new Date().toISOString().slice(0, 10),
    room_category: "",
    no_of_pax: "",
    no_of_rooms: "",
    check_in_date: "",
    check_out_date: "",
    check_in_time: "",
    check_out_time: "",
    no_of_nights: "",
    meal_plan: "",
    hotel_policy: "",
    cancellation_policy: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const saveBooking = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/hotel-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save booking");

      await res.json();
      alert("Booking saved successfully ✅");

      // ✅ Reset form after submit
      setForm({
        guest_name: "",
        location: "",
        hotel_name: "",
        hotel_address: "",
        hotel_phone: "",
        booking_pnr: "",
        booking_date: new Date().toISOString().slice(0, 10),
        room_category: "",
        no_of_pax: "",
        no_of_rooms: "",
        check_in_date: "",
        check_out_date: "",
        check_in_time: "",
        check_out_time: "",
        no_of_nights: "",
        meal_plan: "",
        hotel_policy: "",
        cancellation_policy: "",
        note: "",
      });
    } catch (err) {
      alert("Error saving booking ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="max-w-4xl mx-auto bg-white p-4 shadow border rounded">
        <h2 className="font-bold mb-4 text-lg">Add Hotel Booking (Admin)</h2>

        {/* Booking Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {Object.keys(form)
            .filter(
              (key) =>
                !["hotel_policy", "cancellation_policy", "note"].includes(key)
            )
            .map((key) => (
              <input
                key={key}
                name={key}
                value={form[key]}
                onChange={handleChange}
                placeholder={key.replace(/_/g, " ").toUpperCase()}
                className="border p-2 rounded"
              />
            ))}
        </div>

        {/* Policy Fields */}
        <div className="grid grid-cols-1 gap-3 mt-4 text-sm">
          <textarea
            name="hotel_policy"
            value={form.hotel_policy}
            onChange={handleChange}
            placeholder="HOTEL POLICY"
            className="border p-2 rounded"
            rows={3}
          />

          <textarea
            name="cancellation_policy"
            value={form.cancellation_policy}
            onChange={handleChange}
            placeholder="CANCELLATION POLICY"
            className="border p-2 rounded"
            rows={3}
          />

          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="NOTE"
            className="border p-2 rounded"
            rows={2}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-5">
          <button
            onClick={saveBooking}
            disabled={loading}
            className="px-6 py-2 bg-teal-600 text-white rounded disabled:opacity-60"
          >
            {loading ? "Saving..." : "Submit Booking"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
