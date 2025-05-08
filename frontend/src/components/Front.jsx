import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import mega from '../images/mega-creator.png';
import verification from '../images/verification.png';
import save from '../images/save-ime.png';
import scale from '../images/scale.png';
import '../App.css';

const Front = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-stone-100 overflow-hidden">
      <section className="flex flex-col-reverse sm:flex-row justify-center items-center px-6 py-16 gap-12">
        <div className="flex flex-col justify-start items-start gap-8 max-w-xl text-left">
          <h1 className="text-zinc-800 text-4xl sm:text-5xl font-bold leading-tight tracking-wide">
            Verify Mortgage Loan Documents in Seconds, Not Days
          </h1>
          <p className="text-zinc-800 text-lg sm:text-2xl">
            Automated document analysis that <span className="text-teal-500 font-semibold">cuts processing time</span> and helps close more loans—faster.
          </p>
          <button
            onClick={scrollToSection}
            className="mt-4 px-6 py-2.5 bg-red-400 text-white rounded-full text-base font-semibold hover:bg-red-500 transition"
          >
            See how it works
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={mega} alt="Mega Creator" className="w-full max-w-sm sm:max-w-md" />
        </div>
      </section>

      <section className="bg-teal-500 py-12 px-6 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="bg-neutral-100 rounded-2xl p-6 max-w-xs flex flex-col gap-4 items-center">
          <img src={verification} alt="Verification" className="h-56 object-contain" />
          <h2 className="text-zinc-800 text-xl font-bold">Instant Accuracy, Zero Guesswork</h2>
          <p className="text-zinc-800 text-base">Let Fundify handle the heavy lifting. Detect mismatches, and compliance issues in real-time.</p>
        </div>
        <div className="bg-neutral-100 rounded-2xl p-6 max-w-xs flex flex-col gap-4 items-center">
          <img src={save} alt="Save Time" className="h-56 object-contain" />
          <h2 className="text-zinc-800 text-xl font-bold">Cut Processing Time</h2>
          <p className="text-zinc-800 text-base">Our automation slashes verification time, helping you move faster than your competition.</p>
        </div>
        <div className="bg-neutral-100 rounded-2xl p-6 max-w-xs flex flex-col gap-4 items-center">
          <img src={scale} alt="Scale" className="h-56 object-contain" />
          <h2 className="text-zinc-800 text-xl font-bold">Scale Smarter, Not Harder</h2>
          <p className="text-zinc-800 text-base">Grow your loan volume without growing your ops team. Fundify handles more volume, so your staff doesn’t have to.</p>
        </div>
      </section>

      <section ref={sectionRef} className="px-6 py-12 flex flex-col gap-8 max-w-5xl mx-auto">
        <h2 className="text-zinc-800 text-4xl font-bold tracking-wide">How it Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-teal-500 text-3xl font-bold">01.</h3>
            <h4 className="text-zinc-800 text-xl font-bold">Upload the docs — we handle the rest.</h4>
            <p className="text-zinc-800 text-base">As soon as documents (like paystubs, bank statements, or IDs) are uploaded, they're automatically routed for verification.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-teal-500 text-3xl font-bold">02.</h3>
            <h4 className="text-zinc-800 text-xl font-bold">Verifies in Real-Time</h4>
            <p className="text-zinc-800 text-base">Fundify checks for document completeness, validates income and identity, and flags any anomalies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Front;
