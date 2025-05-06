import React from "react";
import view from "../../images/fi_eye.png";
import upload from "../../images/upload.png";
import StatusBadge from "../../components/StatusBadge";
import { format } from "date-fns";


const ApplicantCard = ({ title, status, createdAt, file_url }) => {
  const formattedDate = format(new Date(createdAt), "MMMM d, yyyy");

  return (
    <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
      {/* Title and View PDF */}
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="text-zinc-800 text-base font-bold font-['Inter'] leading-normal">
          {title}
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden">
            <img
              src={view}
              alt="View Icon"
              className="w-5 h-4 left-[1px] top-[4px] absolute"
            />
          </div>
          <a
            href={file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-800 text-base font-normal font-['Inter'] leading-normal hover:underline"
          >
            View pdf
          </a>
        </div>
      </div>

      {/* Status */}
      <div className="self-stretch inline-flex justify-start items-start gap-1">
        <StatusBadge status={status} />
        <span className="text-black text-base font-normal font-['Inter'] leading-normal">
          - Submitted {formattedDate}
        </span>
      </div>

      {/* Add New */}
      <div className="inline-flex justify-start items-center gap-1">
        <div className="w-6 h-6 relative overflow-hidden">
          <img src={upload} alt="Upload Icon" />
        </div>
        <button className="text-red-400 text-base font-bold font-['Inter'] leading-normal hover:underline">
          Add new
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard