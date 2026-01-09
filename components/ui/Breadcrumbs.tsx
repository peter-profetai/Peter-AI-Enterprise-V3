import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC<{ items: { label: string, path?: string }[] }> = ({ items }) => (
  <nav className="flex items-center gap-2 text-sm text-gray-500 mb-0 dark:text-text-medium">
    {items.map((item, index) => {
      const isLast = index === items.length - 1;
      return (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className="text-gray-400 dark:text-gray-600" />}
          <span className={`${isLast ? 'font-bold text-gray-900 pointer-events-none dark:text-text-high' : 'hover:text-primary cursor-pointer transition-colors'}`}>
            {item.label}
          </span>
        </React.Fragment>
      );
    })}
  </nav>
);