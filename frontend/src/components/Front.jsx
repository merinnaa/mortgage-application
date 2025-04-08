import React,{Fragment} from "react"
import { Link } from "react-router-dom";
import '../App.css';

const Front = () => {
  return (
    <Fragment >
    <section className="w-full flex flex-col-reverse justify-center sm:flex-row h-[2098px] relative bg-stone-100 overflow-hidden">
    <article className="w-1/2 sm:w-1/2 max-w-4xl mx-auto left-[50px] top-[282px] absolute inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <h1 className="self-stretch text-center text-1xl text-zinc-800 text-5xl sm:text-4xl sm:text-left font-bold font-['Inter'] leading-[56px] tracking-wide">Verify Mortgage Loan Documents in Seconds, Not Days</h1>
            <p className="self-stretch justify-start"><span class="text-zinc-800 text-2xl font-normal font-['Inter'] leading-9 tracking-tight">Automated document analysis that </span><span class="text-teal-500 text-2xl font-semibold font-['Inter'] leading-9 tracking-tight">cuts processing time </span><span class="text-zinc-800 text-2xl font-normal font-['Inter'] leading-9 tracking-tight">and helps close more loans—faster.</span></p>
        </div>
        <div className="w-48 h-10 flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch flex-1 p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
                <Link
                to='/register'
                 className="justify-start text-white text-base font-['SF_Pro'] leading-snug"
                 >
                  See how it works
                </Link>
            </div>
        </div>
    </article>
    <div className="py-5 px-6">
    <img className="w-1/2 h-25 left-[750px] top-[100px] absolute" src="./images/mega-creator.png" alt="" />
    </div>
</section>
    <div className="w-full p-2.5 left-0 top-[832px] absolute bg-teal-500 inline-flex flex-col justify-center items-center gap-2.5">
      
        <div className="self-stretch p-6 bg-teal-500 inline-flex justify-between items-start">
            <div className="w-96 h-[478px] p-6 bg-neutral-100 rounded-2xl flex justify-start items-center gap-2.5">
                <div className="flex-1 h-96 flex justify-start items-start gap-6">
                    <div className="w-80 inline-flex flex-col justify-start items-start gap-7">
                        <img className="self-stretch h-56" src="./images/verification.png" alt=""/>
                        <div className="self-stretch flex flex-col justify-start items-center gap-4">
                            <div className="self-stretch justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Instant Accuracy, Zero Guesswork</div>
                            <div className="self-stretch justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Let Fundify handle the heavy lifting. Detect mismatches, and compliance issues in real-time.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[478px] p-6 bg-neutral-100 rounded-2xl flex justify-start items-center gap-2.5">
                <div className="w-80 h-96 inline-flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-8">
                        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                            <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
                                <img className="w-64 h-56" src="./images/save-ime.png" alt=""/>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-center gap-4">
                            <div className="self-stretch justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Cut Processing Time </div>
                            <div className="self-stretch justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Our automation slashes verification time, helping you move faster than your competition.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[478px] p-6 bg-neutral-100 rounded-2xl flex justify-start items-center gap-2.5">
                <div className="w-80 h-96 inline-flex flex-col justify-start items-start">
                    <img className="w-80 h-72" src="./images/scale.png" alt=""/>
                    <div className="self-stretch flex flex-col justify-start items-center gap-4">
                        <div className="self-stretch justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Scale Smarter, Not Harder</div>
                        <div className="self-stretch justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Grow your loan volume without growing your ops team. Fundify handles more volume, so your staff doesn’t have to.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="w-[1200px] h-96 left-[50px] top-[1478px] absolute inline-flex flex-col justify-start items-start gap-12">
        <div className="self-stretch justify-start text-zinc-800 text-5xl font-bold font-['Inter'] leading-[56px] tracking-wide">How it Works</div>
        <div className="self-stretch h-64 inline-flex justify-start items-start gap-24">
            <div className="w-80 inline-flex flex-col justify-start items-center gap-6">
                <div className="self-stretch h-10 justify-start text-teal-500 text-6xl font-bold font-['Inter'] leading-normal">01.</div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Upload the docs — we handle the rest.</div>
                    <div className="self-stretch justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">As soon as documents (like paystubs, bank statements, or IDs) are uploaded, they're automatically routed for verification.</div>
                </div>
            </div>
            <div className="w-80 inline-flex flex-col justify-start items-center gap-6">
                <div className="self-stretch h-10 justify-start text-teal-500 text-6xl font-bold font-['Inter'] leading-normal">02.</div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Verifies in Real-Time</div>
                    <div className="self-stretch justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Fundify checks for document completeness, validates income and identity, and flags any anomalies.</div>
                </div>
            </div>
        </div>
    </div>
    
  
   
    </Fragment>
  )

};
export default Front;