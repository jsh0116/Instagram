'use client';

import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'big' | 'small';
  buttonContainerStyle?: string;
}

const DefaultButton = ({
  size = 'small',
  buttonContainerStyle = undefined,
  ...props
}: Props) => {
  return (
    <div
      className={`
        ${buttonContainerStyle}
        ${size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'}
        rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-1
      `}
    >
      <button
        {...props}
        className={`
          px-2 text-sm text-center font-medium cursor-pointer rounded-sm hover:opacity-70 transition-opacity
          ${props.disabled ? 'cursor-not-allowed' : undefined}
          ${size === 'big' ? 'p-3 text-2xl' : 'p-[0.3rem] text-base'}
        `}
      />
    </div>

  );
};

export default DefaultButton;
