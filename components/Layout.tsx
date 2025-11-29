import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Shield, Target } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الأسلحة', path: '/products' },
    { name: 'اعلن عن سلاحك', path: '/sell' },
    { name: 'من نحن', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-dark text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-surface border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Target className="text-primary w-8 h-8 group-hover:rotate-45 transition-transform" />
            <span className="text-2xl font-bold tracking-wider text-white">POWER <span className="text-primary">PLUS</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-1 hover:text-primary transition-colors">
               <User size={18} />
               <span>دخول</span>
            </Link>
            <Link to="/register" className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-bold shadow-lg shadow-red-900/20">
              تسجيل جديد
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface border-t border-gray-800 p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-center ${
                  isActive(link.path) ? 'text-primary font-bold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-gray-800">
               <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 border border-gray-700 rounded-md">تسجيل الدخول</Link>
               <Link to="/register" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 bg-primary rounded-md font-bold">إنشاء حساب</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">POWER <span className="text-primary">PLUS</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                وجهتك الأولى لبيع وشراء المعدات التكتيكية والأسلحة المرخصة بشكل قانوني وآمن.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/products" className="hover:text-primary">جميع المنتجات</Link></li>
                <li><Link to="/sell" className="hover:text-primary">اعلن عن سلاحك</Link></li>
                <li><Link to="/login" className="hover:text-primary">حسابي</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">قانوني</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/privacy" className="hover:text-primary">سياسة الخصوصية</Link></li>
                <li><Link to="/terms" className="hover:text-primary">الشروط والأحكام</Link></li>
                <li><div className="flex items-center justify-center md:justify-start gap-2 mt-2"><Shield size={16} className="text-green-500" /> <span>مرخص ومعتمد</span></div></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
            &copy; 2025 POWER PLUS. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};