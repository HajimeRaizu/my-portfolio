"use client";
import IconTextComponent from "./desktop_app";

export default function Desktop(){
  
  return (
    <div className="grid grid-flow-col grid-rows-6 grid-cols-14 overflow-hidden gap-y-[10px] gap-x-2 p-[10px] grow w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <IconTextComponent imgSrc="/icons/windows.png" imgAlt="Windows Icon" imgWidth={32} imgHeight={32} text="Windows Start" />
      <IconTextComponent imgSrc="/icons/pdf.png" imgAlt="PDF Icon" imgWidth={40} imgHeight={40} text="Resume" />
      <IconTextComponent imgSrc="/icons/folder.png" imgAlt="Folder Icon" imgWidth={32} imgHeight={32} text="Projects" />
    </div>
  )
}