// import React, { useEffect, useState } from "react";
// import DocumentCard from '../../components/DocumentCard';

// const Status = () => {
//   const [documents, setDocuments] = useState([]);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const mockData = [
//           {
//             doc_type: "ID Document",
//             status: "Pending Review",
//             create_at: "2025-04-24T16:00:00.000Z",
//           },
//           {
//             doc_type: "Bank Statement",
//             status: "Completed",
//             create_at: "2025-04-23T12:30:00.000Z",
//           },
//           {
//             doc_type: "Income Document",
//             status: "Flagged",
//             create_at: "2025-04-22T14:45:00.000Z",
//           },
//         ];
//         setDocuments(mockData);
//       } catch (error) {
//         console.error("Failed to fetch documents", error);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-stone-100 flex flex-col items-center py-16">
//       <h1 className="text-black text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide mb-8">
//         Application Status
//       </h1>
//       <div className="w-full max-w-[600px] flex flex-col gap-8 px-4">
//         {documents.map((doc, index) => (
//           <DocumentCard
//             key={index}
//             title={doc.doc_type}
//             status={doc.status}
//             createdAt={doc.create_at}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Status;
// import React, { useEffect, useState } from "react";
// import DocumentCard from '../../components/DocumentCard';

// const Status = () => {
//   const [documents, setDocuments] = useState([]);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const response = await fetch("/api/applicant/documents"); // Adjust endpoint as needed
//         const data = await response.json();

//         const getStatus = (value) =>
//           value === true
//             ? "Completed"
//             : value === false
//             ? "Flagged"
//             : "Pending Review";

//         const formattedDocs = [
//           {
//             doc_type: "ID Document",
//             status: getStatus(data.valid_dr_license),
//             created_at: data.created_at || new Date().toISOString(),
//           },
//           {
//             doc_type: "Bank Statement",
//             status: getStatus(data.valid_bank_document),
//             created_at: data.created_at || new Date().toISOString(),
//           },
//           {
//             doc_type: "Income Document",
//             status: getStatus(data.valid_w2),
//             created_at: data.created_at || new Date().toISOString(),
//           },
//         ];

//         setDocuments(formattedDocs);
//       } catch (error) {
//         console.error("Failed to fetch documents", error);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-stone-100 flex flex-col items-center py-16">
//       <h1 className="text-black text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide mb-8">
//         Application Status
//       </h1>
//       <div className="w-full max-w-[600px] flex flex-col gap-8 px-4">
//         {documents.map((doc, index) => (
//           <DocumentCard
//             key={index}
//             title={doc.doc_type}
//             status={doc.status}
//             createdAt={doc.created_at}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Status;
import React, { useEffect, useState } from "react";
import DocumentCard from "../../components/DocumentCard";

const Status = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      //https://mortgage-application-server.vercel.app
      try {
        const response = await fetch("https://mortgage-application-server.vercel.app/dashboard/status",{
          method: "GET",
          headers: { token: localStorage.token }
        });
      // replace with your actual endpoint
        const data = await response.json();

        if (!data || data.length === 0) {
          // No user found, show all as Pending Review
          const fallbackDate = new Date().toISOString();
          setDocuments([
            { doc_type: "ID Document", status: "Pending Review", created_at: fallbackDate },
            { doc_type: "Bank Statement", status: "Pending Review", created_at: fallbackDate },
            { doc_type: "Income Document", status: "Pending Review", created_at: fallbackDate },
          ]);
          return;
        }

        const user = data[0]; // get the first user object

        const getStatus = (value) =>
          value === true
            ? "Completed"
            : value === false
            ? "Flagged"
            : "Pending Review";

        const createdAt = user.created_at || new Date().toISOString();

        setDocuments([
          {
            doc_type: "ID Document",
            status: getStatus(user.valid_dr_license),
            created_at: createdAt,
          },
          {
            doc_type: "Bank Statement",
            status: getStatus(user.valid_bank_document),
            created_at: createdAt,
          },
          {
            doc_type: "Income Document",
            status: getStatus(user.valid_w2),
            created_at: createdAt,
          },
        ]);
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
            createdAt={doc.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default Status;
