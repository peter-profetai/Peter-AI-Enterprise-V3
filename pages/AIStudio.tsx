import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { AppType } from '../types';
import { Compass, Layout, Database, Bot, Settings, Sliders } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLayout } from '../contexts/LayoutContext';
import { ExploreView } from './ai-studio/components/ExploreView';
import { WorkspaceView } from './ai-studio/components/WorkspaceView';
import { KnowledgeView } from './ai-studio/components/KnowledgeView';
import { AssistantsView } from './ai-studio/components/AssistantsView';
import { ModuleSettingsView } from './ai-studio/components/ModuleSettingsView';
import { SystemSettingsView } from './ai-studio/components/SystemSettingsView';

type ViewState = 'explore' | 'workspace' | 'knowledge' | 'assistants' | 'module-settings' | 'system-settings';

export const AIStudio: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ViewState>('explore');
  const { layoutMode } = useLayout();

  // Sidebar Item Component
  const SidebarItem = ({ id, label, icon: Icon }: { id: ViewState, label: string, icon: any }) => {
    const isActive = activeModule === id;
    return (
      <button
        onClick={() => setActiveModule(id)}
        className={`relative w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition-all duration-200 group
          ${isActive ? 'bg-primary-light text-primary dark:bg-primary/20 dark:text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'}
        `}
      >
        {isActive && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />}
        <Icon size={18} className={isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600 dark:text-slate-500 dark:group-hover:text-slate-300'} />
        {label}
      </button>
    );
  };

  const StudioSidebar = (
    <div className="h-full flex flex-col py-6 bg-white dark:bg-slate-900">
      <div className="px-6 mb-8 flex items-center gap-2 text-gray-900 dark:text-white font-bold text-xl">
        <Bot className="text-primary" /> AI Studio
      </div>
      <div className="flex-1 space-y-1 overflow-y-auto">
        <div className="px-6 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider dark:text-slate-500">應用</div>
        <SidebarItem id="explore" label="探索 (Explore)" icon={Compass} />
        
        <div className="px-6 py-2 mt-6 text-xs font-bold text-gray-400 uppercase tracking-wider dark:text-slate-500">開發</div>
        <SidebarItem id="workspace" label="工作空間 (Workspace)" icon={Layout} />
        <SidebarItem id="knowledge" label="知識庫 (Knowledge)" icon={Database} />
        <SidebarItem id="assistants" label="助手 (Assistants)" icon={Bot} />
        
        <div className="px-6 py-2 mt-6 text-xs font-bold text-gray-400 uppercase tracking-wider dark:text-slate-500">管理</div>
        <SidebarItem id="module-settings" label="模組設定" icon={Sliders} />
        <SidebarItem id="system-settings" label="系統設定" icon={Settings} />
      </div>
    </div>
  );

  return (
    <MainLayout activeApp={AppType.AI_STUDIO} sidebar={StudioSidebar}>
      <div className={`${layoutMode === 'centered' ? 'max-w-7xl mx-auto' : 'w-full'} h-full`}>
        {activeModule === 'explore' && <ExploreView />}
        {activeModule === 'workspace' && <WorkspaceView />}
        {activeModule === 'knowledge' && <KnowledgeView />}
        {activeModule === 'assistants' && <AssistantsView />}
        {activeModule === 'module-settings' && <ModuleSettingsView />}
        {activeModule === 'system-settings' && <SystemSettingsView />}
      </div>
    </MainLayout>
  );
};