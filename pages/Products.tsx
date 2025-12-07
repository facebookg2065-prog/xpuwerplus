import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingCart, Info } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('cat');

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-surface p-6 rounded-xl border border-gray-800">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">الأسلحة المتوفرة</h2>
                <p className="text-gray-400">
                    {categoryFilter ? `عرض نتائج: ${getCategoryName(categoryFilter)}` : 'تصفح جميع المنتجات المتاحة'}
                </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
                <button className="px-4 py-2 bg-dark border border-gray-700 rounded-md text-sm text-gray-300 hover:border-primary hover:text-white transition-colors">الأحدث</button>
                <button className="px-4 py-2 bg-dark border border-gray-700 rounded-md text-sm text-gray-300 hover:border-primary hover:text-white transition-colors">الأعلى سعراً</button>
                <button className="px-4 py-2 bg-dark border border-gray-700 rounded-md text-sm text-gray-300 hover:border-primary hover:text-white transition-colors">الأقل سعراً</button>
            </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="group bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-red-900/10 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {product.oldPrice && (
                 <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                 </div>
              )}
               <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {product.category}
              </div>
            </div>
            
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
              
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through decoration-red-500/50">${product.oldPrice}</span>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white py-2 rounded-md font-medium text-sm transition-colors">
                        <ShoppingCart size={16} /> إضافة
                    </button>
                    <Link to={`/product/${product.id}`} className="flex items-center justify-center gap-2 bg-dark border border-gray-700 hover:bg-gray-700 text-gray-300 hover:text-white py-2 rounded-md font-medium text-sm transition-colors">
                        <Info size={16} /> التفاصيل
                    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getCategoryName(slug: string | null) {
    switch(slug) {
        case 'firearms': return 'الأسلحة النارية';
        case 'hunting': return 'أسلحة الصيد';
        case 'accessories': return 'الإكسسوارات العسكرية';
        case 'protection': return 'معدات الحماية';
        case 'tactical': return 'الأدوات التكتيكية';
        case 'offers': return 'العروض الخاصة';
        default: return '';
    }
}

export default Products;