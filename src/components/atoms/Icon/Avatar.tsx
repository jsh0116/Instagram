import React from 'react';
import Image from "next/image";

interface Props {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
}

const Avatar = ({ image, size = 'small', highlight = false }: Props) => {

  const getContainerStyle = () => {
    const baseStyle = 'rounded-full flex justify-center items-center';
    const highlightStyle = highlight
      ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
      : '';
    const sizeStyle = size === 'small' ? 'w-10 h-10' : 'w-[68px] h-[68px]';
    return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
  }

  const getImageSizeStyle = () => {
    return size === 'small' ? 'w-[34px] h-[34px]' : 'w-16 h-16 p-[0.2rem]';
  }

  return (
    <div className={getContainerStyle()}>
      <img
        src={image ?? undefined}
        className={`rounded-full ${getImageSizeStyle()}`}
        alt={'avatar profile image'}
        referrerPolicy='no-referrer'
      />
    </div>

  );
};

export default Avatar;
