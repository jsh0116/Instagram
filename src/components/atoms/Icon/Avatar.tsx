import React from 'react';
import Image from "next/image";

interface Props {
  image?: string | null;
}

const Avatar = ({ image }: Props) => {
  return (
    <div className={'w-10 h-10 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'}>
      <img
        src={image ?? undefined}
        className='rounded-full p-[0.1rem]'
        alt={'avatar profile image'}
        referrerPolicy='no-referrer'
      />
    </div>

  );
};

export default Avatar;
