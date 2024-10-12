import React from 'react';
import { buttonArrowIcon } from '../../assets/png/images-icon';

interface HeroSectionRightProps {
  header: string;
  breakHeader: string;
  buttonText: string;
  people: string; 
  smallText: string; 
}

const HeroSectionRight: React.FC<HeroSectionRightProps> = ({
  header,
  breakHeader,
  buttonText,
  people,
  smallText,
}) => {
  return (
    <div className='flex gap-[20%]'>
      <div>
        <img src={people} alt='people2' />
      </div>
      <div className="flex flex-col pt-[13%] w-[40%] ">
        <h2 className='text-3xl font-bold'>
          {header} <br /> {breakHeader}
        </h2>
        <p className='my-[1.5%]'>
          {smallText} 
        </p>
        <button className="text-primaryTeal flex items-center gap-2 ">
          {buttonText}
          <span>
            <img src={buttonArrowIcon} alt="Arrow button" className="animate-moveLeftRightSlow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSectionRight;
