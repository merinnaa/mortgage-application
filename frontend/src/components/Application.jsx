import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DocumentCard from './DocumentCard';

const Application = () => {
  const [documents, setDocuments] = useState([]);
  const [searchParams] = useSearchParams();
  const applicantName = searchParams.get('name');

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const mockData = [
          {
            name: "maya",
            doc_type: "ID Document",
            status: "Pending Review",
            create_at: "2025-04-24T16:00:00.000Z",
          },
          {
            name: "kryz",
            doc_type: "Bank Statement",
            status: "Completed",
            create_at: "2025-04-23T12:30:00.000Z",
          },
          {
            name: "john",
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
    <div className="w-full h-[807px] relative bg-stone-100 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch h-14 justify-start text-black text-5xl font-bold leading-[56px] tracking-wide">
          Application, {applicantName}
        </div>
        <div className="w-[600px] flex flex-col justify-start items-start gap-8">
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
    </div>
  );
};

export default Application;
