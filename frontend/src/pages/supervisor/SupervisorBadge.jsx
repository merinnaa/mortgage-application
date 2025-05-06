import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import shield from "../../images/shield.png";
import clock from "../../images/clock.png";
import alert from "../../images/alert.png";

const SupervisorBadge = ({ adminName, applicants }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  const renderIcon = (status) => {
    if (status === "Completed") {
      return (
        <div className="w-6 h-6 flex items-center justify-center">
          <img src={shield} alt="Completed" className="w-4 h-5" />
        </div>
      );
    } else if (status === "Pending Review") {
      return (
        <div className="w-6 h-6 flex items-center justify-center">
          <img src={clock} alt="Pending Review" className="w-5 h-5" />
        </div>
      );
    } else if (status === "Flagged") {
      return (
        <div className="w-6 h-6 flex items-center justify-center">
          <img src={alert} alt="Flagged" className="w-4 h-4" />
        </div>
      );
    }
    return null;
  };

  const getColorClass = (status) => {
    if (status === "Completed") return "text-green-500";
    if (status === "Pending Review") return "text-blue-400";
    if (status === "Flagged") return "text-red-400";
    return "text-zinc-800";
  };

  return (
    <div className="w-[600px] px-5 py-8 bg-white rounded-lg flex flex-col items-start gap-6 shadow">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-zinc-800 text-base font-bold leading-normal">{adminName}</div>
          <div className="text-zinc-800 text-base font-normal">Applications - {applicants.length}</div>
        </div>
        <button
          type="button"
          onClick={toggleDetails}
          className="text-zinc-800 hover:text-red-400 text-lg"
        >
          <FontAwesomeIcon icon={showDetails ? faChevronUp : faChevronDown} />
        </button>
      </div>

      <div className="w-full h-0 border border-neutral-300" />

      {showDetails && (
        <div className="w-full flex flex-col gap-4">
          {applicants.map((applicant, index) => (
            <div key={index} className="flex items-center gap-2">
              {renderIcon(applicant.status)}
              <span className={`${getColorClass(applicant.status)} text-base font-medium`}>
                {applicant.name}
              </span>
              <span className="text-zinc-800 text-base">- {applicant.status === "Completed" ? "Approved" : applicant.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupervisorBadge;
