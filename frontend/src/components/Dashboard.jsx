import React, { useEffect, useState } from 'react';
import FileCard from './FileCard';

const Dashboard = () => {
  const [name, setName] = useState("");
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
        console.error(error.message);
      }
    }

    getName();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!idFile || !bankFile || !incomeFile) {
      alert("Please upload all required files.");
      return;
    }

    const formData = new FormData();
    formData.append("id", idFile);
    formData.append("bank", bankFile);
    formData.append("income", incomeFile);

    try {
      const response = await fetch("https://mortgage-application-server.vercel.app/upload", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (response.ok) {
        alert("Files uploaded successfully!");
      } else {
        console.log("Something went wrong.");
      }
    } catch (e) {
      console.log("Upload failed:", e.message);
    }
  };

  const allFilesUploaded = idFile && bankFile && incomeFile;

  return (
    <div className="w-full min-h-screen bg-stone-100 flex flex-col items-center justify-start pt-20">
      <h1 className="text-5xl font-bold mb-10">Welcome, {name}!</h1>

      <form onSubmit={onSubmit} className="bg-white p-12 rounded-lg flex flex-col gap-[59px] items-center w-full max-w-2xl">
      
   
        <FileCard 
        label="Upload ID (e.g. driver’s license, passport)" 
        file={idFile} setFile={setIdFile} 
        />

        <FileCard 
        label="Upload Bank Statement" 
        file={bankFile} 
        setFile={setBankFile} 
        />

        <FileCard 
        label="Upload Income Document (e.g. W2, 1099)"
         file={incomeFile} 
         setFile={setIncomeFile} 
         />

        <button
          type="submit"
          className={`px-6 py-2.5 rounded-[48px] text-base font-semibold transition ${
            allFilesUploaded ? "bg-red-400 text-white" : "bg-neutral-100 text-stone-500"
          }`}
        >
          Submit Documents
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
