import React from 'react';

interface MobileHeroProps {
  people: string; 
  header: string; 
  smallText: string; 
}

const MobileHero: React.FC<MobileHeroProps> = ({ people, header, smallText }) => {
  return (
    <div className='flex flex-col items-center justify-center lg:hidden'>
      <div>
        <img src={people} alt='people' />
      </div>
      <div className='text-center'>
        <h2 className='text-2xl font-bold my-[3%]'>{header}</h2>
        <p>{smallText}</p>
      </div>
    </div>
  );
}

export default MobileHero;
