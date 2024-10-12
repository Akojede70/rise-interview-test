import React from 'react';
import { buttonArrowIcon } from '../../assets/png/images-icon';


interface HeroSectionLeftProps {
    header: string;
    buttonText: string; 
    people: string; 
    smallText: string;
    breakText1: string;
    breakTest2: string;
}

const HeroSectionLeft: React.FC<HeroSectionLeftProps> = ({
  header,
buttonText,
 people,
 smallText,
  breakText1,
 breakTest2,
}) => {
  return (
    <div className='flex gap-[20%]'>
      <div className="flex flex-col pt-[13%] w-[60%]">
        <h2 className='text-3xl font-bold'>
          {header}
        </h2>
        <p className='my-[1.5%]'>
          {smallText} <br /> {breakText1} <br /> {breakTest2}
        </p>
        <button className="text-primaryTeal flex items-center gap-2">
          {buttonText}
          <span>
            <img src={buttonArrowIcon} alt="Arrow button" className="animate-moveLeftRightSlow" />
          </span>
        </button>
      </div>
      <div>
        <img src={people} alt='people1' />
      </div>
    </div>
  );
}

export default HeroSectionLeft;
