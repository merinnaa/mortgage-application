// src/pages/Status.jsx
import React, { useEffect, useState } from "react";
import SupervisorBadge from "./SupervisorBadge";

const SupervisorDashboard = () => {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
  //   const fetchAdminData = async () => {
  //     try {
  //       // const response = await fetch("https://your-api.com/admin-applications");
  //       // const data = await response.json();

  //       // Assume `data` is like:
  //       // [
  //       //   { adminName: "Joe Chen", applicants: [{ name: "Maya", status: "Completed" }, ...] },
  //       //   { adminName: "Lara Smith", applicants: [...] }
  //       // ]

  //       setAdminData(data);
  //     } catch (error) {
  //       console.error("Error fetching admin data:", error);
  //     }
  //   };

  //   fetchAdminData();
  // }, []);


  const fetchAdminData = async () => {
    try {
      const mockData = [
        {
          adminName: "Joe Chen",
          applicants: [
            { name: "Maya Smith", status: "Completed" },
            { name: "Jonathan Diaz", status: "Completed" },
            { name: "Mac Chen", status: "Flagged" },
            { name: "Alison Brown", status: "Flagged" },
            { name: "Julia Katz", status: "Pending Review" },
            { name: "Kyle Lebowski", status: "Pending Review" }
          ]
        },
        {
          adminName: "Lara Smith",
          applicants: [
            { name: "Tom Benson", status: "Completed" },
            { name: "Jane Doe", status: "Flagged" },
            { name: "Ella Miles", status: "Pending Review" }
          ]
        }
      ];

      setAdminData(mockData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  fetchAdminData();
}, []);

  return (
    <div className="w-full min-h-screen bg-stone-100 flex flex-col items-center gap-8 py-16">
      <h1 className="text-4xl font-bold text-zinc-800">Supervisor Review</h1>
      {adminData.map((admin, index) => (
        <SupervisorBadge
          key={index}
          adminName={admin.adminName}
          applicants={admin.applicants}
        />
      ))}
    </div>
  );
};

export default SupervisorDashboard;
