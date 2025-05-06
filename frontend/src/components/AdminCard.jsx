import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import StatusBadge from './StatusBadge';

const AdminStatus = ({ name }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = () => {
    navigate(`/application?name=${encodeURIComponent(name)}`);
  };

  const toggleArrow = (e) => {
    e.stopPropagation();
    setShowDetails(!showDetails);
  };

  const idStatus = "Completed";
  const creditStatus = "Pending Review";
  const bankStatus = "Completed";
  const allStatuses = [idStatus, creditStatus, bankStatus];

  return (
    <form
      onClick={handleSubmit}
      className="w-[600px] px-5 py-8 bg-white rounded-lg flex flex-col gap-6 cursor-pointer"
    >
      {/* Header and Status */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <div className="text-zinc-800 text-base font-bold">{name}, Applications</div>
          <button
            type="button"
            onClick={toggleArrow}
            className="text-xl text-blue-500"
          >
            {showDetails ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </div>

        <StatusBadge statuses={allStatuses} />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-400" />

      {/* Conditional Document Details */}
      {showDetails && (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-2">
            <StatusBadge status={idStatus} />
            <span className="text-zinc-800 text-base font-normal">ID Verification</span>
          </div>

          <div className="flex items-center gap-2">
            <StatusBadge status={creditStatus} />
            <span className="text-zinc-800 text-base font-normal">Credit Report</span>
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
