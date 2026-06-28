import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    ourStory: 'قصتنا',
    products: 'منتجاتنا',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTagline: 'طعم الحلو اللي ينسيك أي حلو تاني 🍮',
    orderNow: 'اطلب دلوقتي',
    learnMore: 'اعرف أكتر',
    
    // About
    whoIsElSayed: 'مين هو السيد قشطة؟',
    aboutText: 'السيد قشطة مش بس حلو... ده تجربة! إحنا بنقدم أشهى الحلويات المصرية الأصيلة بوصفات جدتنا وخامات طازجة كل يوم.',
    readFullStory: 'اعرف القصة كلها',
    
    // Products
    featuredProducts: 'منتجاتنا المميزة',
    riceWithMilk: 'أرز بلبن',
    riceDesc: 'أرز بلبن كريمي محضر بالحليب الطازج والقرفة',
    omAli: 'أم علي',
    omAliDesc: 'أم علي الأصلية بالمكسرات والزبيب',
    qashtota: 'قشطوطة',
    qashtotaDesc: 'قشطوطة خاصة مع العسل الطبيعي',
    order: 'اطلب',
    egp: 'ج.م',
    price: 'السعر',
    
    // Why Us
    whyElSayed: 'ليه السيد قشطة؟',
    freshIngredients: 'خامات طازجة',
    freshDesc: 'كل المكونات طازجة يوميًا',
    grandmaRecipes: 'وصفات جدتنا',
    recipesDesc: 'وصفات أصيلة متوارثة',
    loveInDessert: 'ودنا في الحلو',
    loveDesc: 'نصنع كل قطعة بحب',
    
    // Testimonials
    whatPeopleSay: 'الناس بتقول إيه',
    testimonial1: 'أحلى أرز بلبن جربته في حياتي! السيد قشطة فعلاً عنده السر',
    testimonial2: 'أم علي بتاعتهم تحفة... بنطلبها كل أسبوع',
    testimonial3: 'القشطوطة دي إدمان! مش هتقدر توقف تاكل',
    customer1: 'أحمد محمد',
    customer2: 'مريم حسن',
    customer3: 'خالد سعيد',
    city1: 'القاهرة',
    city2: 'الإسكندرية',
    city3: 'الجيزة',
    
    // Footer
    followUs: 'تابعنا',
    quickLinks: 'روابط سريعة',
    rights: '© 2026 السيد قشطة. كل الحقوق محفوظة',
    
    // Story Page
    storyTitle: 'قصتنا',
    storyHero: 'رحلة السيد قشطة',
    story1Title: 'البداية',
    story1Text: 'كان في بقرة واحدة عندها سر الحلو الحقيقي... بقرة مش عادية، بقرة بتحب تجرب وتبتكر في عالم الحلويات.',
    story2Title: 'الرحلة',
    story2Text: 'السيد قشطة قرر يشارك حلاوته مع العالم. بدأ بوصفة واحدة... أرز بلبن زي ما جدتنا كانت بتعمله.',
    story3Title: 'النجاح',
    story3Text: 'ومن يومها... الناس بتفضل تيجي تاني وتاني. السر؟ الحب في كل قطعة والخامات الطازجة كل يوم.',
    ourValues: 'قيمنا',
    freshness: 'الطازجية',
    freshnessDesc: 'كل حاجة بنعملها طازجة يوميًا',
    authenticity: 'الأصالة',
    authenticityDesc: 'وصفات مصرية أصيلة ١٠٠٪',
    joy: 'البهجة',
    joyDesc: 'بنشارك السعادة مع كل عميل',
    
    // Products Page
    productsTitle: 'منتجاتنا',
    allProducts: 'الكل',
    cold: 'باردة',
    hot: 'ساخنة',
    featured: 'مميزة',
    
    // Contact Page
    contactTitle: 'تواصل معنا',
    contactHero: 'كلمنا! إحنا بنرد زي القشطة — حلو وسريع 😄',
    name: 'الاسم',
    phone: 'رقم الموبايل',
    message: 'الرسالة',
    sendMessage: 'ابعت رسالتك',
    address: 'العنوان',
    addressText: 'شارع الحلويات، القاهرة، مصر',
    language: 'ar',
    
    // Registration Page
    welcomeBubble: 'أهلاً! أنا السيد قشطة 👋 قبل ما تدخل عالم الحلو، قولي عنك شوية!',
    firstName: 'الاسم الأول',
    mobile: 'رقم الموبايل',
    city: 'المدينة',
    favoriteDessert: 'إيه أكتر حلو بتحبه؟',
    enterWorld: 'ادخل عالم القشطة! 🍮',
    privacyNote: 'بياناتك معانا أمانة — مش هنزعلك بإيميلات كتير 😄',
    cairo: 'القاهرة',
    alexandria: 'الإسكندرية',
    giza: 'الجيزة',
    selectCity: 'اختر المدينة',
    all: 'كلهم!',
  },
  en: {
    // Navigation
    home: 'Home',
    ourStory: 'Our Story',
    products: 'Products',
    contact: 'Contact Us',
    
    // Hero Section
    heroTagline: 'The dessert that makes you forget all other desserts 🍮',
    orderNow: 'Order Now',
    learnMore: 'Learn More',
    
    // About
    whoIsElSayed: 'Who is El Sayed Qeshta?',
    aboutText: 'El Sayed Qeshta is not just a dessert... it\'s an experience! We serve the finest authentic Egyptian desserts with grandma\'s recipes and fresh ingredients every day.',
    readFullStory: 'Read the Full Story',
    
    // Products
    featuredProducts: 'Featured Products',
    riceWithMilk: 'Rice Pudding',
    riceDesc: 'Creamy rice pudding made with fresh milk and cinnamon',
    omAli: 'Om Ali',
    omAliDesc: 'Authentic Om Ali with nuts and raisins',
    qashtota: 'Qashtota',
    qashtotaDesc: 'Special Qashtota with natural honey',
    order: 'Order',
    egp: 'EGP',
    price: 'Price',
    
    // Why Us
    whyElSayed: 'Why El Sayed Qeshta?',
    freshIngredients: 'Fresh Ingredients',
    freshDesc: 'All ingredients fresh daily',
    grandmaRecipes: 'Grandma\'s Recipes',
    recipesDesc: 'Authentic inherited recipes',
    loveInDessert: 'Love in Every Bite',
    loveDesc: 'We make each piece with love',
    
    // Testimonials
    whatPeopleSay: 'What People Say',
    testimonial1: 'The best rice pudding I\'ve ever had! El Sayed really has the secret',
    testimonial2: 'Their Om Ali is amazing... we order it every week',
    testimonial3: 'Qashtota is addictive! You won\'t be able to stop eating',
    customer1: 'Ahmed Mohamed',
    customer2: 'Mariam Hassan',
    customer3: 'Khaled Said',
    city1: 'Cairo',
    city2: 'Alexandria',
    city3: 'Giza',
    
    // Footer
    followUs: 'Follow Us',
    quickLinks: 'Quick Links',
    rights: '© 2026 El Sayed Qeshta. All rights reserved',
    
    // Story Page
    storyTitle: 'Our Story',
    storyHero: 'The Journey of El Sayed Qeshta',
    story1Title: 'The Beginning',
    story1Text: 'There was a cow with the real secret of sweetness... not an ordinary cow, a cow that loves to experiment and innovate in the world of desserts.',
    story2Title: 'The Journey',
    story2Text: 'El Sayed Qeshta decided to share his sweetness with the world. Started with one recipe... rice pudding like grandma used to make.',
    story3Title: 'Success',
    story3Text: 'And since then... people keep coming back again and again. The secret? Love in every piece and fresh ingredients every day.',
    ourValues: 'Our Values',
    freshness: 'Freshness',
    freshnessDesc: 'Everything we make is fresh daily',
    authenticity: 'Authenticity',
    authenticityDesc: '100% authentic Egyptian recipes',
    joy: 'Joy',
    joyDesc: 'We share happiness with every customer',
    
    // Products Page
    productsTitle: 'Our Products',
    allProducts: 'All',
    cold: 'Cold',
    hot: 'Hot',
    featured: 'Featured',
    
    // Contact Page
    contactTitle: 'Contact Us',
    contactHero: 'Talk to us! We respond like Qeshta — sweet and quick 😄',
    name: 'Name',
    phone: 'Phone Number',
    message: 'Message',
    sendMessage: 'Send Message',
    address: 'Address',
    addressText: 'Desserts Street, Cairo, Egypt',
    language: 'en',
    
    // Registration Page
    welcomeBubble: 'Hello! I\'m El Sayed Qeshta 👋 Before you enter the world of sweetness, tell me a bit about you!',
    firstName: 'First Name',
    mobile: 'Mobile Number',
    city: 'City',
    favoriteDessert: 'What\'s your favorite dessert?',
    enterWorld: 'Enter Qeshta\'s World! 🍮',
    privacyNote: 'Your data is safe with us — we won\'t spam you with emails 😄',
    cairo: 'Cairo',
    alexandria: 'Alexandria',
    giza: 'Giza',
    selectCity: 'Select City',
    all: 'All of them!',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
