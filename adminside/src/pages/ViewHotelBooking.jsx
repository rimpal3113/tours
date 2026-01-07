import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../assets/tourlogo.jpeg"; // adjust path if needed
const ViewHotelBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/hotel-booking");
      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load bookings", err);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString() : "-";

  const generatePdf = async (booking) => {
  const element = document.getElementById(`voucher-${booking.hbook_id}`);
  if (!element) {
    alert("Voucher not found for this guest");
    return;
  }

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const width = pdf.internal.pageSize.getWidth();
  const height = (canvas.height * width) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, width, height);

  const blob = pdf.output("blob");
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
};


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow border rounded p-4">
        <h2 className="text-xl font-bold mb-4">View Hotel Bookings</h2>

        {loading && <p>Loading...</p>}
        {!loading && bookings.length === 0 && (
          <p className="text-gray-500">No bookings found</p>
        )}

        {!loading && bookings.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Guest</th>
                  <th className="border p-2">Hotel</th>
                  <th className="border p-2">Hotel Phone</th>
                  <th className="border p-2">Booking Date</th>
                  <th className="border p-2">No Of Pax</th>
                  <th className="border p-2">No Of Nights</th>
                  <th className="border p-2">Location</th>
                  <th className="border p-2">Hotel Address</th>
                  <th className="border p-2">Booking PNR</th>
                  <th className="border p-2">Room Category</th>
                  <th className="border p-2">No of Rooms</th>
                  <th className="border p-2">Check In Time</th>
                  <th className="border p-2">Check Out Time</th>
                 
                  <th className="border p-2">Meal Plan</th>
                  <th className="border p-2">Hotel Policy</th>
                  <th className="border p-2">cancellation Policy</th>
                  <th className="border p-2">Note</th>
                  <th className="border p-2">PNR</th>
                  <th className="border p-2">Check In</th>
                  <th className="border p-2">Check Out</th>
                  <th className="border p-2">PDF</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.hbook_id} className="hover:bg-gray-50">
                    <td className="border p-2">{b.guest_name || "-"}</td>
                    <td className="border p-2">{b.hotel_name || "-"}</td>
                    <td className="border p-2">{b.hotel_phone || "-"}</td>
                    <td className="border p-2">{formatDate(b.booking_date)}</td>
                    <td className="border p-2">{b.no_of_pax|| "-"}</td>
                    <td className="border p-2">{b.no_of_nights || "-"}</td>
                    <td className="border p-2">{b.location || "-"}</td>
                    <td className="border p-2">{b.hotel_address || "-"}</td>
                    <td className="border p-2">{b.booking_pnr || "-"}</td>
                    <td className="border p-2">{b.room_category || "-"}</td>
                    <td className="border p-2">{b.no_of_rooms || "-"}</td>

                    <td className="border p-2">{b.check_in_time || "-"}</td>
                    <td className="bor der p-2">{b.check_out_time || "-"}</td>
                    <td className="border p-2">{b.meal_plan || "-"}</td>
                    <td className="border p-2">{b.hotel_policy || "-"}</td>
                    <td className="border p-2">{b.cancellation_policy || "-"}</td>
                    <td className="border p-2">{b.note || "-"}</td>
                    <td className="border p-2">{b.booking_pnr || "-"}</td>
                    <td className="border p-2">{formatDate(b.check_in_date)}</td>
                    <td className="border p-2">{formatDate(b.check_out_date)}</td>
                   
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => generatePdf(b)}
                        className="px-3 py-1 bg-black text-white rounded text-xs"
                      >
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Hidden vouchers rendered off-screen but visible */}
        {bookings.map((b) => (
          <div
            key={b.hbook_id}
            id={`voucher-${b.hbook_id}`}
            style={{
              position: "absolute",
              top: "-10000px", // move it far above
              left: "-10000px",
              width: "210mm",
              minHeight: "297mm",
              backgroundColor: "white",
              color: "black",
              padding: "24px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <img
  src={logo}
  alt="Logo"
  className="w-24"
/>
              </div>
              <div className="text-right text-sm">
              Dt. {formatDate(b.booking_date)}
              </div>
            </div>

            <h2 className="text-center font-bold text-lg mb-4">
              HOTEL BOOKING CONFIRMATION VOUCHER
            </h2>

            <p><b>To,</b></p>
            <p><b>{b.guest_name}</b></p>

            <hr className="my-3" />

            <table className="w-full border-collapse text-sm">
              <tbody>
              <tr>
                  <td className="border p-2 font-bold">LOCATION</td>
                  <td className="border p-2">{b.location}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">HOTEL NAME</td>
                  <td className="border p-2">{b.hotel_name}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">HOTEL ADDRESS</td>
                  <td className="border p-2">
                    {b.hotel_address} <br /> Phone: {b.hotel_phone}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">BOOKING PNR NO</td>
                  <td className="border p-2">{b.booking_pnr}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">DATE OF BOOKING</td>
                  <td className="border p-2">{formatDate(b.booking_date)}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">GUEST NAME</td>
                  <td className="border p-2">{b.guest_name}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">ROOM CATEGORY</td>
                  <td className="border p-2">{b.room_category}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">NO OF PAX</td>
                  <td className="border p-2">{b.no_of_pax}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">NO OF ROOMS</td>
                  <td className="border p-2">{b.no_of_rooms}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">CHECK IN DATE</td>
                  <td className="border p-2">{formatDate(b.check_in_date)}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">CHECK OUT DATE</td>
                  <td className="border p-2">{formatDate(b.check_out_date)}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">CHECK IN TIME</td>
                  <td className="border p-2">{b.check_in_time}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">CHECK OUT TIME</td>
                  <td className="border p-2">{b.check_out_time}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">NO OF NIGHTS</td>
                  <td className="border p-2">{b.no_of_nights}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">MEAL PLAN</td>
                  <td className="border p-2">{b.meal_plan}</td>
                </tr>
              </tbody>
            </table>

            <hr className="my-3" />

            <p><b>Hotel Policy:</b> {b.hotel_policy}</p>
            <p><b>Cancellation Policy:</b> {b.cancellation_policy}</p>
            <p><b>Note:</b> {b.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewHotelBooking;
