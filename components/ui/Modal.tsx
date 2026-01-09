import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode; 
  footer?: React.ReactNode; 
}> = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity dark:bg-black/70" 
        onClick={onClose} 
      />
      {/* Dialog */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-transparent dark:bg-surface-2 dark:border-white/10 dark:shadow-dark-l2">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white dark:bg-surface-2 dark:border-borderColor-dark">
          <h3 className="font-bold text-lg text-gray-900 dark:text-text-high">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-surface-3 dark:hover:text-text-high">
             <X size={20} />
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto dark:text-text-medium">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 border-t border-gray-100 dark:bg-surface-2 dark:border-borderColor-dark">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};