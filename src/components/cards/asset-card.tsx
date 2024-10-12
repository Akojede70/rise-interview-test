import React from 'react';
import { buttonArrowIcon } from '../../assets/png/images-icon';

interface AssetCardsProps {
  circle: string;
  header: string;
  smallText: string;
  btnText: string;
  bgColor: string;
  marginTop?: string
}

const AssetCards: React.FC<AssetCardsProps> = ({
  circle,
  header,
  smallText,
  btnText,
  bgColor,
  marginTop = "20%"
}) => {
  return (
    <div className="rounded-lg shadow-lg max-w-xs mx-auto border border-gray-200 overflow-hidden">
      {/* Curved top section */}
      <div className="relative">
        <div className={`${bgColor} h-32`}></div>
        <div className="absolute inset-0 flex justify-center -bottom-8 mt-[28%]">
          <div className="bg-primaryWhite rounded-[40px] p-2 border-gray-200">
            <img src={circle} alt="circle Icon" className="w-full h-[70px]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 p-6 text-center ">
        <h3 className="text-2xl font-bold text-primaryBlack mb-2">{header}</h3>
        <div className='w-full'>
        <p className="text-primaryBlack mb-4 ">
          {smallText} 
          
        </p>
        </div>
        <div className="text-sm">
          <p className="text-primaryBlack mb-1">
            <span className="text-[#919fb5]">Historical returns:</span> 14% per annum
          </p>
          <p className="text-primaryBlack mb-4">
            <span className="text-[#919fb5]">Risk Level:</span> Medium
          </p>
        </div>
        <div className="flex justify-center mt-[20%]" style={{ marginTop: marginTop,}}>
          <button className="text-primaryTeal flex items-center gap-2 font-bold">
            {btnText}
            <span>
              <img src={buttonArrowIcon} alt="Arrow button" className="animate-moveLeftRightSlow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetCards;
