import React from 'react';
import { LucideIcon } from 'lucide-react';

export const Tabs: React.FC<{ 
  tabs: { id: string; label: string; icon?: LucideIcon }[]; 
  activeTab: string; 
  onChange: (id: any) => void;
  className?: string;
}> = ({ tabs, activeTab, onChange, className = '' }) => (
  <div className={`flex items-center gap-6 border-b border-gray-200 dark:border-borderColor-dark ${className}`}>
    {tabs.map(tab => (
      <button
        key={tab.id}
        onClick={() => onChange(tab.id)}
        className={`relative pb-3 text-sm font-medium transition-colors flex items-center gap-2
          ${activeTab === tab.id ? 'text-primary' : 'text-gray-500 hover:text-gray-800 dark:text-text-medium dark:hover:text-text-high'}
        `}
      >
        {tab.icon && <tab.icon size={16} className={activeTab === tab.id ? 'text-primary' : ''} />}
        <span className={activeTab === tab.id ? 'text-primary' : ''}>{tab.label}</span>
        {activeTab === tab.id && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
        )}
      </button>
    ))}
  </div>
);