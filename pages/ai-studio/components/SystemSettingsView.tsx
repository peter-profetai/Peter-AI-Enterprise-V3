import React from 'react';
import { Key, Database, Folder } from 'lucide-react';
import { Card, Input, Button, StatusBadge } from '../../../components/SharedComponents';

export const SystemSettingsView = () => (
    <div className="space-y-6 animate-in fade-in">
       <Card title="模型供應商 (Model Providers)">
          <div className="space-y-4">
            <Input label="OpenAI API Key" type="password" placeholder="sk-..." icon={Key} />
            <Input label="Anthropic API Key" type="password" placeholder="sk-ant-..." icon={Key} />
            <div className="flex justify-end">
               <Button size="sm">驗證並儲存</Button>
            </div>
          </div>
       </Card>

       <Card title="MCP 伺服器 (Model Context Protocol)">
          <div className="mb-4 text-sm text-gray-600 dark:text-slate-300 bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-100 dark:border-blue-800">
             MCP 是一種標準協議，允許 AI 安全地連接至本地數據庫或外部工具。
             <a href="#" className="text-primary ml-1 hover:underline">了解更多</a>
          </div>
          <div className="space-y-3">
             <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center gap-4">
                   <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                      <Database size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">PostgreSQL Connector</h4>
                      <p className="text-xs text-gray-500">localhost:5432</p>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <StatusBadge status="Connected" />
                   <Button variant="ghost" size="sm">設定</Button>
                </div>
             </div>
             
             <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-lg opacity-60">
                <div className="flex items-center gap-4">
                   <div className="p-2 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 rounded">
                      <Folder size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Google Drive MCP</h4>
                      <p className="text-xs text-gray-500">未連接</p>
                   </div>
                </div>
                <Button variant="secondary" size="sm">連接</Button>
             </div>
          </div>
       </Card>
    </div>
);