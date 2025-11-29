import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingCart } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">الأسلحة المتوفرة</h2>
                <p className="text-gray-400">تصفح أحدث الإضافات في المتجر</p>
            </div>
            {/* Filter Placeholder - Visual Only */}
            <div className="mt-4 md:mt-0 flex gap-2">
                <button className="px-4 py-2 bg-surface border border-gray-700 rounded-md text-sm text-gray-300 hover:border-primary">الكل</button>
                <button className="px-4 py-2 bg-surface border border-gray-700 rounded-md text-sm text-gray-300 hover:border-primary">بنادق</button>
                <button className="px-4 py-2 bg-surface border border-gray-700 rounded-md text-sm text-gray-300 hover:border-primary">مسدسات</button>
            </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`} 
            className="group bg-surface rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-red-900/10 block"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {product.category}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">${product.price}</span>
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ShoppingCart size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;