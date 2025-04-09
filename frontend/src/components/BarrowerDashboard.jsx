import React from 'react'

const BarrowerDashboard = () => {
  return (
    <div className="inline-flex flex-col justify-start items-center gap-8">
    <div className="self-stretch justify-start text-black text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">Welcome, Chloe!</div>
    <div className="self-stretch p-8 bg-white rounded-lg inline-flex justify-start items-center gap-2.5">
        <div className="w-[806px] inline-flex flex-col justify-center items-center gap-8">
            <div className="w-[608px] flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="justify-start text-zinc-800 text-2xl font-normal font-['Inter'] leading-9 tracking-tight">Upload id or drivers license </div>
                    <div className="self-stretch p-6 rounded-lg outline outline-1 outline-offset-[-1px] outline-black flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
                            <div className="p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-white" />
                                </div>
                            </div>
                            <div className="self-stretch text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Drag and drop files here</div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex justify-start items-start gap-4">
                    <div className="w-[608px] inline-flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch inline-flex justify-between items-center">
                            <div className="flex justify-start items-center gap-1">
                                <img className="w-6 h-6" src="https://placehold.co/24x24" />
                                <div className="justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">example.pdf</div>
                            </div>
                            <img className="w-8 h-8" src="https://placehold.co/32x32" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[608px] flex flex-col justify-start items-start gap-14">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="justify-start text-zinc-800 text-2xl font-normal font-['Inter'] leading-9 tracking-tight">Upload credit report</div>
                    <div className="self-stretch p-6 rounded-lg outline outline-1 outline-offset-[-1px] outline-black flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
                            <div className="p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-white" />
                                </div>
                            </div>
                            <div className="self-stretch text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Drag and drop files here</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-4">
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch inline-flex justify-between items-center">
                                <div className="flex justify-start items-center gap-1">
                                    <img className="w-6 h-6" src="https://placehold.co/24x24" />
                                    <div className="justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">example.pdf</div>
                                </div>
                                <img className="w-8 h-8" src="https://placehold.co/32x32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[608px] flex flex-col justify-start items-start gap-14">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="justify-start text-zinc-800 text-2xl font-normal font-['Inter'] leading-9 tracking-tight">Upload bank statement</div>
                    <div className="self-stretch p-6 rounded-lg outline outline-1 outline-offset-[-1px] outline-black flex flex-col justify-center items-center gap-2.5">
                        <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
                            <div className="p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-white" />
                                </div>
                            </div>
                            <div className="self-stretch text-center justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Drag and drop files here</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-4">
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch inline-flex justify-between items-center">
                                <div className="flex justify-start items-center gap-1">
                                    <img className="w-6 h-6" src="https://placehold.co/24x24" />
                                    <div className="justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">example.pdf</div>
                                </div>
                                <img className="w-8 h-8" src="https://placehold.co/32x32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-48 h-10 flex flex-col justify-center items-center gap-2.5">
                <div className="self-stretch flex-1 p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
                    <div className="justify-start text-white text-base font-['SF_Pro'] leading-snug">Submit documents</div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BarrowerDashboard
