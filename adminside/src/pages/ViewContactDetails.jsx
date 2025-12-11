import React, { useEffect, useState } from "react";

const AdminViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  // FETCH ALL CONTACT DATA
  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact/all");
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.log("Error fetching contacts", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Contact Form Submissions
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">First Name</th>
              <th className="py-3 px-4 text-left">Last Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Message</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-600 font-medium"
                >
                  No contact messages found.
                </td>
              </tr>
            ) : (
              contacts.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.firstName}</td>
                  <td className="py-3 px-4">{item.lastName}</td>
                  <td className="py-3 px-4">{item.email}</td>
                  <td className="py-3 px-4">{item.phone}</td>
                  <td className="py-3 px-4">{item.subject}</td>
                  <td className="py-3 px-4">{item.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminViewContacts;
