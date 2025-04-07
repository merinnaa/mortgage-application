import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-teal-500 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full sm:w-80 h-11 px-4 bg-neutral-100 rounded-full border border-zinc-800 text-center"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-40 p-2.5 bg-neutral-100 rounded-full outline outline-1 outline-offset-[-1px] outline-zinc-800 text-zinc-800 text-base font-sans text-center hover:bg-neutral-200 transition"
        >
          Sign me up
        </button>
      </div>
    </form>
  );
};

export default Footer;
