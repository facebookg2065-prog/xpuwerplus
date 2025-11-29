import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Shield, Truck, Check, ArrowRight } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold mb-4">المنتج غير موجود</h2>
            <Link to="/products" className="text-primary hover:underline">العودة للمنتجات</Link>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white">الرئيسية</Link> 
            <span>/</span>
            <Link to="/products" className="hover:text-white">الأسلحة</Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 p-2">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-xl"
            />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium w-fit mb-4">
            {product.category}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
          <div className="text-3xl font-bold text-primary mb-6">${product.price}</div>
          
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-gray-800">
                <Shield className="text-green-500" size={24} />
                <div>
                    <div className="font-bold text-sm text-white">مرخص</div>
                    <div className="text-xs text-gray-500">موافق للقوانين</div>
                </div>
             </div>
             <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-gray-800">
                <Truck className="text-blue-500" size={24} />
                <div>
                    <div className="font-bold text-sm text-white">تسليم آمن</div>
                    <div className="text-xs text-gray-500">إجراءات نقل ملكية</div>
                </div>
             </div>
          </div>

          <div className="space-y-3">
             <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-red-900/20 transition-all transform active:scale-95 text-lg">
                شراء الآن
             </button>
             <Link to="/products" className="w-full block text-center bg-transparent border border-gray-700 text-gray-300 font-bold py-4 rounded-lg hover:border-white hover:text-white transition-colors">
                متابعة التسوق
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;