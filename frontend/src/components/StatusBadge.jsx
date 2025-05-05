import React from "react";
import shield from "../images/shield.png";
import clock from "../images/clock.png";
import alert from "../images/alert.png";

const getOverallStatus = (statuses) => {
  // Priority: Pending Review > Flagged > Completed
  if (statuses.includes("Pending Review")) return "Pending Review";
  if (statuses.includes("Flagged")) return "Flagged";
  if (statuses.every(status => status === "Completed")) return "Completed";
  return null;
};

const StatusBadge = ({ status, statuses }) => {
  const currentStatus = statuses
    ? getOverallStatus(statuses)
    : status;

  if (currentStatus === "Completed") {
    return (
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 relative overflow-hidden">
          <img
            src={shield}
            alt="approved icon"
            className="w-4 h-5 left-[4px] top-[2px] absolute"
          />
        </div>
        <span className="text-green-500 text-base font-normal">{currentStatus}</span>
      </div>
    );
  }

  if (currentStatus === "Pending Review") {
    return (
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 relative overflow-hidden">
          <img
            src={clock}
            alt="clock"
            className="w-5 h-5 left-[2px] top-[2px] absolute"
          />
        </div>
        <span className="text-blue-400 text-base font-normal">{currentStatus}</span>
      </div>
    );
  }

  if (currentStatus === "Flagged") {
    return (
      <div className="flex items-center gap-2">
        <img src={alert} alt="Flagged Icon" className="w-4 h-4" />
        <span className="text-red-400 text-base font-normal">{currentStatus}</span>
      </div>
    );
  }

  return null;
};

export default StatusBadge;
