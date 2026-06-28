import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { OrderModal } from './OrderModal';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ProductCard({ name, description, price, image }: ProductCardProps) {
  const { t } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const isUrl = image.startsWith('http');

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="relative h-64 overflow-hidden bg-gray-50">
          {isUrl ? (
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-8xl">
              {image}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-black mb-1.5">{name}</h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-gray-400 uppercase tracking-wide">{t('price')}</span>
              <span className="text-xl font-bold text-[#FC8CB0]">
                {price} {t('egp')}
              </span>
            </div>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-6 py-2.5 bg-[#FC8CB0] text-white rounded-full font-bold hover:bg-[#FE9A4E] hover:scale-105 transition-all text-sm shadow-sm"
            >
              {t('order')}
            </button>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={name}
        productPrice={price}
        productImage={image}
      />
    </>
  );
}
