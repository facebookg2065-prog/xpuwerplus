import React, { useState } from 'react';
import { Upload, DollarSign, Type, FileText } from 'lucide-react';

const Sell: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send data to backend would go here
  };

  if (submitted) {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-10 h-10 border-4 border-green-500 rounded-full border-t-transparent animate-spin" style={{ animationDuration: '0.5s', borderTopColor: 'transparent', animation: 'none' }}>
                    <svg className="w-full h-full text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">تم استلام طلبك!</h2>
            <p className="text-gray-400 mb-8 max-w-md">سيتم مراجعة إعلانك من قبل فريقنا للتأكد من مطابقته للشروط والأحكام قبل نشره على الموقع.</p>
            <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-surface border border-gray-700 rounded-lg text-white hover:border-primary transition-colors">إضافة إعلان آخر</button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">اعلن عن سلاحك</h2>
            <p className="text-gray-400">قم ببيع سلاحك بطريقة آمنة وسهلة. املأ النموذج التالي.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-2xl border border-gray-800 shadow-xl space-y-6">
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Type size={16} /> اسم السلاح
            </label>
            <input 
                type="text" 
                required
                placeholder="مثال: Glock 19 Gen 5"
                className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <DollarSign size={16} /> السعر المطلوب ($)
            </label>
            <input 
                type="number" 
                required
                placeholder="0.00"
                className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FileText size={16} /> الوصف الكامل
            </label>
            <textarea 
                rows={4}
                required
                placeholder="اذكر حالة السلاح، الملحقات، وأي تفاصيل أخرى..."
                className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Upload size={16} /> صور السلاح
            </label>
            <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-primary transition-colors bg-dark/50">
                <input 
                    type="file" 
                    multiple 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                />
                <div className="flex flex-col items-center gap-2 text-gray-500">
                    <Upload size={32} />
                    <span className="text-sm">اضغط للرفع أو اسحب الصور هنا</span>
                </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-red-900/20 mt-4">
            نشر الإعلان
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            بنشر هذا الإعلان، أنت توافق على شروط الاستخدام وتؤكد ملكيتك القانونية للسلاح.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sell;