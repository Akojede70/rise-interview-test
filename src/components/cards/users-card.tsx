import React from 'react';

interface UserCardProps {
  smallText: string;
  userImage: string;
  userName: string;
  width?: string;
  height?: string;
  marginTop?: string;
}

const UserCard: React.FC<UserCardProps> = ({ 
  smallText, 
  userImage, 
  userName ,
  width = '30%',
  height = 'auto',
  marginTop = "12%"
}) => {
  return (
    <div className='w-[35%] border rounded-[6px] shadow-left-right px-3 ' style={{ width: width, height: height}}>
      
      <p className='mt-[6%] text-[16px'>
        {smallText} 
      </p>
 
      <div className='lg:flex lg:gap-[4%] lg:ont-bold lg:mb-[7%] hidden' style={{ marginTop: marginTop}}>
        <img src={userImage} alt={userName} />
        <p>{userName}</p>
      </div>
      <div className='flex flex-col my-[8%] gap-[4%] items-center justify-center lg:hidden'>
      <img src={userImage} alt={userName} />
      <p className='font-bold'>{userName}</p>
      <p >UX Researcher</p>
      </div>
    </div>
  );
};

export default UserCard;
