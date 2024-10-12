import React from 'react';

interface UserCardProps {
  smallText: string;
  breakText1: string;
  breakText2: string;
  breakText3: string;
  breakText4?: string;
  breakText5?: string;
  userImage: string;
  userName: string;
  width?: string;
  height?: string;
}

const UserCard: React.FC<UserCardProps> = ({ 
  smallText, 
  breakText1, 
  breakText2, 
  breakText3, 
  breakText4 = '', 
  breakText5 = '',
  userImage, 
  userName ,
  width = '30%',
  height = 'auto'
}) => {
  return (
    <div className='w-[30%] border rounded-[6px] shadow-left-right px-4' style={{ width: width, height: height}}>
      <p className='pt-[6%] text-[16px]'>
        {smallText} <br /> {breakText1} <br /> {breakText2} <br /> {breakText3} <br /> {breakText4} <br/>{breakText5}
      </p>
      <div className='flex gap-[4%] font-bold mt-[12%] mb-[7%]'>
        <img src={userImage} alt={userName} />
        <p>{userName}</p>
      </div>
    </div>
  );
};

export default UserCard;
