import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import DocumentCard from './DocumentCard';
import arrow from '../images/farrow.png'
const Application = () => {
  const [documents, setDocuments] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
    <div className="w-full min-h-screen bg-stone-100 flex flex-col md:flex-row py-16 px-4 gap-12">
      <div
        className="hidden md:flex w-56 h-10 absolute left-[50px] top-[90px] items-center gap-1 cursor-pointer"
        onClick={() => navigate('/admin-dashboard')}
      >
        <div className="w-6 h-6 relative overflow-hidden">
          <img src={arrow}  />
          
        </div>
        <div className="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Back</div>
      </div>

      <div className="w-full max-w-[600px] mx-auto flex flex-col gap-8">
        <h1 className="text-black text-5xl font-bold leading-[56px] tracking-wide">
          Application, {applicantName}
        </h1>

        <div className="flex flex-col gap-8">
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
