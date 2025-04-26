import React from 'react'
import upload from '../images/upload.png'
import view from '../images/fi_eye.png'
import  { format } from "date-fns";
import StatusBadge from './StatusBadge';

const DocumentCard = ({title, status, createdAt, file_url}) => {
  const formattedDate = format(new Date(createdAt), "MMMM d, yyyy"); 
  

  
  return (
    <>
         <div className="self-stretch p-6 bg-white rounded-lg flex flex-col justify-end items-end gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">{title}</div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <img src={view} className="w-5 h-4 left-[1px] top-[4px] absolute " />
                            
                        </div>
                        <a 
                        href={file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal cursor-pointer"
                        >
                            View pdf
                        </a>
                    </div>
                </div>
                < div className="self-stretch inline-flex justify-start items-start gap-1">
                   <StatusBadge status={status}/> <span class="text-black text-base font-normal font-['Inter'] leading-normal">- Submitted {formattedDate}  </span>
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                    <img src={upload} />
                        
                    </div>
                    <button className="justify-start text-red-400 text-base font-bold font-['Inter']  leading-normal hover:underline">Add new</button>
                </div>
            </div>
    </>
  )
}

export default DocumentCard
