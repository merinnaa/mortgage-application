// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import StatusBadge from './StatusBadge';

// const AdminStatus = ({ name }) => {
//   const navigate = useNavigate();
//   const [showDetails, setShowDetails] = useState(false);

//   const handleSubmit = () => {
//     navigate(`/application?name=${encodeURIComponent(name)}`);
//   };

//   const toggleArrow = (e) => {
//     e.stopPropagation();
//     setShowDetails(!showDetails);
//   };

//   const idStatus = "Completed";
//   const creditStatus = "Pending Review";
//   const bankStatus = "Flagged";
//   const allStatuses = [idStatus, creditStatus, bankStatus];

//   return (
//     <form
//       onClick={handleSubmit}
//       className="w-[600px] px-5 py-8 bg-white rounded-lg flex flex-col gap-6 cursor-pointer"
//     >
//       {/* Header and Status */}
//       <div className="flex flex-col gap-4 w-full">
//         <div className="flex justify-between items-center">
//           <div className="text-zinc-800 text-base font-bold">{name}, Applications</div>
//           <div className="flex items-center gap-4">
   
//     <button
//       type="button"
//       onClick={toggleArrow}
//       className="text-xl text-blue-500"
//     >
//       {showDetails ? (
//         <FontAwesomeIcon icon={faAngleUp} />
//       ) : (
//         <FontAwesomeIcon icon={faChevronDown} />
//       )}
//     </button>
//   </div>
// </div>
// <div className="flex justify-between items-center w-full">
//   {/* Status on the left */}
//   <StatusBadge statuses={allStatuses} />

//   {/* Add new button on the right */}
//   <button className="text-red-400 text-base font-bold font-['Inter'] hover:underline">
//     verify
//   </button>
// </div>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-px bg-neutral-400" />

//       {/* Conditional Document Details */}
//       {showDetails && (
//         <div className="flex flex-col gap-4 w-full">
//           <div className="flex items-center gap-2">
//             <StatusBadge status={idStatus} />
//             <span className="text-zinc-800 text-base font-normal">ID Verification</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <StatusBadge status={creditStatus} />
//             <span className="text-zinc-800 text-base font-normal">Credit Report</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <StatusBadge status={bankStatus} />
//             <span className="text-zinc-800 text-base font-normal">Bank Statement</span>
//           </div>
//         </div>
//       )}
//     </form>
//   );
// };

// export default AdminStatus;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import StatusBadge from './StatusBadge';

// const AdminStatus = ({ name }) => {
//   const navigate = useNavigate();
//   const [showDetails, setShowDetails] = useState(false);
//   const [documentStatuses, setDocumentStatuses] = useState({
//     idStatus: "Pending Review",
//     bankStatus: "Pending Review",
//     incomeStatus: "Pending Review"
//   });

//   const handleSubmit = () => {
//     navigate(`/application?name=${encodeURIComponent(name)}`);
//   };

//   const toggleArrow = (e) => {
//     e.stopPropagation();
//     setShowDetails(!showDetails);
//   };

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/dashboard/lender", {
//           method: "GET",
//           headers: { token: localStorage.token }
//         });
//         const data = await response.json();
//         console.log(data.users)

//         const [firstName, lastName] = name.split(" ");
//         const matchedUser = data.users.find(
//           (user) =>
//             user.first_name.toLowerCase() === firstName.toLowerCase() &&
//             user.last_name.toLowerCase() === lastName.toLowerCase()
//         );

//         if (matchedUser) {
//           const getStatus = (value) =>
//             value === true
//               ? "Valid"
//               : value === false
//               ? "Invalid"
//               : "Pending Review";

//           setDocumentStatuses({
//             idStatus: getStatus(matchedUser.valid_dr_license),
//             bankStatus: getStatus(matchedUser.valid_bank_document),
//             incomeStatus: getStatus(matchedUser.valid_w2),
//           });
//         }
//       } catch (error) {
//         console.error("Failed to fetch applicant document status", error);
//       }
//     };

//     fetchStatus();
//   }, [name]);

//   const { idStatus, bankStatus, incomeStatus } = documentStatuses;
//   const allStatuses = [idStatus, bankStatus, incomeStatus];

