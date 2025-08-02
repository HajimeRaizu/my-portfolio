import React from 'react';

interface IconTextComponentProps {
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  text: string;
  className?: string;
}

const IconTextComponent: React.FC<IconTextComponentProps> = ({
  imgSrc,
  imgAlt = '',
  imgWidth = 32,
  imgHeight = 32,
  text,
}) => {
  return (
    <div className="w-[100%] h-fit max-h-[100%] pt-2 pb-0 flex flex-col items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[rgba(255,255,255,0.8)] text-sm cursor-default select-none">
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

export default IconTextComponent;