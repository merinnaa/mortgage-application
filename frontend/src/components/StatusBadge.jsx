import React from "react";
import shield from "../images/shield.png"
import clock from "../images/clock.png"
import alert from "../images/alert.png"
const StatusBadge = ({ status }) => {
  if (status === "Completed") {
    return (
      <div className="flex items-center gap-1">
       <div className="w-6 h-6 relative overflow-hidden">
       <img src={shield} alt="approved icon" className="w-4 h-5 left-[4px] top-[2px] absolute " />

</div>
        <span className="text-green-500 text-base font-normal">{status}</span>
      </div>
    );
  }

  if (status === "Pending Review") {
    return (
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 relative overflow-hidden">
        <img src={clock} alt="clock" className="w-5 h-5 left-[2px] top-[2px] absolute" />

        </div>
        <span className="text-blue-400 text-base font-normal font-['Inter'] leading-normal">{status}</span>
      </div>
    );
  }

  if (status === "Flagged") {
    return (
      <div className="flex items-center gap-2">
        <img src={alert} alt="Flagged Icon" className="w-4 h-4" />
        <span className="text-red-400 text-base font-normal font-['Inter'] leading-normal">{status}</span>
      </div>
    );
  }

  return null;
};

export default StatusBadge;
