import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  loading,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-16 py-4 bg-white hover:bg-gray-100 ${
        loading ? 'cursor-progress' : 'cursor-pointer'
      } rounded-full disabled:opacity-50 font-bold text-gray-800 ${className}`}
      disabled={loading}
    >
      {text}
    </button>
  );
};

export default Button;
