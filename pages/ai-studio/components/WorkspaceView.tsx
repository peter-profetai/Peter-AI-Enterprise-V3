import React, { useState } from 'react';
import { Layout, Play, Bot, Database, Globe, Code, Workflow, X, Save } from 'lucide-react';
import { Button, Input } from '../../../components/SharedComponents';

export const WorkspaceView = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm animate-in fade-in">
      {/* Toolbar */}
      <div className="h-14 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 bg-white dark:bg-slate-900 z-10">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded text-purple-600 dark:text-purple-400">
             <Layout size={18} />
          </div>
          <h3 className="font-bold text-gray-800 dark:text-white">公司研究助手 (Workflow)</h3>
          <span className="px-2 py-0.5 rounded text-xs bg-warning-bg text-warning-text font-bold uppercase">編輯中</span>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" icon={Play}>試運行 (Test Run)</Button>
          <Button variant="primary" size="sm">發布</Button>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Node Palette (Left) */}
        <div className="w-52 bg-gray-50 dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 flex flex-col py-4 overflow-y-auto">
           <div className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">節點 (Nodes)</div>
           <div className="space-y-1 px-2">
             {[
               { icon: Play, label: '開始 (Start)', color: 'text-primary' },
               { icon: Bot, label: 'LLM 模型', color: 'text-purple-600' },
               { icon: Database, label: '知識庫檢索', color: 'text-blue-600' },
               { icon: Globe, label: '工具 (Tools)', color: 'text-orange-600' },
               { icon: Code, label: '程式碼', color: 'text-gray-600' },
             ].map((node, i) => (
               <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-slate-600 cursor-grab transition-all select-none">
                  <node.icon size={16} className={node.color} />
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">{node.label}</span>
               </div>
             ))}
           </div>
           
           <div className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 mt-6">邏輯 (Logic)</div>
           <div className="space-y-1 px-2">
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-slate-600 cursor-grab transition-all select-none">
                  <Workflow size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">條件判斷 (If/Else)</span>
               </div>
           </div>
        </div>

        {/* Canvas (Center) */}
        <div className="flex-1 bg-[#F8F9FA] dark:bg-slate-950 relative overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="absolute inset-0" 
               style={{ 
                 backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
                 backgroundSize: '24px 24px',
                 opacity: 0.3
               }}>
          </div>

          {/* Connector SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
              </marker>
            </defs>
            <path d="M 300 150 C 360 150, 360 150, 420 150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
            <path d="M 620 150 C 680 150, 680 250, 740 250" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" fill="none" />
          </svg>

          {/* Node 1: Start */}
          <div 
            onClick={() => setSelectedNode('start')}
            className={`absolute top-20 left-20 w-56 bg-white dark:bg-slate-900 rounded-lg shadow-l2 border-2 transition-colors cursor-pointer ${selectedNode === 'start' ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 dark:border-slate-700 hover:border-primary/50'}`}
          >
            <div className="bg-primary-light dark:bg-primary/20 px-3 py-2 rounded-t flex justify-between items-center border-b border-gray-100 dark:border-slate-700">
              <span className="text-xs font-bold text-primary uppercase">Start</span>
              <Play size={14} className="text-primary" />
            </div>
            <div className="p-3">
               <div className="text-xs text-gray-500 font-mono bg-gray-50 dark:bg-slate-800 p-1.5 rounded mb-1">input: company_name</div>
            </div>
            <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full" />
          </div>

          {/* Node 2: Tools (Google Search) */}
          <div 
            onClick={() => setSelectedNode('tools')}
            className={`absolute top-20 left-[420px] w-56 bg-white dark:bg-slate-900 rounded-lg shadow-l2 border-2 transition-colors cursor-pointer ${selectedNode === 'tools' ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 dark:border-slate-700 hover:border-primary/50'}`}
          >
            <div className="bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-t flex justify-between items-center border-b border-orange-100 dark:border-orange-900/30">
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase">Google Search</span>
              <Globe size={14} className="text-orange-600 dark:text-orange-400" />
            </div>
            <div className="p-3">
               <div className="text-xs text-gray-500 truncate">Query: {'{{company_name}} news'}</div>
            </div>
            <div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-white border-2 border-gray-400 rounded-full" />
            <div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full" />
          </div>

          {/* Node 3: LLM */}
          <div 
            onClick={() => setSelectedNode('llm')}
            className={`absolute top-[200px] left-[740px] w-56 bg-white dark:bg-slate-900 rounded-lg shadow-l2 border-2 transition-colors cursor-pointer ${selectedNode === 'llm' ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 dark:border-slate-700 hover:border-primary/50'}`}
          >
             <div className="bg-purple-50 dark:bg-purple-900/20 px-3 py-2 rounded-t flex justify-between items-center border-b border-purple-100 dark:border-purple-900/30">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">LLM Analysis</span>
              <Bot size={14} className="text-purple-600 dark:text-purple-400" />
            </div>
            <div className="p-3 space-y-2">
               <div className="flex justify-between">
                 <span className="text-xs text-gray-500">Model</span>
                 <span className="text-xs font-bold bg-gray-100 dark:bg-slate-800 px-1 rounded dark:text-slate-300">GPT-4 Turbo</span>
               </div>
               <div className="text-[10px] text-gray-400">Prompt: Summarize news...</div>
            </div>
            <div className="absolute -left-1.5 top-8 w-3 h-3 bg-white border-2 border-gray-400 rounded-full" />
          </div>
        </div>

        {/* Properties Panel (Right) */}
        {selectedNode && (
          <div className="w-80 bg-white dark:bg-slate-900 border-l border-gray-200 dark:border-slate-700 flex flex-col animate-in slide-in-from-right duration-200">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-slate-800">
               <h4 className="font-bold text-sm text-gray-800 dark:text-white">節點屬性</h4>
               <button onClick={() => setSelectedNode(null)} className="text-gray-400 hover:text-gray-600"><X size={16}/></button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
               {selectedNode === 'llm' && (
                 <>
                   <Input label="節點名稱" defaultValue="LLM Analysis" />
                   <div>
                     <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block mb-1">模型 (Model)</label>
                     <select className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 rounded-lg text-sm p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                       <option>GPT-4 Turbo</option>
                       <option>Claude 3.5 Sonnet</option>
                       <option>Llama 3 70B</option>
                     </select>
                   </div>
                   <div>
                      <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block mb-1">提示詞 (System Prompt)</label>
                      <textarea className="w-full h-32 border border-gray-300 dark:border-slate-700 dark:bg-slate-800 rounded-lg text-sm p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono" defaultValue="You are a research assistant. Summarize the following search results about {{company_name}}..." />
                   </div>
                 </>
               )}
               {selectedNode === 'tools' && (
                 <>
                   <Input label="節點名稱" defaultValue="Google Search" />
                   <Input label="搜尋查詢 (Query)" defaultValue="{{company_name}} latest news" />
                   <div>
                     <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block mb-1">結果數量限制</label>
                     <input type="range" min="1" max="10" defaultValue="5" className="w-full accent-primary" />
                     <div className="flex justify-between text-xs text-gray-500">
                       <span>1</span>
                       <span>10</span>
                     </div>
                   </div>
                 </>
               )}
               {selectedNode === 'start' && (
                  <>
                    <p className="text-xs text-gray-500 mb-4">定義此工作流的起始觸發與輸入變數。</p>
                    <Input label="變數名稱 (Variable)" defaultValue="company_name" />
                    <Input label="預設測試值" defaultValue="NVIDIA" />
                  </>
               )}
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-slate-800">
              <Button className="w-full" icon={Save}>儲存設定</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};