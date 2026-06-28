import { Link, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import logo from '../../imports/44.png';

export function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b-2 border-[#FC8CB0]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3">
            <img src={logo} alt="السيد قشطة" className="h-12 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/home"
              className={`text-lg transition-colors hover:text-[#FC8CB0] ${
                isActive('/home') ? 'text-[#FC8CB0] font-bold' : ''
              }`}
            >
              {t('home')}
            </Link>
            <Link
              to="/home/story"
              className={`text-lg transition-colors hover:text-[#FC8CB0] ${
                isActive('/home/story') ? 'text-[#FC8CB0] font-bold' : ''
              }`}
            >
              {t('ourStory')}
            </Link>
            <Link
              to="/home/products"
              className={`text-lg transition-colors hover:text-[#FC8CB0] ${
                isActive('/home/products') ? 'text-[#FC8CB0] font-bold' : ''
              }`}
            >
              {t('products')}
            </Link>
            <Link
              to="/home/contact"
              className={`text-lg transition-colors hover:text-[#FC8CB0] ${
                isActive('/home/contact') ? 'text-[#FC8CB0] font-bold' : ''
              }`}
            >
              {t('contact')}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FC8CB0] text-black font-bold hover:bg-[#FE9A4E] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
