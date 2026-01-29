import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-pixe-500 text-white hover:bg-pixe-400 shadow-[0_0_20px_rgba(20,184,166,0.3)] border border-transparent hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]",
    secondary: "bg-white text-dark-900 hover:bg-gray-100 border border-transparent",
    outline: "border border-gray-700 text-gray-300 hover:text-white hover:border-pixe-500 hover:bg-pixe-950/30 backdrop-blur-sm"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};