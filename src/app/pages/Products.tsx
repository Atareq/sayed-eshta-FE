import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ProductCard } from '../components/ProductCard';
import mascot from '../../imports/open_source_copy.png';

export function Products() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('allProducts') },
    { id: 'cold', label: t('cold') },
    { id: 'hot', label: t('hot') },
    { id: 'featured', label: t('featured') },
  ];

  const products = [
    {
      id: 1,
      name: t('riceWithMilk'),
      description: t('riceDesc'),
      price: 45,
      image: 'https://images.unsplash.com/photo-1600676626897-eb2fb18a21e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'cold',
      featured: true,
    },
    {
      id: 2,
      name: t('omAli'),
      description: t('omAliDesc'),
      price: 60,
      image: 'https://images.unsplash.com/photo-1687162274238-417d6cbae5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'hot',
      featured: true,
    },
    {
      id: 3,
      name: t('qashtota'),
      description: t('qashtotaDesc'),
      price: 55,
      image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'cold',
      featured: true,
    },
    {
      id: 4,
      name: t('riceWithMilk') + ' ' + (t('language') === 'ar' ? 'بالمانجو' : 'with Mango'),
      description: t('riceDesc') + ' ' + (t('language') === 'ar' ? 'مع المانجو الطازج' : 'with fresh mango'),
      price: 50,
      image: 'https://images.unsplash.com/photo-1606728099646-68d5a0a4d423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'cold',
      featured: false,
    },
    {
      id: 5,
      name: t('language') === 'ar' ? 'كنافة' : 'Konafa',
      description: t('language') === 'ar' ? 'كنافة طازجة بالقشطة' : 'Fresh Konafa with cream',
      price: 70,
      image: 'https://images.unsplash.com/photo-1778448806279-c718f3d302c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'hot',
      featured: false,
    },
    {
      id: 6,
      name: t('language') === 'ar' ? 'بسبوسة' : 'Basbousa',
      description: t('language') === 'ar' ? 'بسبوسة بالقشطة' : 'Basbousa with cream',
      price: 40,
      image: 'https://images.unsplash.com/photo-1772469625117-412cb49042e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'cold',
      featured: false,
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return product.featured;
    return product.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t('productsTitle')}
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6 sticky top-[73px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex gap-3 justify-center flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-bold transition-all text-sm ${
                  activeFilter === filter.id
                    ? 'bg-[#FC8CB0] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#FAE7E8] hover:text-[#FC8CB0]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 && (
            <p className="text-center text-gray-500 text-sm mb-8">
              {t('language') === 'ar'
                ? `${filteredProducts.length} منتج`
                : `${filteredProducts.length} product${filteredProducts.length > 1 ? 's' : ''}`
              }
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-400">
                {t('language') === 'ar'
                  ? 'لا توجد منتجات في هذه الفئة'
                  : 'No products in this category'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
