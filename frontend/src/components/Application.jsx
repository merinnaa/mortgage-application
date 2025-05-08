// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import DocumentCard from './DocumentCard';


// const Application = () => {
//   const [documents, setDocuments] = useState([]);
//   const [searchParams] = useSearchParams();
//   const applicantName = searchParams.get('name');

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const mockData = [
//           {
           
//             doc_type: "ID Document",
//             status: "Flagged",
//             create_at: "2025-04-24T16:00:00.000Z",
//           },
//           {
            
//             doc_type: "Bank Statement",
//             status: "Flagged",
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
//     <div className="w-full min-h-screen bg-stone-100 flex justify-center py-16 px-4">
//       <div className="w-full max-w-[600px] flex flex-col gap-8">
//         <h1 className="text-black text-5xl font-bold leading-[56px] tracking-wide">
//           Application, {applicantName}
//         </h1>

//         <div className="flex flex-col gap-8">
//           {documents.map((doc, index) => (
//             <DocumentCard
//               key={index}
//               title={doc.doc_type}
//               status={doc.status}
//               createdAt={doc.create_at}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import DocumentCard from './DocumentCard';

// const Application = () => {
//   const [documents, setDocuments] = useState([]);
//   const [searchParams] = useSearchParams();
//   const applicantName = searchParams.get('name');

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/application/status", {
//           method: "GET",
//           headers: { token: localStorage.token }
//         });

//         const data = await response.json(); // <- Your actual API response like:
//         // {
//         //   is_valid_id_document: true,
//         //   is_valid_bank_statment: false,
//         //   is_valid_income_document: null
//         // }

//         const mapStatus = (value) => {
//           if (value === true) return "Valid";
//           if (value === false) return "Invalid";
//           return "Pending Review";
//         };

//         const mockTimestamps = {
//           id: "2025-04-24T16:00:00.000Z",
//           bank: "2025-04-23T12:30:00.000Z",
//           income: "2025-04-22T14:45:00.000Z"
//         };

//         const mappedDocuments = [
//           {
//             doc_type: "ID Document",
//             status: mapStatus(data.is_valid_id_document),
//             create_at: mockTimestamps.id
//           },
//           {
//             doc_type: "Bank Statement",
//             status: mapStatus(data.is_valid_bank_statment),
//             create_at: mockTimestamps.bank
//           },
//           {
//             doc_type: "Income Document",
//             status: mapStatus(data.is_valid_income_document),
//             create_at: mockTimestamps.income
//           }
//         ];

//         setDocuments(mappedDocuments);
//       } catch (error) {
//         console.error("Failed to fetch documents", error);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-stone-100 flex justify-center py-16 px-4">
//       <div className="w-full max-w-[600px] flex flex-col gap-8">
//         <h1 className="text-black text-5xl font-bold leading-[56px] tracking-wide">
//           Application, {applicantName}
//         </h1>

//         <div className="flex flex-col gap-8">
//           {documents.map((doc, index) => (
//             <DocumentCard
//               key={index}
//               title={doc.doc_type}
//               status={doc.status}
//               createdAt={doc.create_at}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Application;
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DocumentCard from './DocumentCard';

const Application = () => {
  const [documents, setDocuments] = useState([]);
  const [searchParams] = useSearchParams();
  const applicantName = searchParams.get('name');

  useEffect(() => {
    const fetchApplicantDocuments = async () => {
      try {
        const response = await fetch('http://localhost:5000/dashboard/lender', {
          method: 'GET',
          headers: { token: localStorage.token },
        });
        console.log("yosan")
        const data = await response.json();
        console.log(data.allApplicants)
        
        

        const [first, last] = applicantName.toLowerCase().split(' ');

        const matchedApplicant = data.allApplicants.find(applicant =>
          applicant.first_name.toLowerCase() === first &&
          applicant.last_name.toLowerCase() === last
        );

        if (!matchedApplicant) {
          console.error("Applicant not found");
          return;
        }

        const mappedDocuments = [
          {
            doc_type: "Driver's License",
            status: mapStatus(matchedApplicant.valid_dr_license),
            create_at: matchedApplicant.created_at,
          },
          {
            doc_type: "W2 Form",
            status: mapStatus(matchedApplicant.valid_w2),
            create_at: matchedApplicant.created_at,
          },
          {
            doc_type: "Bank Document",
            status: mapStatus(matchedApplicant.valid_bank_document),
            create_at: matchedApplicant.created_at,
          },
        ];

        setDocuments(mappedDocuments);
      } catch (error) {
        console.error("Failed to fetch applicant documents", error);
      }
    };

    fetchApplicantDocuments();
  }, [applicantName]);

  const mapStatus = (value) => {
    if (value === true) return "Valid";
    if (value === false) return "Invalid";
    return "Pending Review";
  };

  return (
    <div className="w-full min-h-screen bg-stone-100 flex justify-center py-16 px-4">
      <div className="w-full max-w-[600px] flex flex-col gap-8">
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