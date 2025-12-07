import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, User, Target, Phone, Send, Mail, Shield, Headphones } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const mainCategories = [
    { name: 'الأسلحة النارية', path: '/products?cat=firearms' },
    { name: 'أسلحة الصيد', path: '/products?cat=hunting' },
    { name: 'الإكسسوارات العسكرية', path: '/products?cat=accessories' },
    { name: 'معدات الحماية', path: '/products?cat=protection' },
    { name: 'الأدوات التكتيكية', path: '/products?cat=tactical' },
    { name: 'العروض الخاصة', path: '/products?cat=offers', highlight: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-surface border-b border-gray-800 sticky top-0 z-50">
        
        {/* Top Bar: Logo & Actions */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50">
            <Target className="text-primary w-8 h-8 group-hover:rotate-45 transition-transform" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-white leading-none">POWER <span className="text-primary">PLUS</span></span>
              <span className="text-[10px] text-gray-400 tracking-widest hidden sm:block">TACTICAL GEAR</span>
            </div>
          </Link>

          {/* Search Bar (Hidden on mobile for simplicity in this demo) */}
          <div className="hidden lg:block flex-grow max-w-md mx-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="ابحث عن سلاح أو معدات..." 
                className="w-full bg-dark border border-gray-700 rounded-full py-2 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-sm font-medium">
               <User size={18} />
               <span>دخول / تسجيل</span>
            </Link>
            <Link to="/sell" className="bg-primary hover:bg-red-700 text-white px-5 py-2 rounded-md transition-colors text-sm font-bold shadow-lg shadow-red-900/20 active:scale-95 transform">
              اعلن عن سلاحك
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Bottom Bar: Categories (Desktop) */}
        <div className="hidden md:block border-t border-gray-800 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <nav className="flex justify-center items-center gap-6 lg:gap-8 py-3 flex-wrap">
              {mainCategories.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                    link.highlight ? 'text-red-500 font-bold' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-dark/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'
          }`}
        >
            <nav className="flex flex-col gap-4 text-center">
              {mainCategories.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg py-3 border-b border-gray-800 ${
                    link.highlight ? 'text-primary font-bold' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 mt-6">
                 <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center gap-2 py-3 border border-gray-700 rounded-lg text-white">
                    <User size={18} /> تسجيل الدخول
                 </Link>
                 <Link to="/sell" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center gap-2 py-3 bg-primary rounded-lg text-white font-bold shadow-lg shadow-red-900/20">
                    اعلن عن سلاحك
                 </Link>
              </div>
            </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-800 mt-auto pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center md:text-right">
            
            {/* Brand Info */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center justify-center md:justify-start gap-2">
                <Target className="text-primary" /> POWER <span className="text-primary">PLUS</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
                أقوى متجر إلكتروني للأسلحة ومستلزماتها. نوفر لك الأمان، الجودة، والموثوقية في مكان واحد.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 border-r-2 border-primary pr-2 inline-block md:block">معلومات</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-primary transition-colors block py-1">من نحن</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors block py-1">سياسة الخصوصية</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors block py-1">شروط الاستخدام</Link></li>
              </ul>
            </div>

             {/* Support */}
             <div>
              <h4 className="text-white font-bold mb-4 border-r-2 border-primary pr-2 inline-block md:block">الدعم الفني</h4>
              <ul className="space-y-2 text-sm text-gray-400 flex flex-col items-center md:items-start">
                <li className="flex items-center gap-2 py-1"><Headphones size={16} className="text-primary"/> الدعم الفني</li>
                <li className="flex items-center gap-2 py-1"><Send size={16} className="text-blue-400"/> بوت تلغرام</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 border-r-2 border-primary pr-2 inline-block md:block">تواصل معنا</h4>
              <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
                <li className="flex items-center gap-2 py-1">
                  <Phone size={16} className="text-primary"/>
                  <span dir="ltr">+967 770 000 000</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <Mail size={16} className="text-primary"/>
                  <span>appssaits@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p className="text-center md:text-right">&copy; 2025 POWER PLUS. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-2">
               <Shield size={14} className="text-green-600"/>
               <span>موقع آمن ومرخص</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};