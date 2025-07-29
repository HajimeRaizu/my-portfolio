"use client";
import { useEffect, useState } from "react";

export default function TaskBar(){
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
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

  return(
    <div className="relative flex items-center justify-center h-[8%] w-full bg-[rgba(26,26,26,0.8)] border-t-1 border-[rgba(255,255,255,0.2)] overflow-hidden">
      <div title="Show desktop" className="absolute right-[0.5px] h-[100%] flex items-center pl-3 pr-1 cursor-default group">
        <span className="text-[rgba(100,100,100,1)] text-[130%] opacity-0 group-hover:opacity-100 transition-opacity duration-0 delay-0">|</span>
      </div>

      <div title={`${formattedDate}\n${formattedTime}`} className="flex flex-col absolute right-[20px] cursor-default group select-none hover:bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-[5px]">
        <div className="text-xs">{formattedTime}</div>
        <div className="text-xs">{formattedDate}</div>
      </div>

      <div className="flex justify-center items-center w-[4%] h-[95%] m-10px pt-[2px] pb-[2px] pl-[1px] pr-[1px] rounded-[5px] border-1 border-[rgba(0,0,0,0)] hover:border-1 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.1)]">
        <div 
          className="w-[70%] h-[80%] bg-cover bg-center bg-no-repeat] rounded-[2px]"
          style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.2), rgba(75,75,75,0.2), rgba(0,0,0,0.2)), url(/windows.png)' }}
        ></div>
      </div>
    </div>
  );
}