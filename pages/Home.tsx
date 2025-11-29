import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Zap, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10"></div>
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/id/76/1920/1080" 
                alt="Tactical Background" 
                className="w-full h-full object-cover opacity-40 grayscale"
            />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-red-900/30 border border-primary/30 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
             المتجر التكتيكي الأول
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            القوة <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">بين يديك</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            أفضل منصة لبيع وشراء الأسلحة والمعدات التكتيكية بطريقة آمنة، قانونية، وموثوقة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/products" 
              className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2"
            >
              تصفح الأسلحة <ArrowLeft size={20} />
            </Link>
            <Link 
              to="/sell" 
              className="w-full sm:w-auto px-8 py-3 bg-transparent border border-gray-600 hover:border-white text-white rounded-lg font-bold text-lg transition-colors"
            >
              بيع سلاحك
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={40} className="text-primary" />}
              title="آمن وقانوني"
              description="جميع العمليات تتم وفق الأنظمة والقوانين المحلية لضمان سلامة البائع والمشتري."
            />
            <FeatureCard 
              icon={<Zap size={40} className="text-primary" />}
              title="سرعة في العرض"
              description="لوحة تحكم سهلة تتيح لك عرض سلاحك للبيع في دقائق معدودة والوصول لآلاف المهتمين."
            />
            <FeatureCard 
              icon={<Globe size={40} className="text-primary" />}
              title="تغطية واسعة"
              description="نصلك بأكبر شبكة من المهتمين بالأسلحة والمعدات التكتيكية في المنطقة."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-dark p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors text-center group">
    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default Home;