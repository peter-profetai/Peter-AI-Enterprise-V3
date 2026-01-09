import React from 'react';
import { Globe, Code } from 'lucide-react';
import { Card, Button, StatusBadge } from '../../../components/SharedComponents';

export const ModuleSettingsView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in">
       <Card title="模型參數 (Model Parameters)">
          <div className="space-y-6">
             <div>
                <label className="text-sm font-bold text-gray-700 dark:text-slate-300 mb-2 block">Temperature (隨機性)</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full accent-primary" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                   <span>0 (精確)</span>
                   <span className="font-mono text-primary font-bold">0.7</span>
                   <span>1 (創意)</span>
                </div>
             </div>
             <div>
                <label className="text-sm font-bold text-gray-700 dark:text-slate-300 mb-2 block">Max Output Tokens</label>
                <input type="range" min="256" max="4096" step="256" defaultValue="2048" className="w-full accent-primary" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                   <span>256</span>
                   <span className="font-mono text-primary font-bold">2048</span>
                   <span>4096</span>
                </div>
             </div>
             <div>
                <label className="text-sm font-bold text-gray-700 dark:text-slate-300 mb-2 block">Top P</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="1" className="w-full accent-primary" />
             </div>
          </div>
       </Card>

       <Card title="預設工具 (Default Tools)">
          <div className="space-y-3">
             <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded">
                      <Globe size={18} />
                   </div>
                   <div>
                      <div className="font-bold text-gray-800 dark:text-white text-sm">Google Search</div>
                      <div className="text-xs text-gray-500">允許 AI 搜尋即時網路資訊</div>
                   </div>
                </div>
                <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" /></div>
             </div>
             <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 rounded">
                      <Code size={18} />
                   </div>
                   <div>
                      <div className="font-bold text-gray-800 dark:text-white text-sm">Code Interpreter</div>
                      <div className="text-xs text-gray-500">沙盒環境執行 Python 程式碼</div>
                   </div>
                </div>
                <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" /></div>
             </div>
          </div>
       </Card>
    </div>
);