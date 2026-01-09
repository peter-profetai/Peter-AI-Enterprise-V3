import React from 'react';

export const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string; action?: React.ReactNode }> = ({ children, className = '', title, action }) => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-l1 transition-shadow duration-300 overflow-hidden dark:bg-surface-1 dark:border-borderColor-dark dark:hover:shadow-none ${className}`}>
    {(title || action) && (
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white dark:bg-surface-1 dark:border-borderColor-dark">
        {title && <h3 className="font-bold text-gray-800 text-lg dark:text-text-high">{title}</h3>}
        {action && <div>{action}</div>}
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);