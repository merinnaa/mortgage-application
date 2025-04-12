import React, { useEffect, useState, useRef } from "react";
import FileCard from "./FileCard";
import  Upload  from "../images/upload.png";
const Dashboard = () => {
  const [name, setName] = useState("");
  const fileInput = useRef(null);

  const [idFile, setIdFile] = useState(null);
  const [bankFile, setBankFile] = useState(null);
  const [incomeFile, setIncomeFile] = useState(null);

  useEffect(() => {
    async function getName() {
      try {
        const response = await fetch("https://mortgage-application-server.vercel.app/dashboard/", {
          method: "GET",
          headers: { token: localStorage.token }
        });

        const parseRes = await response.json();
        setName(parseRes.name.toUpperCase());
      } catch (error) {
        console.error("Failed to fetch name:", error.message);
      }
    }

    getName();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("document", fileInput.current.files[0]);

    try {
      const response = await fetch("/lender", {
        method: "POST",
        body: formData
      });

      const parsedResponse = await response.json();
      if (response.ok) {
        alert("File uploaded");
      } else {
        console.log("Upload error:", parsedResponse);
      }
    } catch (e) {
      console.log("Upload failed:", e.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-stone-100 overflow-hidden p-4">
      <h1 className="text-5xl font-bold text-center mt-8 mb-4">Welcome, {name}!</h1>

      <form onSubmit={onSubmit} className="max-w-3xl mx-auto bg-white p-10 rounded-lg flex flex-col gap-10">
        {/* Upload Sections */}
        <FileCard
          label="Upload ID (e.g., Driver’s License, Passport)"
          name="id"
          file={idFile}
          setFile={setIdFile}
        />

        <FileCard
          label="Upload Bank Statement"
          name="bank"
          file={bankFile}
          setFile={setBankFile}
        />

        <FileCard
          label="Upload Income Document (e.g., W2, 1099)"
          name="income"
          file={incomeFile}
          setFile={setIncomeFile}
        />

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-red-400 text-white rounded-full hover:bg-red-500 transition"
          >
            Submit Documents
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
