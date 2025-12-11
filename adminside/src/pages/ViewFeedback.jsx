import React, { useEffect, useState } from "react";

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedback from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/feedback") // your feedback route
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Feedback Details</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 border">First Name</th>
              <th className="p-3 border">Last Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Message</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.length > 0 ? (
              feedbacks.map((fb, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-100 even:bg-white hover:bg-blue-50 transition"
                >
                  <td className="p-3 border">{fb.firstName}</td>
                  <td className="p-3 border">{fb.lastName}</td>
                  <td className="p-3 border">{fb.email}</td>
                  <td className="p-3 border">{fb.phone}</td>
                  <td className="p-3 border">{fb.subject}</td>
                  <td className="p-3 border">{fb.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-3 border text-center text-gray-600">
                  No Feedback Submitted Yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewFeedback;
