
export default function Desktop(){
  const applicationStyle = "w-[100%] h-fit max-h-[100%] pt-2 pb-0 flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[rgba(255,255,255,0.8)] text-sm cursor-default select-none";
  return (
    <div className="grid grid-flow-col grid-rows-6 grid-cols-14 overflow-hidden gap-y-[10px] gap-x-2 p-[10px] grow w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <div className={`${applicationStyle}`}>
        <img src="/windows.png" alt="Windows Icon" width={32} height={32} />
        <span className="text-center">Windows Start</span>
      </div>
      <div className={`${applicationStyle}`}>
        <img src="/pdf.png" alt="PDF Icon" width={50} height={50} />
        <span className="text-center">Resume</span>
      </div>
      <div className={`${applicationStyle}`}>
        <img src="/folder.png" alt="Folder Icon" width={40} height={40} />
        <span className="text-center">Projects</span>
      </div>
      <div className={`${applicationStyle}`}>4</div>
      <div className={`${applicationStyle}`}>5</div>
      <div className={`${applicationStyle}`}>6</div>
      <div className={`${applicationStyle}`}>7</div>
      <div className={`${applicationStyle}`}>8</div>
    </div>
  )
}