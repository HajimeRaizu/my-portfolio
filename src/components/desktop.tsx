"use client";
import DesktopApp from "./desktop_app";
import { useState } from "react";
import { HiMinus, HiOutlinePlus, HiOutlineDuplicate } from "react-icons/hi";

export default function Desktop(){
  const [isResumeOpen, setIsResumeOpen] = useState("hidden");
  const [tabSizeResume, setTabSizeResume] = useState("w-[70%] h-[90%] rounded-[8px]");
  const [isProjectsOpen, setIsProjectsOpen] = useState("hidden");
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState("hidden");
  
  return (
    <div className="flex justify-center items-center overflow-hidden grow">
      <div className={`${isResumeOpen} ${tabSizeResume} absolute z-2 flex items-end justify-center flex-col overflow-hidden bg-[rgba(92,74,99,1)] select-none transition-all duration-200 ease-in-out`} onClick={(e) => e.stopPropagation()}>
        <div className="relative p-0 m-0" >
          <button className="py-[5px] px-[15px] h-[28px] w-[48px] hover:bg-[rgba(255,255,255,0.075)]"><HiMinus className="text-white text-lg" /></button>
          <button className="py-[5px] px-[15px] h-[28px] w-[48px] hover:bg-[rgba(255,255,255,0.075)]" onClick={() => {if(tabSizeResume === "w-[70%] h-[90%] rounded-[8px]"){ setTabSizeResume("w-[100%] h-[100%] h-[calc(100%-50px)] rounded-0")}else{ setTabSizeResume("w-[70%] h-[90%] rounded-[8px]") }}}><HiOutlineDuplicate className="text-white rotate-90 text-lg" /></button>
          <button className="py-[5px] px-[15px] h-[28px] w-[48px] hover:bg-[rgba(243,64,64,1)]" onClick={() => (setIsResumeOpen("hidden"))}><HiOutlinePlus className="text-white rotate-45 text-lg" /></button>
        </div>
        <div className="w-full h-full overflow-hidden p-[6px]">
          <iframe src="/files/resume.pdf#toolbar=0&navpanes=0" className="rounded-[5px]" width="100%" height="100%" title={"PDF Viewer"}/>
        </div>
      </div>

      <div
        className={`${isProjectsOpen} z-2 absolute h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        onClick={() => {
          setIsProjectsOpen("hidden");
        }}
        >
          <iframe src="/files/resume.pdf#toolbar=0&navpanes=0" width="60%" height="90%" title={"PDF Viewer"}/>
      </div>

      <div
        className={`${isMusicPlayerOpen} z-2 absolute h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        onClick={() => {
          setIsMusicPlayerOpen("hidden");
        }}
        >
          <iframe src="/files/resume.pdf#toolbar=0&navpanes=0" width="60%" height="90%" title={"PDF Viewer"}/>
      </div>
      
      <div className="z-1 grid grid-flow-col grid-rows-6 grid-cols-14 overflow-hidden gap-y-[10px] gap-x-2 p-[10px] h-full w-full bg-[url('/background.jpg')] bg-cover bg-center">
        <DesktopApp imgSrc="/icons/pdf.png" imgAlt="PDF Icon" imgWidth={50} imgHeight={50} text="Resume" onDoubleClick={() => setIsResumeOpen("block")}/>
        <DesktopApp imgSrc="/icons/folder.png" imgAlt="Folder Icon" imgWidth={40} imgHeight={40} text="Projects" onDoubleClick={() => setIsProjectsOpen("block")} />
        <DesktopApp imgSrc="/icons/music_player.png" imgAlt="Music Player" imgWidth={50} imgHeight={50} text="Music Player" onDoubleClick={() => setIsMusicPlayerOpen("block")} />
      </div>
    </div>
  )
}