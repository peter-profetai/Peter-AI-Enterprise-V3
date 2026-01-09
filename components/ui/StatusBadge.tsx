import React from 'react';

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const s = status.toLowerCase();
  let classes = 'bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-text-medium';

  if (['active', 'completed', 'success', 'done', '已解決', 'online', 'deployed'].includes(s)) {
    classes = 'bg-[#d4edda] text-[#155724] dark:bg-success-darkBg dark:text-success-dark'; // Success
  } else if (['running', 'processing', 'in progress', '進行中', 'active', 'indexing'].includes(s)) {
    classes = 'bg-[#EAF6F5] text-[#28AAA0] dark:bg-primary-glow dark:text-primary'; // Brand/Processing
  } else if (['pending', 'waiting', 'queued', 'draft'].includes(s)) {
    classes = 'bg-[#fff3cd] text-[#856404] dark:bg-warning-darkBg dark:text-warning-dark'; // Warning
  } else if (['failed', 'error', 'inactive', 'stopped', 'maintenance'].includes(s)) {
    classes = 'bg-[#f8d7da] text-[#721c24] dark:bg-error-darkBg dark:text-error-dark'; // Error
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold leading-4 ${classes}`}>
      {status}
    </span>
  );
};