//   return (
//     <form
//       onClick={handleSubmit}
//       className="w-[600px] px-5 py-8 bg-white rounded-lg flex flex-col gap-6 cursor-pointer"
//     >
//       {/* Header and Status */}
//       <div className="flex flex-col gap-4 w-full">
//         <div className="flex justify-between items-center">
//           <div className="text-zinc-800 text-base font-bold">{name}, Applications</div>
//           <div className="flex items-center gap-4">
//             <button
//               type="button"
//               onClick={toggleArrow}
//               className="text-xl text-blue-500"
//             >
//               <FontAwesomeIcon icon={showDetails ? faAngleUp : faChevronDown} />
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-between items-center w-full">
//           {/* Status on the left */}
//           <StatusBadge statuses={allStatuses} />

//           {/* Add new button on the right */}
//           <button className="text-red-400 text-base font-bold font-['Inter'] hover:underline">
//             verify
//           </button>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-px bg-neutral-400" />

//       {/* Conditional Document Details */}
//       {showDetails && (
//         <div className="flex flex-col gap-4 w-full">
//           <div className="flex items-center gap-2">
//             <StatusBadge status={idStatus} />
//             <span className="text-zinc-800 text-base font-normal">ID Verification</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <StatusBadge status={incomeStatus} />
//             <span className="text-zinc-800 text-base font-normal">Income Document</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <StatusBadge status={bankStatus} />
//             <span className="text-zinc-800 text-base font-normal">Bank Statement</span>
//           </div>
//         </div>
//       )}
//     </form>
//   );
// };

// export default AdminStatus;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import StatusBadge from './StatusBadge';

const AdminStatus = ({ name }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [documentStatuses, setDocumentStatuses] = useState({
    idStatus: "Pending Review",
    bankStatus: "Pending Review",
    incomeStatus: "Pending Review"
  });

  const handleSubmit = () => {
    navigate(`/application?name=${encodeURIComponent(name)}`);
  };

  const toggleArrow = (e) => {
    e.stopPropagation();
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("https://mortgage-application-server.vercel.app/dashboard/lender", {
          method: "GET",
          headers: { token: localStorage.token }
        });
        const data = await response.json();
       

        const [firstName, lastName] = name.split(" ");
        console.log(firstName)
        console.log(lastName)

        console.log(data.allApplicants)
        const matchedUser = data.allApplicants.find(
          user =>
            user.first_name?.trim().toLowerCase() === firstName?.trim().toLowerCase() &&
            user.last_name?.trim().toLowerCase() === lastName?.trim().toLowerCase()
        );
        
        const getStatus = (value) =>
          value === true
            ? "Valid"
            : value === false
            ? "Invalid"
            : "Pending Review";
        
        setDocumentStatuses({
          idStatus: getStatus(matchedUser?.valid_dr_license),
          bankStatus: getStatus(matchedUser?.valid_bank_document),
          incomeStatus: getStatus(matchedUser?.valid_w2),
        })
        
      } catch (error) {
        console.error("Failed to fetch applicant document status", error);
      }
    };

    fetchStatus();
  }, [name]);

  const { idStatus, bankStatus, incomeStatus } = documentStatuses;
  const allStatuses = [idStatus, bankStatus, incomeStatus];

  return (
    <form
      onClick={handleSubmit}
      className="w-[600px] px-5 py-8 bg-white rounded-lg flex flex-col gap-6 cursor-pointer"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <div className="text-zinc-800 text-base font-bold">{name}, Applications</div>
          <button
            type="button"
            onClick={toggleArrow}
            className="text-xl text-blue-500"
          >
            <FontAwesomeIcon icon={showDetails ? faAngleUp : faChevronDown} />
          </button>
        </div>

        <div className="flex justify-between items-center w-full">
          <StatusBadge statuses={allStatuses} />
          <button className="text-red-400 text-base font-bold hover:underline">
            verify
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-400" />

      {showDetails && (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-2">
            <StatusBadge status={idStatus} />
            <span className="text-zinc-800 text-base font-normal">ID Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={incomeStatus} />
            <span className="text-zinc-800 text-base font-normal">Income Document</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={bankStatus} />
            <span className="text-zinc-800 text-base font-normal">Bank Statement</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default AdminStatus;