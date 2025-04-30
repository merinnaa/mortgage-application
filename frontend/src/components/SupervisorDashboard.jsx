import React from 'react'

const Supervisordashboard = () => {
  return (
    <>
         <div className="w-[1280px] h-[1223px] relative bg-stone-100 overflow-hidden">
   
   <div className="w-[600px] left-[340px] top-[116px] absolute inline-flex flex-col justify-start items-start gap-8">
       <div className="self-stretch justify-start text-zinc-800 text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">Applications supervisor</div>
       <div className="w-[600px] flex flex-col justify-start items-start gap-8">
           <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
               <div className="self-stretch inline-flex justify-between items-center">
                   <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Maya Smith Application</div>
               </div>
               <div className="self-stretch inline-flex justify-start items-start gap-1">
                   <div className="w-6 h-6 relative overflow-hidden">
                       <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-green-500" />
                       <div className="w-3 h-2.5 left-[8px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-green-500" />
                   </div>
                   <div className="justify-start"><span class="text-green-500 text-base font-normal font-['Inter'] leading-normal">Approved </span><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">- April 1</span></div>
               </div>
           </div>
           <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
               <div className="self-stretch inline-flex justify-between items-center">
                   <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Jonathan Diaz Application</div>
               </div>
               <div className="self-stretch inline-flex justify-start items-start gap-1">
                   <div className="w-6 h-6 relative overflow-hidden">
                       <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-green-500" />
                       <div className="w-3 h-2.5 left-[8px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-green-500" />
                   </div>
                   <div className="justify-start"><span class="text-green-500 text-base font-normal font-['Inter'] leading-normal">Approved </span><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">- March 25</span></div>
               </div>
           </div>
           <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
               <div className="self-stretch inline-flex justify-between items-center">
                   <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Mac Chen Application</div>
                   <div className="w-0 h-6 relative origin-top-left rotate-90 overflow-hidden">
                       <div className="w-5 h-3 left-[2px] top-[6.12px] absolute bg-zinc-800" />
                   </div>
               </div>
               <div className="self-stretch inline-flex justify-start items-start gap-1">
                   <div className="w-6 h-6 relative overflow-hidden">
                       <div className="w-5 h-5 left-[1.55px] top-[2.90px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
                       <div className="w-0 h-1 left-[12px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
                       <div className="w-[0.01px] h-0 left-[12px] top-[17px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
                   </div>
                   <div className="justify-start"><span class="text-red-400 text-base font-normal font-['Inter'] leading-normal">Flagged</span><span class="text-green-500 text-base font-normal font-['Inter'] leading-normal"> </span><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">- April 2</span></div>
               </div>
           </div>
           <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
               <div className="self-stretch inline-flex justify-between items-center">
                   <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Alison Brown Application</div>
                   <div className="w-0 h-6 relative origin-top-left rotate-90 overflow-hidden">
                       <div className="w-5 h-3 left-[2px] top-[6.12px] absolute bg-zinc-800" />
                   </div>
               </div>
               <div className="self-stretch inline-flex justify-start items-start gap-1">
                   <div className="w-6 h-6 relative overflow-hidden">
                       <div className="w-5 h-5 left-[1.55px] top-[2.90px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
                       <div className="w-0 h-1 left-[12px] top-[9px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
                       <div className="w-[0.01px] h-0 left-[12px] top-[17px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
                   </div>
                   <div className="justify-start"><span class="text-red-400 text-base font-normal font-['Inter'] leading-normal">Flagged</span><span class="text-green-500 text-base font-normal font-['Inter'] leading-normal"> </span><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">- March 24</span></div>
               </div>
           </div>
           <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
               <div className="self-stretch inline-flex justify-between items-center">
                   <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Julia Katz Application</div>
                   <div className="w-0 h-6 relative origin-top-left rotate-90 overflow-hidden">
                       <div className="w-5 h-3 left-[2px] top-[6.12px] absolute bg-zinc-800" />
                   </div>
               </div>
               <div className="self-stretch justify-start text-blue-400 text-base font-normal font-['Inter'] leading-normal">Incomplete</div>
               <div className="self-stretch inline-flex justify-start items-start gap-1">
                   <div className="w-6 h-6 relative overflow-hidden">
                       <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                       <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                   </div>
                   <div className="justify-start"><span class="text-blue-400 text-base font-normal font-['Inter'] leading-normal">Pending review </span><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal"> </span></div>
               </div>
           </div>
           <div className="self-stretch px-5 py-8 bg-white rounded-lg flex flex-col justify-start items-start gap-4">
               <div className="self-stretch inline-flex justify-between items-center">
                   <div className="justify-start text-zinc-800 text-base font-bold font-['Inter'] leading-normal">Kyle Lebowski Application</div>
                   <div className="w-0 h-6 relative origin-top-left rotate-90 overflow-hidden">
                       <div className="w-5 h-3 left-[2px] top-[6.12px] absolute bg-zinc-800" />
                   </div>
               </div>
               <div className="self-stretch inline-flex justify-start items-start gap-1">
                   <div className="w-6 h-6 relative overflow-hidden">
                       <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                       <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-400" />
                   </div>
                   <div className="justify-start"><span class="text-blue-400 text-base font-normal font-['Inter'] leading-normal">Pending review </span><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal"> </span></div>
               </div>
           </div>
       </div>
   </div>
</div>
    </>
  )
}

export default Supervisordashboard
