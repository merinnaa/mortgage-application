import React from 'react'

const ThankYou = () => {
  return (
    <>
      <div className="w-full h-[982px] relative bg-stone-100 overflow-hidden">
      <div className="w-[541px] p-12 bg-white rounded-lg inline-flex flex-col justify-start items-center gap-11">
    <div className="self-stretch flex flex-col justify-start items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Thank you for signing up to Fundify!</div>
        </div>
    </div>
    <div className="w-36 h-10 p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
        <link to='/login' className="justify-start text-white text-base font-['SF_Pro'] leading-snug">Log in Now</link>
    </div>
</div>
  
</div>
    </>
  )
}

export default ThankYou
