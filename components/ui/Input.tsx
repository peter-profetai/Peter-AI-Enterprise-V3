import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string, error?: string, icon?: any }> = ({ label, error, className = '', icon: Icon, ...props }) => (
  <div className="flex flex-col gap-1.5">
    {label && <label className="text-sm font-semibold text-gray-700 dark:text-text-high">{label}</label>}
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-text-disable">
          <Icon size={16} />
        </div>
      )}
      <input 
        className={`w-full px-3 py-2 border rounded-lg transition-all outline-none text-sm
          dark:bg-surface-base dark:text-text-high dark:placeholder-text-disable
          ${Icon ? 'pl-9' : ''}
          ${error 
            ? 'border-error focus:ring-2 focus:ring-error/20 dark:border-error-dark dark:focus:shadow-[0_0_4px_rgba(255,138,128,0.4)]' 
            : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-borderColor-dark-light dark:focus:border-primary dark:focus:ring-0 dark:focus:shadow-glow'
          } ${className}`}
        {...props} 
      />
    </div>
    {error && <span className="text-xs text-error dark:text-error-dark">{error}</span>}
  </div>
);