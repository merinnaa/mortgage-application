import React from "react";

const AdminApplicant = ({ name, documents }) => {
  return (
    <div className="w-[1280px] h-[832px] relative bg-stone-100 overflow-hidden">
      {/* Header */}
      <div className="w-[1280px] h-16 px-12 absolute top-0 left-0 bg-white flex justify-between items-center">
        {/* Header content if needed */}
      </div>

      {/* Content */}
      <div className="w-[600px] left-[340px] top-[116px] absolute flex flex-col justify-start items-start gap-8">
        <div className="text-zinc-800 text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">
          Application, {name}
        </div>
        <div className="w-[600px] flex flex-col justify-start items-start gap-8">
          {documents.map((doc, index) => (
            <DocumentCard
              key={index}
              title={doc.title}
              status={doc.status}
              createdAt={doc.createdAt}
              file_url={doc.file_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminApplicant