import React from 'react'
import AdminStatus from './AdminCard';
const SupervisorDashboard = () => {
  const applicants = [
    { name: "Kyle Lebowski" },
    { name: "Maya Jones" },
    { name: "John Smith" },
  ];
  return (
    <>
        <div className="w-full min-h-screen bg-stone-100 px-4 py-12 flex flex-col items-center gap-8">
  <div className="text-zinc-800 text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">
    Applications supervisors
  </div>
  
  <div className="w-[600px] flex flex-col gap-8">
    {applicants.map((applicant, index) => (
      <AdminStatus key={index} name={applicant.name} />
    ))}
  </div>
</div>

    </>
  )
}

export default SupervisorDashboard
