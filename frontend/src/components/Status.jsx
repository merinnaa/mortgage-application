import React from 'react'
import { useNavigate } from 'react-router-dom'
const Status = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[807px] relative bg-stone-100 overflow-hidden">
   
    <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch h-14 justify-start text-black text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">Application Status</div>
        <div className="w-[600px] flex flex-col justify-start items-start gap-8">
            <div className="self-stretch p-6 bg-white rounded-lg flex flex-col justify-end items-end gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">ID</div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <div className="w-5 h-4 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                            <div className="w-1.5 h-1.5 left-[9px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                        </div>
                        <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">View pdf</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                        <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                    </div>
                    <div className="justify-start"><span class="text-blue-400 text-base font-normal font-['Inter'] leading-normal">Pending review </span><span class="text-black text-base font-normal font-['Inter'] leading-normal">- Submitted April 2  </span></div>
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-red-400" />
                    </div>
                    <div className="justify-start text-red-400 text-base font-bold font-['Inter'] underline leading-normal">Add new</div>
                </div>
            </div>
            <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-end items-end gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Bank Statement</div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <div className="w-5 h-4 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                            <div className="w-1.5 h-1.5 left-[9px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                        </div>
                        <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">View pdf</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                        <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                    </div>
                    <div className="justify-start"><span class="text-blue-400 text-base font-normal font-['Inter'] leading-normal">Pending review </span><span class="text-black text-base font-normal font-['Inter'] leading-normal">- Submitted April 2  </span></div>
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-red-400" />
                    </div>
                    <div className="justify-start text-red-400 text-base font-bold font-['Inter'] underline leading-normal">Add new</div>
                </div>
            </div>
            <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-end items-end gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Income documents</div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <div className="w-5 h-4 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                            <div className="w-1.5 h-1.5 left-[9px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                        </div>
                        <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">View pdf</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                        <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                    </div>
                    <div className="justify-start"><span class="text-blue-400 text-base font-normal font-['Inter'] leading-normal">Pending review </span><span class="text-black text-base font-normal font-['Inter'] leading-normal">- Submitted April 2  </span></div>
                </div>
                <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-6 h-6 relative overflow-hidden">
                        <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-red-400" />
                    </div>
                    <div className="justify-start text-red-400 text-base font-bold font-['Inter'] underline leading-normal">Add new</div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Status
