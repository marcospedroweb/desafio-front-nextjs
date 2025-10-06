import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`px-16 py-4 bg-white hover:bg-gray-100 cursor-pointer rounded-full disabled:opacity-50 font-bold text-gray-800 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
