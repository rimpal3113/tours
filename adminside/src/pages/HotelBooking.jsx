import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const HotelBooking = () => {
  const printRef = useRef();
  const [showVoucher, setShowVoucher] = useState(false);
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

      const data = await res.json();
      alert("Booking saved with ID: " + data.id);
      setShowVoucher(true);
    } catch (err) {
      alert("Error saving booking");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Generate PDF function using jspdf + html2canvas
  const generatePdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`HotelBooking_${form.guest_name}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="max-w-4xl mx-auto bg-white p-4 shadow border rounded mb-6">
        <h2 className="font-bold mb-3">Booking Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {Object.keys(form).map((key) => (
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

        <div className="flex gap-3 mt-4">
          <button
            onClick={saveBooking}
            disabled={loading}
            className="px-6 py-2 bg-teal-600 text-white rounded disabled:opacity-60"
          >
            {loading ? "Saving..." : "Show Booking"}
          </button>
          {showVoucher && (
            <button
              onClick={generatePdf}
              className="px-6 py-2 bg-black text-white rounded"
            >
              Download PDF
            </button>
          )}
        </div>
      </div>

      {showVoucher && (
        <div className="flex justify-center">
          <div
            ref={printRef}
            className="w-full max-w-4xl bg-white p-6 border shadow-md text-sm text-black"
          >
            <div className="flex justify-between border-b border-dotted pb-3">
              <div>
                <h1 className="text-2xl font-bold text-teal-700">Atithi Tours</h1>
                <p className="text-xs italic">You Think it... We Make it..!</p>
              </div>
              <p>Dt. {form.booking_date}</p>
            </div>

            <h2 className="text-center font-bold underline my-6">
              HOTEL BOOKING CONFIRMATION VOUCHER
            </h2>

            <p>To,</p>
            <p className="font-semibold mb-3">{form.guest_name}</p>
            <h3 className="font-bold mb-2">{form.location}</h3>

            <div className="border border-black">
              <Row label="HOTEL NAME" value={form.hotel_name} />
              <Row
                label="HOTEL ADDRESS"
                value={
                  <>
                    {form.hotel_address}
                    <br /> Phone : {form.hotel_phone}
                  </>
                }
              />
              <Row label="BOOKING PNR NO" value={form.booking_pnr} />
              <Row label="DATE OF BOOKING" value={form.booking_date} />
              <Row label="ROOM CATEGORY" value={form.room_category} />
              <Row label="NO OF PAX" value={form.no_of_pax} />
              <Row label="NO OF ROOMS" value={form.no_of_rooms} />

              <div className="grid grid-cols-4 border-t border-black">
                <Cell label="CHECK IN DATE" value={form.check_in_date} />
                <Cell label="CHECK OUT DATE" value={form.check_out_date} />
                <Cell label="CHECK IN TIME" value={form.check_in_time} />
                <Cell label="CHECK OUT TIME" value={form.check_out_time} />
              </div>

              <Row label="NO OF NIGHTS STAY" value={form.no_of_nights} />
              <Row label="MEAL PLAN" value={form.meal_plan} />
            </div>

            <div className="mt-6 text-xs border-t pt-3">
              <h3 className="font-bold mb-1">Hotel Policy</h3>
              <ul className="list-disc ml-4 mb-2">
                <li>Check-in after 12:00 PM</li>
                <li>Valid government ID required</li>
                <li>No pets allowed</li>
              </ul>

              <h3 className="font-bold mb-1">Cancellation Policy</h3>
              <p>
                Free cancellation before 48 hours. 100% charge applicable within 48
                hours of check-in.
              </p>

              <h3 className="font-bold mt-2 mb-1">Note</h3>
              <p>This voucher must be presented at the time of check-in.</p>

              <p className="mt-2 font-semibold">Contact: {form.hotel_phone}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="grid grid-cols-4 border-t border-black">
    <div className="p-2 font-semibold border-r border-black">{label}</div>
    <div className="col-span-3 p-2">{value || "-"}</div>
  </div>
);

const Cell = ({ label, value }) => (
  <div className="border-r border-black last:border-r-0">
    <div className="p-2 font-semibold border-b border-black">{label}</div>
    <div className="p-2">{value || "-"}</div>
  </div>
);

export default HotelBooking;
