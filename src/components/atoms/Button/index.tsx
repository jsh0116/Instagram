import { ButtonHTMLAttributes } from 'react';

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className={`${className}`}>
      <button
        {...props}
        className={
          `px-2 text-sm text-center font-medium cursor-pointer rounded-sm hover:opacity-70 transition-opacity
          ${props.disabled ? 'cursor-not-allowed' : undefined}`
        }
      />
    </div>

  );
};

export default Button;
