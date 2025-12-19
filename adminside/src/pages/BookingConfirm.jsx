import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ViewHotelBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selected, setSelected] = useState(null);
  const printRef = useRef();

  // admin editable fields
  const [extra, setExtra] = useState({
    inclusions: "",
    exclusions: "",
    totalCost: "",
    advancePaid: "",
    balance: "",
    note: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/hotel-booking")
      .then((res) => res.json())
      .then(setBookings);
  }, []);

  const generatePDF = async () => {
    const canvas = await html2canvas(printRef.current, { scale: 2 });
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const w = pdf.internal.pageSize.getWidth();
    const h = (canvas.height * w) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, w, h);
    pdf.save("Booking_Confirmation.pdf");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* TABLE */}
      <table className="w-full bg-white border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Guest</th>
            <th className="border p-2">Hotel</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Night</th>
            <th className="border p-2">Check In</th>
            <th className="border p-2">Check Out</th>
            <th className="border p-2">Meal</th>
            <th className="border p-2">Room_category</th>
            <th className="border p-2">PDF</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td className="border p-2">{b.guest_name}</td>
              <td className="border p-2">{b.hotel_name}</td>
              <td className="border p-2">{b.location}</td>
              <td className="border p-2">{b.no_of_nights}</td>
              <td className="border p-2">{b.check_in_date}</td>
              <td className="border p-2">{b.check_out_date}</td>
              <td className="border p-2">{b.meal_plan}</td>
              <td className="border p-2">{b.room_category}</td>
              <td className="border p-2">
                <button
                  className="bg-black text-white px-3 py-1"
                  onClick={() => setSelected(b)}
                >
                  Generate PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PDF PREVIEW */}
      {selected && (
        <>
          {/* Admin inputs */}
          <div className="bg-white p-4 mt-4 border">
            <textarea
              placeholder="Inclusions"
              className="border p-2 w-full mb-2"
              onChange={(e) => setExtra({ ...extra, inclusions: e.target.value })}
            />
            <textarea
              placeholder="Exclusions"
              className="border p-2 w-full mb-2"
              onChange={(e) => setExtra({ ...extra, exclusions: e.target.value })}
            />
            <input
              placeholder="Total Package Cost"
              className="border p-2 w-full mb-2"
              onChange={(e) => setExtra({ ...extra, totalCost: e.target.value })}
            />
            <input
              placeholder="Advance Paid"
              className="border p-2 w-full mb-2"
              onChange={(e) =>
                setExtra({ ...extra, advancePaid: e.target.value })
              }
            />
            <input
              placeholder="Balance"
              className="border p-2 w-full mb-2"
              onChange={(e) => setExtra({ ...extra, balance: e.target.value })}
            />
            <textarea
              placeholder="Note"
              className="border p-2 w-full"
              onChange={(e) => setExtra({ ...extra, note: e.target.value })}
            />
          </div>

          {/* PDF CONTENT */}
          <div
            ref={printRef}
            className="max-w-4xl mx-auto bg-white border p-6 mt-4 text-sm"
          >
            <h1 className="text-center font-bold underline mb-4">
              BOOKING CONFIRMATION FOR {selected.no_of_nights}
            </h1>

            <p>
              <strong>Travel Date:</strong> {selected.check_in_date}
            </p>

            <h3 className="font-bold mt-3">Hotels Used</h3>
            <p>{selected.location}</p>
            <p>{selected.no_of_nights}</p>
            <p>{selected.hotel_name}</p>
            <p>
              Check In: {selected.check_in_date} | Check Out:{" "}
              {selected.check_out_date}
            </p>
            <p>{selected.meal_plan}</p>
            <p>{selected.room_category}</p>

            <h3 className="font-bold mt-3">Inclusions</h3>
            <p>{extra.inclusions}</p>

            <h3 className="font-bold mt-3">Exclusions</h3>
            <p>{extra.exclusions}</p>

            <div className="border mt-4 p-3">
              <p>Total Package Cost: ₹ {extra.totalCost}</p>
              <p>Advance Paid: ₹ {extra.advancePaid}</p>
              <p>Balance to Pay: ₹ {extra.balance}</p>
              <p className="text-xs mt-2">{extra.note}</p>
            </div>
          </div>

          <div className="text-center mt-3">
            <button
              onClick={generatePDF}
              className="bg-green-700 text-white px-6 py-2"
            >
              Download PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewHotelBookings;
