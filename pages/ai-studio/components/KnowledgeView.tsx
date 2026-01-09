import React, { useState } from 'react';
import { ChevronLeft, Upload, Layers, Database, CheckCircle, RefreshCw, FileText, MoreHorizontal, Plus } from 'lucide-react';
import { Button, Card, StatusBadge } from '../../../components/SharedComponents';

const DATASETS = [
  { id: 'kb1', name: '企業採購手冊 v3.pdf', type: 'PDF', chunks: 142, status: 'ready', date: '2 天前' },
  { id: 'kb2', name: '產品技術規格書', type: 'Folder', chunks: 850, status: 'indexing', date: '1 分鐘前' },
];

export const KnowledgeView = () => {
  const [activeDataset, setActiveDataset] = useState<string | null>(null);

  // Detail View for a Dataset
  if (activeDataset) {
    const isIndexing = activeDataset === 'kb2'; // Simulate indexing state for demo
    
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" onClick={() => setActiveDataset(null)} icon={ChevronLeft}>返回列表</Button>
          <div className="h-4 w-px bg-gray-300 mx-2"></div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{isIndexing ? '產品技術規格書' : '企業採購手冊 v3.pdf'}</h2>
          <StatusBadge status={isIndexing ? 'Processing' : 'Active'} />
        </div>

        {/* Processing Pipeline Visualization */}
        <Card title="資料處理管線 (RAG Pipeline)">
           <div className="flex items-center justify-between px-4 md:px-20 py-8 relative">
              {/* Progress Line */}
              <div className="absolute left-20 right-20 top-1/2 h-1 bg-gray-100 dark:bg-slate-700 -z-0">
                 <div className={`h-full bg-primary transition-all duration-1000 ${isIndexing ? 'w-2/3' : 'w-full'}`}></div>
              </div>

              {/* Steps */}
              {[
                  { label: '匯入文件', icon: Upload }, 
                  { label: '切分 (Chunking)', icon: Layers }, 
                  { label: '索引 (Indexing)', icon: Database }, 
                  { label: '完成 (Ready)', icon: CheckCircle }
              ].map((step, i) => {
                 const isCompleted = !isIndexing || i < 2;
                 const isCurrent = isIndexing && i === 2;
                 
                 return (
                   <div key={i} className="flex flex-col items-center gap-3 z-10 bg-white dark:bg-slate-800 px-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                        isCompleted ? 'bg-primary border-primary text-white' : 
                        isCurrent ? 'bg-white dark:bg-slate-800 border-primary text-primary animate-pulse shadow-glow' : 
                        'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 text-gray-300 dark:text-slate-600'
                      }`}>
                         {isCompleted ? <step.icon size={20} /> : isCurrent ? <RefreshCw size={20} className="animate-spin" /> : <span className="text-sm font-bold">{i+1}</span>}
                      </div>
                      <span className={`text-sm font-bold ${isCompleted || isCurrent ? 'text-gray-800 dark:text-white' : 'text-gray-400'}`}>{step.label}</span>
                   </div>
                 );
              })}
           </div>
           <div className="px-6 pb-6 text-center">
              {isIndexing ? (
                  <p className="text-sm text-primary animate-pulse">正在將文字轉換為向量數據 (Vector Embedding)...</p>
              ) : (
                  <p className="text-sm text-success">所有文件已建立索引，可隨時被助手調用。</p>
              )}
           </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card title="資料集統計" className="md:col-span-1">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-50 dark:border-slate-700">
                   <span className="text-sm text-gray-500">文件總數</span>
                   <span className="font-bold text-gray-900 dark:text-white">12</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-50 dark:border-slate-700">
                   <span className="text-sm text-gray-500">切塊 (Chunks) 總數</span>
                   <span className="font-bold text-gray-900 dark:text-white">{isIndexing ? '850 (解析中...)' : '142'}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-50 dark:border-slate-700">
                   <span className="text-sm text-gray-500">Embedding 模型</span>
                   <span className="font-mono text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">text-embedding-3-small</span>
                </div>
              </div>
           </Card>

           <Card title="文件列表" className="md:col-span-2">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-xs uppercase">
                  <tr>
                    <th className="p-3">檔案名稱</th>
                    <th className="p-3">大小</th>
                    <th className="p-3">狀態</th>
                    <th className="p-3 text-right">動作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                  {['Employee_Handbook.pdf', 'Travel_Policy_v3.docx', 'Benefits_Guide.pdf'].map((file, i) => (
                    <tr key={i}>
                      <td className="p-3 flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                        <FileText size={16} className="text-gray-400" /> {file}
                      </td>
                      <td className="p-3 text-gray-500">2.4 MB</td>
                      <td className="p-3"><StatusBadge status="Success" /></td>
                      <td className="p-3 text-right text-gray-400 hover:text-primary cursor-pointer"><MoreHorizontal size={16} /></td>
                    </tr>
                  ))}
                  {isIndexing && (
                     <tr>
                      <td className="p-3 flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                        <FileText size={16} className="text-gray-400" /> New_Product_Spec.pdf
                      </td>
                      <td className="p-3 text-gray-500">5.1 MB</td>
                      <td className="p-3"><StatusBadge status="Processing" /></td>
                      <td className="p-3 text-right text-gray-400"><MoreHorizontal size={16} /></td>
                    </tr>
                  )}
                </tbody>
              </table>
           </Card>
        </div>
      </div>
    );
  }

  // List View
  return (
    <Card title="知識庫 (Knowledge Base)" action={<Button icon={Plus}>新建資料集</Button>}>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
         {DATASETS.map((kb) => (
           <div 
            key={kb.id} 
            onClick={() => setActiveDataset(kb.id)}
            className="border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:border-primary hover:bg-primary-light/10 dark:hover:bg-primary/5 transition-colors flex items-start gap-3 cursor-pointer group"
           >
             <div className="p-2 bg-gray-50 dark:bg-slate-800 rounded text-gray-600 dark:text-slate-400 border border-gray-100 dark:border-slate-700 group-hover:text-primary group-hover:border-primary/20">
               <Database size={20} />
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-start">
                 <h4 className="font-bold text-gray-800 dark:text-white text-sm group-hover:text-primary transition-colors">{kb.name}</h4>
                 <StatusBadge status={kb.status === 'ready' ? 'Active' : 'Processing'} />
               </div>
               <div className="flex gap-2 text-[10px] text-gray-500 mt-2 font-medium uppercase tracking-wide">
                 <span className="bg-gray-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">{kb.type}</span>
                 <span>{kb.chunks} chunks</span>
               </div>
               <p className="text-xs text-gray-400 mt-2">更新於 {kb.date}</p>
             </div>
           </div>
         ))}
       </div>
    </Card>
  );
};