import { X, Phone, MapPin, ShoppingBag, Star, Clock, ShieldCheck, Truck, Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
  productImage: string;
}

export function OrderModal({ isOpen, onClose, productName, productPrice, productImage }: OrderModalProps) {
  const { t, language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  if (!isOpen) return null;

  const totalPrice = productPrice * quantity;
  const freeDelivery = totalPrice >= 100;
  const remainingStock = 8; // عدد القطع المتبقية
  const lowStock = remainingStock <= 10;

  // صور إضافية للمعرض
  const productImages = [productImage, productImage, productImage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكن إضافة كود إرسال الطلب
    const orderMessage = `طلب جديد:
المنتج: ${productName}
الكمية: ${quantity}
السعر الإجمالي: ${totalPrice} ${t('egp')}
الاسم: ${formData.name}
الهاتف: ${formData.phone}
العنوان: ${formData.address}
ملاحظات: ${formData.notes || 'لا يوجد'}`;

    alert(language === 'ar'
      ? '🎉 تم استلام طلبك! سنتواصل معك قريباً'
      : '🎉 Order received! We will contact you soon');
    console.log(orderMessage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200 relative" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Product Hero Image */}
        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          {productImages[selectedImage].startsWith('http') ? (
            <ImageWithFallback
              src={productImages[selectedImage]}
              alt={productName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#FAE7E8] to-[#70C1CD] flex items-center justify-center text-9xl">
              {productImages[selectedImage]}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Image Gallery Thumbnails */}
          <div className="absolute bottom-20 left-4 right-4 flex gap-2 justify-center">
            {productImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? 'border-white scale-110'
                    : 'border-white/40 hover:border-white/80'
                }`}
              >
                {img.startsWith('http') ? (
                  <img src={img} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg">
                    {img}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Special Offer Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              {language === 'ar' ? '🎁 عرض خاص' : '🎁 Special Offer'}
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-4 right-4 flex gap-2 flex-col items-end">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
              <ShieldCheck className="w-3 h-3" />
              {language === 'ar' ? 'مضمون' : 'Guaranteed'}
            </div>
            <div className="bg-[#FE9A4E] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
              <Clock className="w-3 h-3" />
              {language === 'ar' ? 'توصيل سريع' : 'Fast'}
            </div>
          </div>

          {/* Product Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-white text-2xl font-bold mb-2">{productName}</h2>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm">
                {language === 'ar' ? '(٢٤٧+ تقييم)' : '(247+ reviews)'}
              </span>
            </div>
            {lowStock && (
              <div className="inline-flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                <Clock className="w-3 h-3" />
                {language === 'ar' ? `⚡ متبقي ${remainingStock} قطع فقط!` : `⚡ Only ${remainingStock} left!`}
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Live Activity Indicator */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-3 flex items-center gap-3">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            </div>
            <p className="text-sm text-blue-900">
              {language === 'ar'
                ? '🔥 ١٣ شخص يشاهدون هذا المنتج الآن'
                : '🔥 13 people viewing this product now'}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 pb-5 border-b border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-2">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xs font-bold text-gray-700">
                {language === 'ar' ? 'توصيل سريع' : 'Fast Delivery'}
              </p>
              <p className="text-xs text-gray-500">
                {language === 'ar' ? '٣٠ دقيقة' : '30 min'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs font-bold text-gray-700">
                {language === 'ar' ? 'ضمان الجودة' : 'Quality Guaranteed'}
              </p>
              <p className="text-xs text-gray-500">
                {language === 'ar' ? '١٠٠٪' : '100%'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-2">
                <Gift className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-xs font-bold text-gray-700">
                {language === 'ar' ? 'هدية مجانية' : 'Free Gift'}
              </p>
              <p className="text-xs text-gray-500">
                {language === 'ar' ? 'مفاجأة' : 'Surprise'}
              </p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              {language === 'ar' ? 'الكمية' : 'Quantity'}
            </label>
            <div className="bg-gradient-to-r from-[#FAE7E8] to-[#FFF5F0] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md text-gray-700 font-bold transition-all hover:scale-110"
                  >
                    -
                  </button>
                  <span className="text-3xl font-bold text-[#FC8CB0] w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md text-gray-700 font-bold transition-all hover:scale-110"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block mb-1">
                    {language === 'ar' ? 'الإجمالي' : 'Total'}
                  </span>
                  <p className="text-3xl font-bold text-[#FE9A4E]">
                    {totalPrice} {t('egp')}
                  </p>
                </div>
              </div>

              {/* Free Delivery Alert */}
              {freeDelivery ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <p className="text-sm font-bold text-green-700">
                    {language === 'ar' ? '🎉 توصيل مجاني!' : '🎉 Free Delivery!'}
                  </p>
                </div>
              ) : (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
                  <p className="text-xs text-orange-700">
                    {language === 'ar'
                      ? `أضف ${100 - totalPrice} ج.م للحصول على توصيل مجاني`
                      : `Add ${100 - totalPrice} EGP for free delivery`}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {t('name')} *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all"
              placeholder={language === 'ar' ? 'اسمك الكريم' : 'Your name'}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FC8CB0]" />
              {t('phone')} *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all"
              placeholder={language === 'ar' ? '01xxxxxxxxx' : '01xxxxxxxxx'}
              dir="ltr"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FC8CB0]" />
              {t('address')} *
            </label>
            <textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all resize-none"
              placeholder={language === 'ar' ? 'عنوان التوصيل' : 'Delivery address'}
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {language === 'ar' ? 'ملاحظات (اختياري)' : 'Notes (optional)'}
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all resize-none"
              placeholder={language === 'ar' ? 'مثال: أريد تغليف هدايا 🎁' : 'Example: Gift wrapping please 🎁'}
            />
          </div>

          {/* Customer Testimonial */}
          <div className="bg-gradient-to-br from-[#FAE7E8] to-white rounded-2xl p-4 border-2 border-[#FC8CB0]/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] flex items-center justify-center text-white font-bold flex-shrink-0">
                {language === 'ar' ? 'أ' : 'A'}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-sm text-gray-900">
                    {language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed'}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">
                  "{language === 'ar'
                    ? 'طعم رائع! جربته امبارح وطلبته تاني النهاردة 😍'
                    : 'Amazing taste! Tried it yesterday and ordered again today 😍'}"
                </p>
              </div>
            </div>
          </div>

          {/* Limited Time Offer */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-red-600 animate-pulse" />
              <p className="font-bold text-red-700">
                {language === 'ar' ? '🔥 عرض لفترة محدودة!' : '🔥 Limited Time Offer!'}
              </p>
            </div>
            <p className="text-sm text-red-600">
              {language === 'ar'
                ? 'اطلب الآن واحصل على خصم ١٠٪ على طلبك القادم!'
                : 'Order now and get 10% off your next order!'}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 bg-gradient-to-r from-[#FC8CB0] to-[#FE9A4E] text-white rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              {language === 'ar' ? '✨ اطلب الآن - أضمن طلبي!' : '✨ Order Now - Secure My Order!'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FE9A4E] to-[#FC8CB0] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Security & Guarantee */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-green-600">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold">
                {language === 'ar' ? 'دفع آمن' : 'Secure Payment'}
              </span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-1 text-blue-600">
              <Star className="w-4 h-4" />
              <span className="text-xs font-bold">
                {language === 'ar' ? 'استرجاع سهل' : 'Easy Returns'}
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500">
            {language === 'ar'
              ? '🎯 سنتواصل معك خلال دقائق لتأكيد الطلب'
              : '🎯 We will contact you within minutes to confirm'}
          </p>
        </form>
      </div>
    </div>
  );
}
