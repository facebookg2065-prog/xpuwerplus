import React from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';

export const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">تسجيل الدخول</h2>
        
        <form className="space-y-5">
          <div className="relative">
            <User className="absolute right-3 top-3.5 text-gray-500" size={20} />
            <input 
                type="text" 
                placeholder="اسم المستخدم" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute right-3 top-3.5 text-gray-500" size={20} />
            <input 
                type="password" 
                placeholder="كلمة المرور" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-red-900/20">
            دخول
          </button>
        </form>

        <div className="mt-6 text-center">
            <Link to="/register" className="text-sm text-gray-400 hover:text-white transition-colors">
                لا تمتلك حساباً؟ <span className="text-primary font-bold">إنشاء حساب جديد</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export const Register: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">إنشاء حساب</h2>
        
        <form className="space-y-5">
          <div className="relative">
             <User className="absolute right-3 top-3.5 text-gray-500" size={20} />
             <input 
                type="text" 
                placeholder="الاسم الكامل" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="relative">
             <User className="absolute right-3 top-3.5 text-gray-500" size={20} />
             <input 
                type="text" 
                placeholder="اسم المستخدم" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="relative">
             <Mail className="absolute right-3 top-3.5 text-gray-500" size={20} />
             <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute right-3 top-3.5 text-gray-500" size={20} />
            <input 
                type="password" 
                placeholder="كلمة المرور" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-red-900/20">
            تسجيل
          </button>
        </form>

        <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-gray-400 hover:text-white transition-colors">
                لديك حساب بالفعل؟ <span className="text-primary font-bold">تسجيل الدخول</span>
            </Link>
        </div>
      </div>
    </div>
  );
};