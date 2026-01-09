import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon, 
  className = '',
  isLoading = false,
  disabled,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded transition-all focus:outline-none focus:ring-0 disabled:cursor-not-allowed";
  
  let sizeClasses = "";
  switch (size) {
    case 'sm':
      sizeClasses = "px-3 py-1.5 text-xs";
      break;
    case 'lg':
      sizeClasses = "px-6 py-3 text-base";
      break;
    case 'md':
    default:
      sizeClasses = "px-4 py-2 text-sm";
      break;
  }

  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-primary hover:bg-primary-dark text-white shadow-sm dark:shadow-none dark:hover:brightness-110 disabled:opacity-50";
      break;
    case 'secondary':
      variantClasses = "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm dark:bg-transparent dark:border-borderColor-dark-light dark:text-gray-200 dark:hover:bg-surface-3 dark:shadow-none disabled:border-gray-700 disabled:text-gray-600";
      break;
    case 'danger':
      variantClasses = "bg-error hover:bg-red-700 text-white shadow-sm dark:bg-error-dark dark:text-black dark:hover:bg-opacity-90";
      break;
    case 'ghost':
      variantClasses = "bg-transparent text-gray-600 hover:bg-gray-100 dark:text-text-medium dark:hover:bg-surface-3 dark:hover:text-text-high";
      break;
  }

  if (disabled) {
      variantClasses += " opacity-50 dark:opacity-30";
  }

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;

  return (
    <button 
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className={`animate-spin border-2 border-current border-t-transparent rounded-full ${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'}`} />}
      {!isLoading && Icon && <Icon size={iconSize} />}
      {children}
    </button>
  );
};