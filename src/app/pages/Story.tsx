import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';
import mascot from '../../imports/open_source_copy.png';

export function Story() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FC8CB0] to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={language === 'ar' ? 'order-1' : 'order-2'}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {t('storyTitle')}
              </h1>
              <div className="h-2 w-32 bg-[#FC8CB0] rounded-full" />
              <p className="text-2xl mt-6 text-[#FC8CB0]">{t('storyHero')}</p>
            </div>
            <div className={language === 'ar' ? 'order-2' : 'order-1'}>
              <img
                src={mascot}
                alt="El Sayed Qeshta"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 bg-[#FAE7E8]">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Story 1 */}
          <div className="mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-[#FC8CB0]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <h3 className="text-3xl font-bold text-black">{t('story1Title')}</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">{t('story1Text')}</p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-[#FE9A4E]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FE9A4E] to-[#70C1CD] flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <h3 className="text-3xl font-bold text-black">{t('story2Title')}</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">{t('story2Text')}</p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-[#70C1CD]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#70C1CD] to-[#FC8CB0] flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <h3 className="text-3xl font-bold text-black">{t('story3Title')}</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">{t('story3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
            {t('ourValues')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] p-8 rounded-3xl text-white text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">{t('freshness')}</h3>
              <p className="text-lg">{t('freshnessDesc')}</p>
            </div>
            <div className="bg-gradient-to-br from-[#FE9A4E] to-[#70C1CD] p-8 rounded-3xl text-white text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">{t('authenticity')}</h3>
              <p className="text-lg">{t('authenticityDesc')}</p>
            </div>
            <div className="bg-gradient-to-br from-[#70C1CD] to-[#FC8CB0] p-8 rounded-3xl text-white text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">{t('joy')}</h3>
              <p className="text-lg">{t('joyDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FC8CB0]">
            {language === 'ar' ? 'جرب الطعم بنفسك!' : 'Try it yourself!'}
          </h2>
          <Link
            to="/home/products"
            className="inline-block px-12 py-5 bg-[#FE9A4E] text-white rounded-full font-bold hover:bg-[#FC8CB0] transition-colors text-xl"
          >
            {t('orderNow')}
          </Link>
        </div>
      </section>
    </div>
  );
}
