import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { Star, Users, Award, MapPin, TrendingUp } from 'lucide-react';
import mascot from '../../imports/open_source_copy.png';

export function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FC8CB0] to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={language === 'ar' ? 'order-1' : 'order-2'}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {t('heroTagline')}
              </h1>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/home/products"
                  className="px-8 py-4 bg-[#FE9A4E] text-white rounded-full font-bold hover:bg-[#FC8CB0] transition-colors text-lg"
                >
                  {t('orderNow')}
                </Link>
                <Link
                  to="/home/story"
                  className="px-8 py-4 bg-transparent border-2 border-[#FC8CB0] text-[#FC8CB0] rounded-full font-bold hover:bg-[#FC8CB0] hover:text-black transition-colors text-lg"
                >
                  {t('learnMore')}
                </Link>
              </div>
            </div>
            <div className={language === 'ar' ? 'order-2' : 'order-1'}>
              <img
                src={mascot}
                alt="El Sayed Qeshta Mascot"
                className="w-full max-w-md mx-auto animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-black py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl text-[#FC8CB0] mx-8">أرز بلبن 🍚</span>
          <span className="text-2xl text-white mx-8">•</span>
          <span className="text-2xl text-[#FC8CB0] mx-8">أم علي 🥛</span>
          <span className="text-2xl text-white mx-8">•</span>
          <span className="text-2xl text-[#FC8CB0] mx-8">قشطوطة 🍯</span>
          <span className="text-2xl text-white mx-8">•</span>
          <span className="text-2xl text-[#FC8CB0] mx-8">السيد قشطة بيحبك</span>
          <span className="text-2xl text-white mx-8">•</span>
          <span className="text-2xl text-[#FC8CB0] mx-8">أحلى حلو في مصر</span>
          <span className="text-2xl text-white mx-8">•</span>
        </div>
      </div>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {t('whoIsElSayed')}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {language === 'ar' ? '+٥٠٠٠' : '5000+'}
              </div>
              <div className="text-white/90">
                {language === 'ar' ? 'عميل سعيد' : 'Happy Customers'}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-[#FE9A4E] to-[#FC8CB0] rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {language === 'ar' ? '٦' : '6'}
              </div>
              <div className="text-white/90">
                {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-[#70C1CD] to-[#FC8CB0] rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {language === 'ar' ? '٣' : '3'}
              </div>
              <div className="text-white/90">
                {language === 'ar' ? 'فروع' : 'Branches'}
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-[#FC8CB0] to-[#70C1CD] rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {language === 'ar' ? '%٩٩' : '99%'}
              </div>
              <div className="text-white/90">
                {language === 'ar' ? 'رضا العملاء' : 'Satisfaction'}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/home/story"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#FC8CB0] to-[#FE9A4E] text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              {t('readFullStory')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
            {t('featuredProducts')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              name={t('riceWithMilk')}
              description={t('riceDesc')}
              price={45}
              image="https://images.unsplash.com/photo-1600676626897-eb2fb18a21e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            />
            <ProductCard
              name={t('omAli')}
              description={t('omAliDesc')}
              price={60}
              image="https://images.unsplash.com/photo-1687162274238-417d6cbae5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            />
            <ProductCard
              name={t('qashtota')}
              description={t('qashtotaDesc')}
              price={55}
              image="https://images.unsplash.com/photo-1514849302-984523450cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      {/* Why El Sayed */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FC8CB0] via-[#FE9A4E] to-[#70C1CD]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#FC8CB0]">
            {t('whyElSayed')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-3 text-[#FC8CB0]">
                {t('freshIngredients')}
              </h3>
              <p className="text-lg">{t('freshDesc')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center">
              <div className="text-6xl mb-4">👵</div>
              <h3 className="text-2xl font-bold mb-3 text-[#FC8CB0]">
                {t('grandmaRecipes')}
              </h3>
              <p className="text-lg">{t('recipesDesc')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-3 text-[#FC8CB0]">
                {t('loveInDessert')}
              </h3>
              <p className="text-lg">{t('loveDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FAE7E8] relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
            {t('whatPeopleSay')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FE9A4E] text-[#FE9A4E]" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                "{t('testimonial1')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] flex items-center justify-center text-white font-bold text-xl">
                  {language === 'ar' ? 'أ' : 'A'}
                </div>
                <div>
                  <p className="font-bold text-black">{t('customer1')}</p>
                  <p className="text-sm text-gray-600">{t('city1')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FE9A4E] text-[#FE9A4E]" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                "{t('testimonial2')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] flex items-center justify-center text-white font-bold text-xl">
                  {language === 'ar' ? 'م' : 'M'}
                </div>
                <div>
                  <p className="font-bold text-black">{t('customer2')}</p>
                  <p className="text-sm text-gray-600">{t('city2')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FE9A4E] text-[#FE9A4E]" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                "{t('testimonial3')}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] flex items-center justify-center text-white font-bold text-xl">
                  {language === 'ar' ? 'خ' : 'K'}
                </div>
                <div>
                  <p className="font-bold text-black">{t('customer3')}</p>
                  <p className="text-sm text-gray-600">{t('city3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={mascot}
          alt="Mascot"
          className="absolute bottom-0 right-0 w-32 h-32 opacity-50"
        />
      </section>
    </div>
  );
}
