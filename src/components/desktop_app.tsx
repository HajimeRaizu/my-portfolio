import React from 'react';

interface DesktopApp {
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  text: string;
  onDoubleClick?: () => void;
}

export default function DesktopApp({
  imgSrc,
  imgAlt = '',
  imgWidth,
  imgHeight,
  text,
  onDoubleClick,
}: DesktopApp){
  return (
    <div
      className="w-[100%] h-fit max-h-[100%] pt-2 pb-0 flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[rgba(255,255,255,0.8)] text-sm cursor-default select-none"
      onDoubleClick={onDoubleClick}
      >
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        width={imgWidth} 
        height={imgHeight} 
      />
      <span className="text-center">{text}</span>
    </div>
  );
};