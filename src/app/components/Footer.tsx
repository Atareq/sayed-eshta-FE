import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Facebook } from 'lucide-react';
import logo from '../../imports/44.png';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white border-t-4 border-[#FC8CB0]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="السيد قشطة" className="h-16 w-auto" />
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FC8CB0] flex items-center justify-center text-black hover:bg-[#FE9A4E] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FC8CB0] flex items-center justify-center text-black hover:bg-[#FE9A4E] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xl font-bold text-[#FC8CB0] mb-2">{t('quickLinks')}</h3>
            <Link to="/home" className="hover:text-[#FC8CB0] transition-colors">
              {t('home')}
            </Link>
            <Link to="/home/story" className="hover:text-[#FC8CB0] transition-colors">
              {t('ourStory')}
            </Link>
            <Link to="/home/products" className="hover:text-[#FC8CB0] transition-colors">
              {t('products')}
            </Link>
            <Link to="/home/contact" className="hover:text-[#FC8CB0] transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-xl font-bold text-[#FC8CB0] mb-2">{t('followUs')}</h3>
            <p className="text-sm">@elsayedqeshta</p>
            <p className="text-sm">#السيد_قشطة</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#FC8CB0] text-center">
          <p className="text-sm">{t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
