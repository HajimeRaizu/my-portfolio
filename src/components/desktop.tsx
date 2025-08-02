"use client";
import DesktopApp from "./desktop_app";
import { useState } from "react";

export default function Desktop(){
  const [isOpen, setIsOpen] = useState("hidden");
  
  return (
    <div className="flex justify-center items-center overflow-hidden grow">
      <div
        className={`${isOpen} z-2 absolute h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        onClick={() => {
          setIsOpen("hidden");
        }}
        >
          <iframe src="/files/resume.pdf" width="60%" height="90%" title={"PDF Viewer"}/>
      </div>
      
      <div className="z-1 grid grid-flow-col grid-rows-6 grid-cols-14 overflow-hidden gap-y-[10px] gap-x-2 p-[10px] h-full w-full bg-[url('/background.jpg')] bg-cover bg-center">
        <DesktopApp imgSrc="/icons/pdf.png" imgAlt="PDF Icon" imgWidth={50} imgHeight={50} text="Resume" onDoubleClick={() => setIsOpen("block")}/>
        <DesktopApp imgSrc="/icons/folder.png" imgAlt="Folder Icon" imgWidth={40} imgHeight={40} text="Projects" />
        <DesktopApp imgSrc="/icons/music_player.png" imgAlt="Music Player" imgWidth={50} imgHeight={50} text="Music Player" />
      </div>
    </div>
  )
}