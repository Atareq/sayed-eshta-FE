import {  useEffect, useState  } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ProductCard } from '../components/ProductCard';
import mascot from '../../imports/open_source_copy.png';

import { getCategories, Category } from '../features/products/api/categoriesApi';
import { getProducts, Product } from '../features/products/api/productsApi';

export function Products() {
  const { t } = useLanguage();

  const [activeFilter, setActiveFilter] = useState('all');
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const filters = [
    { id: 'all', label: t('allProducts') },
    ...categories.map((category) => ({
      id: category.id,
      label: t('language') === 'ar' ? category.nameAr : category.name,
    })),
  ];

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') {
      return true;
    }

    return product.categoryId === activeFilter;
  });

  useEffect(() => {
    async function loadProductsPageData() {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);

        setErrorMessage(
          t('language') === 'ar'
            ? 'حدث خطأ أثناء تحميل المنتجات'
            : 'Failed to load products'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProductsPageData();
  }, [t]);
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
    {isLoading && (
      <div className="text-center py-16">
        <p className="text-xl text-gray-400">
          {t('language') === 'ar' ? 'جاري تحميل المنتجات...' : 'Loading products...'}
        </p>
      </div>
    )}

    {errorMessage && !isLoading && (
      <div className="text-center py-16">
        <p className="text-xl text-red-500">{errorMessage}</p>
      </div>
    )}
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
