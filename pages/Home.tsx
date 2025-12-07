import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ShoppingCart, Info, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden bg-dark">
        {/* Content Side */}
        <div className="container mx-auto px-4 z-20 relative h-full flex items-center">
            <div className="w-full md:w-1/2 text-right">
                <div className="inline-block px-4 py-1 bg-red-900/30 border border-primary/30 text-primary rounded-full text-sm font-bold mb-6">
                    الخيار التكتيكي الأول
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    POWER <span className="text-primary">PLUS</span><br/>
                    <span className="text-2xl md:text-4xl mt-2 block text-gray-200">أقوى متجر إلكتروني للأسلحة ومستلزماتها</span>
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                    تسوق الآن واحصل على أفضل العروض على الأسلحة النارية، ومعدات الصيد، والإكسسوارات العسكرية بأمان وموثوقية عالية.
                </p>
                <div className="flex gap-4">
                    <Link 
                    to="/products" 
                    className="px-8 py-3 bg-primary hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-red-900/20 flex items-center gap-2"
                    >
                    تصفح المتجر <ArrowLeft size={20} />
                    </Link>
                </div>
            </div>
        </div>

        {/* Image Side (Background) */}
        <div className="absolute top-0 left-0 w-full md:w-2/3 h-full z-10 md:mask-image-linear-gradient">
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent md:via-dark/20"></div>
            <img 
                src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=2070" 
                alt="Tactical Gear" 
                className="w-full h-full object-cover opacity-60 md:opacity-100"
            />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10 border-b border-gray-800 pb-4">
             <div>
                <h2 className="text-3xl font-bold text-white mb-2">أحدث المنتجات</h2>
                <p className="text-gray-400">تشكيلة واسعة من أفضل الأسلحة والمعدات</p>
             </div>
             <Link to="/products" className="text-primary hover:text-white transition-colors flex items-center gap-1 text-sm font-bold">
                عرض الكل <ArrowLeft size={16} />
             </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="group bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-red-900/10 flex flex-col">
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
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.oldPrice && (
                            <span className="text-sm text-gray-500 line-through decoration-red-500/50">${product.oldPrice}</span>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white py-2 rounded-md font-medium text-sm transition-colors">
                            <ShoppingCart size={16} /> إضافة للسلة
                        </button>
                        <Link to={`/product/${product.id}`} className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white py-2 rounded-md font-medium text-sm transition-colors">
                            <Info size={16} /> التفاصيل
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 bg-dark border-t border-gray-800">
         <div className="container mx-auto px-4">
            <h3 className="text-center text-xl font-bold text-white mb-8">وسائل الدفع المتاحة</h3>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {/* Cash */}
                <PaymentMethod icon={<Banknote />} label="الدفع عند الاستلام" color="text-green-500" />
                
                {/* Local Banks/Wallets (Simulated with badges) */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border border-gray-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                    <span className="font-bold text-blue-400">Kuraimi</span>
                    <span className="text-xs text-gray-500">كريمي</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border border-gray-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                    <span className="font-bold text-orange-400">OneCash</span>
                    <span className="text-xs text-gray-500">ون كاش</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border border-gray-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                    <span className="font-bold text-purple-400">Wasel</span>
                    <span className="text-xs text-gray-500">واصل</span>
                </div>

                {/* International */}
                <PaymentMethod icon={<CreditCard />} label="Visa / MasterCard" color="text-blue-500" />
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border border-gray-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                    <span className="font-bold text-blue-600">PayPal</span>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const PaymentMethod: React.FC<{ icon: React.ReactNode, label: string, color?: string }> = ({ icon, label, color }) => (
    <div className="flex items-center gap-2 px-4 py-3 bg-surface border border-gray-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
        <span className={color || "text-gray-300"}>{icon}</span>
        <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
);

export default Home;