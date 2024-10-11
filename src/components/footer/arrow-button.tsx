import React from 'react';
import { footerArrow } from '../../assets/png/images-icon';

interface ArrowButtonProps {
  text: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text }) => {
  return (
    <div>
      <button className='flex gap-[3px]'>
        {text} <span><img src={footerArrow} alt='arrow' /></span>
      </button>
    </div>
  );
}

export default ArrowButton;
