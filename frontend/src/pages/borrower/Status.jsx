import React, { useEffect, useState } from "react";
import DocumentCard from '../../components/DocumentCard';

const Status = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const mockData = [
          {
            doc_type: "ID Document",
            status: "Pending Review",
            create_at: "2025-04-24T16:00:00.000Z",
          },
          {
            doc_type: "Bank Statement",
            status: "Completed",
            create_at: "2025-04-23T12:30:00.000Z",
          },
          {
            doc_type: "Income Document",
            status: "Flagged",
            create_at: "2025-04-22T14:45:00.000Z",
          },
        ];
        setDocuments(mockData);
      } catch (error) {
        console.error("Failed to fetch documents", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="w-full min-h-screen bg-stone-100 flex flex-col items-center py-16">
      <h1 className="text-black text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide mb-8">
        Application Status
      </h1>
      <div className="w-full max-w-[600px] flex flex-col gap-8 px-4">
        {documents.map((doc, index) => (
          <DocumentCard
            key={index}
            title={doc.doc_type}
            status={doc.status}
            createdAt={doc.create_at}
          />
        ))}
      </div>
    </div>
  );
};

export default Status;
