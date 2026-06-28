import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeechBubble } from '../components/SpeechBubble';
import { MapPin, Phone, Mail } from 'lucide-react';
import mascot from '../../imports/open_source_copy.png';

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'ar' ? 'شكراً لرسالتك! سنرد عليك قريباً 😊' : 'Thank you for your message! We will reply soon 😊');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#70C1CD] to-[#FC8CB0] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('contactTitle')}
          </h1>
          <div className="h-2 w-32 bg-white rounded-full mx-auto" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#FAE7E8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Mascot & Message */}
            <div className={language === 'ar' ? 'order-2 lg:order-1' : 'order-1'}>
              <img
                src={mascot}
                alt="El Sayed Qeshta"
                className="w-full max-w-md mx-auto mb-8"
              />
              <SpeechBubble text={t('contactHero')} position={language === 'ar' ? 'right' : 'left'} />
            </div>

            {/* Right Side - Form */}
            <div className={language === 'ar' ? 'order-1 lg:order-2' : 'order-2'}>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-bold text-black mb-2">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-full border-2 border-[#FC8CB0] focus:outline-none focus:ring-2 focus:ring-[#FE9A4E] bg-white text-black"
                      placeholder={t('name')}
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-black mb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-full border-2 border-[#FC8CB0] focus:outline-none focus:ring-2 focus:ring-[#FE9A4E] bg-white text-black"
                      placeholder={t('phone')}
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-black mb-2">
                      {t('message')}
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-6 py-4 rounded-3xl border-2 border-[#FC8CB0] focus:outline-none focus:ring-2 focus:ring-[#FE9A4E] bg-white text-black resize-none"
                      placeholder={t('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#FE9A4E] text-white rounded-full font-bold hover:bg-[#FC8CB0] transition-colors text-lg shadow-lg"
                  >
                    {t('sendMessage')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FC8CB0] to-[#FE9A4E] p-8 rounded-3xl text-white text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t('address')}</h3>
              <p className="text-lg">{t('addressText')}</p>
            </div>

            <div className="bg-gradient-to-br from-[#FE9A4E] to-[#70C1CD] p-8 rounded-3xl text-white text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {language === 'ar' ? 'الهاتف' : 'Phone'}
              </h3>
              <p className="text-lg" dir="ltr">+20 123 456 7890</p>
            </div>

            <div className="bg-gradient-to-br from-[#70C1CD] to-[#FC8CB0] p-8 rounded-3xl text-white text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </h3>
              <p className="text-lg">hello@elsayedqeshta.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
