import React from 'react';
import { Save, RefreshCw, Bot, Send } from 'lucide-react';
import { Button, Card, Input } from '../../../components/SharedComponents';

export const AssistantsView = () => {
  return (
    <div className="flex gap-6 h-[calc(100vh-8rem)]">
      {/* Configuration Panel */}
      <div className="w-1/2 flex flex-col gap-6 overflow-y-auto pr-2">
        <Card title="助手設定 (Configuration)">
          <div className="space-y-4">
             <Input label="名稱" defaultValue="採購助理" />
             
             <div>
               <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block mb-1">人設 (System Prompt)</label>
               <textarea 
                className="w-full h-32 border border-gray-300 dark:border-slate-700 dark:bg-slate-800 rounded-lg text-sm p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                defaultValue="You are a senior procurement manager. Answer questions based on the attached knowledge base. If the answer is not in the documents, state that you don't know."
               />
               <p className="text-xs text-gray-500 mt-1">定義 AI 的角色與回答規範。</p>
             </div>

             <div>
               <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block mb-1">掛載知識庫 (Knowledge Base)</label>
               <select className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 rounded-lg text-sm p-2 outline-none">
                 <option>企業採購手冊 v3.pdf</option>
                 <option>產品技術規格書</option>
               </select>
             </div>

             <div>
               <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block mb-1">模型選擇 (LLM)</label>
               <div className="grid grid-cols-3 gap-2">
                  {['GPT-4o', 'Claude 3.5', 'Llama 3'].map(m => (
                    <button key={m} className={`px-2 py-2 rounded-lg border text-sm font-medium ${m === 'GPT-4o' ? 'border-primary bg-primary-light dark:bg-primary/20 text-primary' : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'}`}>
                      {m}
                    </button>
                  ))}
               </div>
             </div>
          </div>
        </Card>

        <div className="flex justify-end gap-2">
           <Button variant="secondary">取消</Button>
           <Button icon={Save}>儲存助手</Button>
        </div>
      </div>

      {/* Chat Preview */}
      <div className="w-1/2 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span className="font-bold text-gray-700 dark:text-white text-sm">測試預覽</span>
          </div>
          <Button variant="ghost" size="sm" icon={RefreshCw}>重置對話</Button>
        </div>
        
        <div className="flex-1 bg-[#F8F9FA] dark:bg-slate-950 p-4 space-y-4 overflow-y-auto">
           {/* AI Message */}
           <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-light dark:bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Bot size={18} />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-800 dark:text-slate-200 max-w-[90%]">
                您好！我是您的採購助理。請查看左側設定以調整我的人設與知識庫。有什麼可以幫您的嗎？
              </div>
           </div>

           {/* User Message */}
           <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold">JD</span>
              </div>
              <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[90%]">
                採購單的簽核流程是什麼？
              </div>
           </div>

           {/* AI Thinking */}
           <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-light dark:bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Bot size={18} />
              </div>
              <div className="bg-transparent p-2 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                 <span className="text-xs text-gray-400 ml-1">正在檢索 "企業採購手冊 v3.pdf"...</span>
              </div>
           </div>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
           <div className="relative">
             <input 
               type="text" 
               placeholder="輸入訊息測試..." 
               className="w-full pl-4 pr-10 py-3 border border-gray-200 dark:border-slate-700 rounded-full bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white"
             />
             <button className="absolute right-2 top-2 p-1.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
               <Send size={16} />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};