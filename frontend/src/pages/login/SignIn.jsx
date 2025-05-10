import React, { useState } from "react";
import Login from "./Login";
import LenderLogin from "./LenderLogin";

const CombinedLogin = ({ setAuth }) => {
  const [userType, setUserType] = useState("borrower"); // Default to borrower

  return (
    <div className="w-full min-h-screen bg-stone-100 flex justify-center items-center py-16">
      <div className="w-[500px] p-12 bg-white rounded-lg flex flex-col gap-11">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-center text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">
              Log in
            </div>
            <div className="inline-flex justify-center items-center w-full">
              <button
                onClick={() => setUserType("borrower")}
                className={`w-36 h-10 px-4 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center gap-2.5 ${
                  userType === "borrower"
                    ? "bg-red-400 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <div className="flex-1 text-center text-base font-['SF_Pro'] leading-snug">Borrower</div>
              </button>
              <button
                onClick={() => setUserType("lender")}
                className={`w-36 h-10 px-4 rounded-tr-2xl rounded-br-2xl flex justify-center items-center gap-2.5 ${
                  userType === "lender"
                    ? "bg-red-400 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <div className="flex-1 text-center text-base font-['SF_Pro'] leading-snug">Lender</div>
              </button>
            </div>
            <div className="text-center">
              <span className="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">
                New to Fundify? </span>
              <Link to='/registration'className="text-teal-500 text-base font-bold font-['Inter'] leading-normal">
                Sign up for free
              </Link>
            </div>
          </div>
          <div className="max-h-[500px] overflow-y-auto w-full">
          {userType === "borrower" ? (
            <Login setAuth={setAuth} />
          ) : (
            <LenderLogin setAuth={setAuth} />
          )}
</div>
        </div>
      </div>
    </div>
  );
};

export default CombinedLogin;
