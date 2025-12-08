import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Sell from './pages/Sell';
import { Login, Register } from './pages/Auth';
import { About, Privacy, Terms } from './pages/Static';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in">
    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
    <h2 className="text-2xl text-white font-bold mb-4">الصفحة غير موجودة</h2>
    <p className="text-gray-400 mb-8 max-w-md mx-auto">عذراً، الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها.</p>
    <Link to="/" className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-red-900/20 active:scale-95 transform">
        العودة للرئيسية
    </Link>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="sell" element={<Sell />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;