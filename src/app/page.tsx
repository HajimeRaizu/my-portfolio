import Image from "next/image";
import { format } from "path";
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const applicationStyle = "w-[100%] h-fit max-h-[100%] py-2 flex flex-col items-center justify-center bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[rgba(255,255,255,0.8)] text-sm cursor-pointer";
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time as "2.16 pm" (no leading zero, lowercase am/pm)
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toLowerCase().replace(' ', ' ');

  // Format date as "28/07/2025" (DD/MM/YYYY)
  const formattedDate = [
    currentDateTime.getDate().toString().padStart(2, '0'),
    (currentDateTime.getMonth() + 1).toString().padStart(2, '0'),
    currentDateTime.getFullYear()
  ].join('/');

  return (
    <div className="flex flex-col h-[100vh] bg-[rgb(91,44,117)]">
      <div className="grid grid-flow-col grid-rows-6 grid-cols-14 overflow-hidden gap-y-[10px] gap-x-2 p-[10px] grow w-full bg-[url('/background.jpg')] bg-cover bg-center">
        <div className={`${applicationStyle}`}>
          <img src="/windows.png" alt="Windows Icon" width={32} height={32} />
          <span className="text-center">Windows Start yehey nice</span>
        </div>
        <div className={`${applicationStyle}`}>2</div>
        <div className={`${applicationStyle}`}>3</div>
        <div className={`${applicationStyle}`}>4</div>
        <div className={`${applicationStyle}`}>5</div>
        <div className={`${applicationStyle}`}>6</div>
        <div className={`${applicationStyle}`}>7</div>
        <div className={`${applicationStyle}`}>8</div>
      </div>


      <div className="relative flex items-center justify-center h-[8%] w-full bg-[rgba(26,26,26,0.8)] border-t-1 border-[rgba(255,255,255,0.2)] overflow-hidden">
        <div title="Show desktop" className="absolute right-[0.5px] h-[100%] flex items-center pl-3 pr-1 cursor-default group">
          <span className="text-[rgba(100,100,100,1)] text-[130%] opacity-0 group-hover:opacity-100 transition-opacity duration-0 delay-0 c-p">|</span>
        </div>

        <div title={`${formattedDate}\n${formattedTime}`} className="absolute right-[20px]">
          <div className="text-xs">
            {formattedTime}
          </div>
          <div className="text-xs">
            {formattedDate}
          </div>
        </div>

        <div className="flex justify-center items-center w-[4%] h-[95%] m-10px pt-[2px] pb-[2px] pl-[1px] pr-[1px] rounded-[5px] border-1 border-[rgba(0,0,0,0)] hover:border-1 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.1)]">
          <div 
            className="w-[70%] h-[80%] bg-cover bg-center bg-no-repeat] rounded-[2px]"
            style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.2), rgba(75,75,75,0.2), rgba(0,0,0,0.2)), url(/windows.png)' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
