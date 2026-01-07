import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../assets/tourlogo.jpeg"; 
const BookingConfirm = () => {
  const [bookings, setBookings] = useState([]);
  const [selected, setSelected] = useState(null);
  const printRef = useRef(null);

  // Admin editable extra fields
  const [extra, setExtra] = useState({
    inclusions: "",
    exclusions: "",
    total_cost: "",
    advance_paid: "",
    balance: "",
    note: "",
  });



  const renderPoints = (text) => {
    if (!text) return null;
    return (
      <ul className="list-disc pl-5">
        {text.split("\n").map(
          (item, index) =>
            item.trim() && <li key={index}>{item}</li>
        )}
      </ul>
    );
  };
  /* ====================== FETCH BOOKINGS ====================== */
  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/hotel-booking");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  /* ====================== SELECT BOOKING ====================== */
  const handleSelect = (b) => {
    setSelected(b);
    setExtra({
      inclusions: b.inclusions || "",
      exclusions: b.exclusions || "",
      total_cost: b.total_cost || "",
      advance_paid: b.advance_paid || "",
      balance: b.balance || "",
      note: b.note || "",
    });
  };

  /* ====================== SAVE EXTRA DETAILS ====================== */
  const saveExtraDetails = async () => {
    if (!selected) return alert("Select booking first");

    try {
      console.log("Sending extra data:", extra); // debug

      const res = await fetch(
        `http://localhost:5000/api/hotel-booking/${selected.hbook_id}/extra`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(extra),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Extra details saved successfully");
        fetchBookings(); // refresh table
      } else {
        alert(data.error || "Failed to save details");
      }
    } catch (err) {
      console.error("Save error:", err);
      alert("Server error");
    }
  };

  /* ====================== GENERATE PDF ====================== */
  const generatePDF = async () => {
    const canvas = await html2canvas(printRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
  
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
  
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
  
    // Open PDF in new tab
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };
  

  return (

    
    <div className="p-4 bg-gray-100 min-h-screen">
 <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
  Booking Confirmation
</h1>

      {/* ================= TABLE ================= */}
      <table className="w-full bg-white border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Guest</th>
            <th className="border p-2">Hotel</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Nights</th>
            <th className="border p-2">Check In</th>
            <th className="border p-2">Check Out</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td className="border p-2">{b.guest_name}</td>
              <td className="border p-2">{b.hotel_name}</td>
              <td className="border p-2">{b.location}</td>
              <td className="border p-2">{b.no_of_nights}</td>
              <td className="border p-2">{b.check_in_date}</td>
              <td className="border p-2">{b.check_out_date}</td>
              <td className="border p-2">
                <button
                  className="bg-black text-white px-3 py-1"
                  onClick={() => handleSelect(b)}
                >
                  View / PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ================= EXTRA DETAILS ================= */}
      {selected && (
        <div className="bg-white p-4 mt-4 border">
          <h3 className="font-bold mb-2">Extra Details</h3>

          <textarea rows={10} cols={20}
            className="border p-2 w-full mb-2 "
            placeholder="Inclusions"
            value={extra.inclusions}
            onChange={(e) =>
              setExtra({ ...extra, inclusions: e.target.value })
            }
          />

          <textarea rows={10} cols={20}
            className="border p-2 w-full mb-2"
            placeholder="Exclusions"
            value={extra.exclusions}
            onChange={(e) =>
              setExtra({ ...extra, exclusions: e.target.value })
            }
          />

          <input
            className="border p-2 w-full mb-2"
            placeholder="Total Cost"
            value={extra.total_cost}
            onChange={(e) =>
              setExtra({ ...extra, total_cost: e.target.value })
            }
          />

          <input
            className="border p-2 w-full mb-2"
            placeholder="Advance Paid"
            value={extra.advance_paid}
            onChange={(e) =>
              setExtra({ ...extra, advance_paid: e.target.value })
            }
          />

          <input
            className="border p-2 w-full mb-2"
            placeholder="Balance"
            value={extra.balance}
            onChange={(e) =>
              setExtra({ ...extra, balance: e.target.value })
            }
          />

          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Note"
            value={extra.note}
            onChange={(e) => setExtra({ ...extra, note: e.target.value })}
          />

          <button
            onClick={saveExtraDetails}
            className="bg-blue-700 text-white px-6 py-2"
          >
            Save Extra Details
          </button>
        </div>
      )}

      {/* ================= PDF ================= */}
      {selected && (
        <>
          <div
            ref={printRef}
            className="max-w-4xl mx-auto bg-white border p-6 mt-4 text-sm"
          >
            <div>
            <img
  src={logo}
  alt="Logo"
  className="w-24"
/></div>
            <h1 className="text-center font-bold underline mb-4">
              BOOKING CONFIRMATION
            </h1>

            <p><b>Guest:</b> {selected.guest_name}</p>
            <p><b>Hotel:</b> {selected.hotel_name}</p>
            <p><b>Location:</b> {selected.location}</p>
             <p><b>No of Nights:</b> {selected.no_of_nights}</p>
            
            <p><b>Check In:</b> {selected.check_in_date}</p>
            <p><b>Check Out:</b> {selected.check_out_date}</p>
            
           <h3 className="font-bold mt-3">Inclusions</h3>
            {renderPoints(extra.inclusions)}

            <h3 className="font-bold mt-3">Exclusions</h3>
            {renderPoints(extra.exclusions)}


            <div className="border mt-4 p-3">
              <p>Total Cost: ₹ {extra.total_cost}</p>
              <p>Advance Paid: ₹ {extra.advance_paid}</p>
              <p>Balance: ₹ {extra.balance}</p>
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

export default BookingConfirm;
