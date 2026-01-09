import React, { useState } from 'react';
import { Search, Globe, FileText, Code, MessageSquare, Play, Zap, CheckCircle, RefreshCw } from 'lucide-react';
import { Button, Input, Modal } from '../../../components/SharedComponents';

const TEMPLATES = [
  { id: 't1', title: "公司研究助手", icon: Globe, desc: "輸入公司名稱，自動爬取新聞、財報並生成結構化報告。", inputs: ['company_name', 'focus_area'] },
  { id: 't2', title: "財報分析專家", icon: FileText, desc: "上傳 PDF 財報，提取關鍵財務比率與風險評估。", inputs: ['report_file', 'fiscal_year'] },
  { id: 't3', title: "Python 資料清洗", icon: Code, desc: "生成用於資料前處理的 Python 腳本，包含 Pandas 操作。", inputs: ['data_description'] },
  { id: 't4', title: "RAG 客服機器人", icon: MessageSquare, desc: "基於知識庫回答客戶問題的標準範本。", inputs: [] },
];

export const ExploreView = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">探索 (Explore)</h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">從應用市集快速啟用 AI Agent，或將其作為開發模板。</p>
        </div>
        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="搜尋 Agent 範本..." 
            className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-slate-700 dark:bg-slate-800 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedTemplate(item)}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-l2 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-light dark:bg-primary/20 text-primary flex items-center justify-center mb-4">
              <item.icon size={24} />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">{item.desc}</p>
            <div className="flex items-center text-primary text-sm font-semibold">
              啟用 Agent <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Run Agent Modal */}
      <Modal 
        isOpen={!!selectedTemplate} 
        onClose={() => { setSelectedTemplate(null); setIsRunning(false); }}
        title={selectedTemplate?.title || '執行 Agent'}
        footer={
          <>
            <Button variant="secondary" onClick={() => setSelectedTemplate(null)}>取消</Button>
            <Button variant="primary" icon={Play} isLoading={isRunning} onClick={() => setIsRunning(true)}>
              {isRunning ? '生成報告中...' : '執行工作流'}
            </Button>
          </>
        }
      >
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-slate-300 text-sm">{selectedTemplate?.desc}</p>
          
          {selectedTemplate?.inputs.length > 0 && (
            <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700 space-y-4">
              <h4 className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide">輸入變數 (Input Variables)</h4>
              {selectedTemplate.inputs.map((input: string) => (
                <Input key={input} label={input.replace('_', ' ').toUpperCase()} placeholder={`請輸入 ${input}...`} />
              ))}
            </div>
          )}

          {isRunning && (
            <div className="bg-primary-light/30 border border-primary/20 rounded-lg p-4">
               <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                 <Zap size={16} className="animate-pulse" />
                 AI 工作流執行中...
               </div>
               <div className="space-y-3">
                 <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-slate-300">
                    <CheckCircle size={12} className="text-success" /> <span>搜尋 Google 資訊...</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-slate-300">
                    <CheckCircle size={12} className="text-success" /> <span>讀取知識庫文件...</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-primary font-bold animate-pulse">
                    <RefreshCw size={12} className="animate-spin" /> <span>LLM 正在撰寫報告...</span>
                 </div>
               </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};