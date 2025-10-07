import React, { type InputHTMLAttributes, type ReactNode } from 'react';

interface InputParams extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  text: string;
  type?: string;
  classNameDiv?: string;
  classNameInput?: string;
}

const Input = ({
  icon,
  text,
  type = 'text',
  classNameDiv,
  classNameInput,
  ...props
}: InputParams) => {
  return (
    <div className={`relative w-full ${classNameDiv}`}>
      {icon && (
        <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={text}
        className={`w-full px-3 py-4 ${
          icon ? 'pl-15' : 'pl-5'
        } rounded-full focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black ${classNameInput}`}
        {...props}
      />
    </div>
  );
};

export default Input;
