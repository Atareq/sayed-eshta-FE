import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, Facebook, Sparkles, ChevronDown, Star } from 'lucide-react';
import mascot from '../../imports/open_source_copy.png';

const storyChapters = [
  {
    emoji: '🌾',
    titleAr: 'البداية',
    titleEn: 'The Beginning',
    textAr: 'في يوم من الأيام، في قرية صغيرة على ضفاف النيل، وُلد حلمٌ كبير... بقرة لطيفة اسمها "السيد قشطة" كانت تحلم بصنع أشهى الحلويات في مصر كلها.',
    textEn: 'Once upon a time, in a small village on the banks of the Nile, a great dream was born... A sweet cow named "El Sayed Qeshta" dreamed of making the most delicious desserts in all of Egypt.',
    color: '#FC8CB0',
  },
  {
    emoji: '✈️',
    titleAr: 'الرحلة',
    titleEn: 'The Journey',
    textAr: 'قرر السيد قشطة السفر إلى هولندا — بلد الحليب الشهير — لدراسة فن صناعة الحلويات لمدة 5 سنوات في أفضل جامعة طهي هناك. كل يوم تعلّم، كل لحظة تدرّب.',
    textEn: 'El Sayed Qeshta decided to travel to the Netherlands — the land of famous milk — to study the art of dessert-making for 5 years at the best culinary university. Every day learning, every moment training.',
    color: '#FE9A4E',
  },
  {
    emoji: '🔬',
    titleAr: 'السر',
    titleEn: 'The Secret',
    textAr: 'اكتشف السيد قشطة السر الأعظم: الحليب الطازج من المزرعة يومياً + وصفات جدتنا المصرية الأصيلة = سحر لا يقاوم. لا معلبات، لا مجمد، كل حاجة 100% طبيعية.',
    textEn: 'El Sayed Qeshta discovered the greatest secret: Fresh farm milk daily + authentic Egyptian grandma recipes = irresistible magic. No canned goods, no frozen, everything 100% natural.',
    color: '#70C1CD',
  },
  {
    emoji: '🏪',
    titleAr: 'الانطلاق',
    titleEn: 'The Launch',
    textAr: 'في 2020، فتح السيد قشطة أول فرع له في شارع التحرير بوسط القاهرة. في أسبوع واحد بس... طوابير طويلة من المحبين كانت تنتظر كل يوم!',
    textEn: 'In 2020, El Sayed Qeshta opened his first branch on Tahrir Street in downtown Cairo. In just one week... long queues of fans were waiting every day!',
    color: '#FC8CB0',
  },
  {
    emoji: '👑',
    titleAr: 'النجمة',
    titleEn: 'The Star',
    textAr: 'وُلدت "القشطوطة" — خليط سحري من القشطة الطازجة والعسل الطبيعي والمكسرات المحمصة. أصبحت الأكثر مبيعاً وأيقونة السيد قشطة الشهيرة.',
    textEn: '"Qashtota" was born — a magical mix of fresh cream, natural honey, and roasted nuts. It became the best-seller and the famous icon of El Sayed Qeshta.',
    color: '#FE9A4E',
  },
  {
    emoji: '❤️',
    titleAr: 'الرسالة',
    titleEn: 'The Message',
    textAr: 'الحلو مش بس طعم... ده إحساس وذكريات وحب. السيد قشطة بيؤمن إن كل قطعة حلو ممكن تغير يوم حد وتخليه أحسن.',
    textEn: 'Dessert is not just taste... it\'s feeling, memories, and love. El Sayed Qeshta believes that every piece of dessert can change someone\'s day and make it better.',
    color: '#70C1CD',
  },
];

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ChapterCard({ chapter, index }: { chapter: typeof storyChapters[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24"
    >
      {/* Number side */}
      <div className={`flex items-center justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <div
            className="w-40 h-40 rounded-full flex items-center justify-center text-6xl shadow-2xl"
            style={{ background: `radial-gradient(circle at 30% 30%, ${chapter.color}33, ${chapter.color}11)`, border: `2px solid ${chapter.color}44` }}
          >
            {chapter.emoji}
          </div>
          <div
            className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg"
            style={{ background: chapter.color }}
          >
            {index + 1}
          </div>
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-full opacity-20 blur-xl"
            style={{ background: chapter.color }}
          />
        </div>
      </div>

      {/* Text side */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <div
          className="text-xs font-black tracking-widest uppercase mb-3 opacity-60"
          style={{ color: chapter.color }}
        >
          {index + 1 < 10 ? `0${index + 1}` : index + 1} — الفصل
        </div>
        <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
          {chapter.titleAr}
        </h3>
        <p className="text-gray-400 leading-relaxed text-lg">
          {chapter.textAr}
        </p>
        <div className="mt-6 h-0.5 w-16 rounded-full" style={{ background: chapter.color }} />
      </div>
    </motion.div>
  );
}

export function StoryQuiz() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [commentedOnFb, setCommentedOnFb] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const isRegistered = localStorage.getItem('userRegistered');
    if (!isRegistered) navigate('/registration');
  }, [navigate]);

  const handleFacebookComment = () => {
    window.open('https://www.facebook.com/elsayedqeshta', '_blank');
    setCommentedOnFb(true);
  };

  const handleEnterSite = () => {
    localStorage.setItem('quizCompleted', 'true');
    navigate('/home');
  };

  const question = {
    ar: 'ما هو السر الخاص اللي بيميز حلويات السيد قشطة عن غيرها؟',
    en: 'What is the special secret that makes El Sayed Qeshta\'s desserts unique?',
  };

  return (
    <div className="bg-[#0a0a0f] min-h-screen overflow-x-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: '#FC8CB0' }}
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{ background: '#70C1CD' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: '#FE9A4E' }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 text-sm mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#FC8CB0' }} />
            {language === 'ar' ? 'قصة السيد قشطة' : 'El Sayed Qeshta Story'}
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <motion.img
              src={mascot}
              alt="El Sayed Qeshta"
              className="w-40 h-40 mx-auto object-contain"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 0 40px rgba(252,140,176,0.4))' }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-none"
          >
            {language === 'ar' ? (
              <>
                قصة
                <span className="block" style={{ WebkitTextStroke: '2px #FC8CB0', color: 'transparent' }}>
                  السيد قشطة
                </span>
              </>
            ) : (
              <>
                The Story of
                <span className="block" style={{ WebkitTextStroke: '2px #FC8CB0', color: 'transparent' }}>
                  El Sayed Qeshta
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-lg mb-12"
          >
            {language === 'ar' ? 'اسكرول لتعيش الرحلة كاملة ⬇️' : 'Scroll to live the full journey ⬇️'}
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-white/30"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STORY CHAPTERS ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="text-xs font-black tracking-widest uppercase text-[#FC8CB0] mb-4">
              {language === 'ar' ? 'الحكاية' : 'The Story'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {language === 'ar' ? 'من القرية للنجاح' : 'From Village to Success'}
            </h2>
          </div>
        </ScrollReveal>

        {storyChapters.map((chapter, index) => (
          <ChapterCard key={index} chapter={chapter} index={index} />
        ))}
      </section>

      {/* ── DIVIDER ── */}
      <div className="relative overflow-hidden py-2">
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #FC8CB0, #FE9A4E, #70C1CD, transparent)' }} />
      </div>

      {/* ── THE QUESTION ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at 50% 50%, #FC8CB0, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
                style={{ background: 'linear-gradient(135deg, #FC8CB0, #FE9A4E)' }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star className="w-10 h-10 text-white" />
              </motion.div>

              <div className="text-xs font-black tracking-widest uppercase text-[#FE9A4E] mb-4">
                {language === 'ar' ? 'السؤال الأهم' : 'The Big Question'}
              </div>

              <h2
                className="text-3xl md:text-5xl font-black text-white leading-tight mb-6"
                style={{ textShadow: '0 0 60px rgba(252,140,176,0.3)' }}
              >
                {language === 'ar' ? question.ar : question.en}
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
                {language === 'ar'
                  ? 'اقرأ القصة كويس... وبعدين اكتب إجابتك في تعليقات الفيس بوك! 💬'
                  : 'Read the story carefully... then write your answer in the Facebook comments! 💬'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {/* Facebook CTA */}
            <div
              className="rounded-3xl p-8 mb-6 border border-white/5"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#1877F2' }}>
                  <Facebook className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">
                    {language === 'ar' ? 'اكتب إجابتك على الفيس بوك' : 'Write Your Answer on Facebook'}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {language === 'ar' ? 'روح صفحة السيد قشطة وعلق إجابتك' : 'Go to El Sayed Qeshta page and comment your answer'}
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleFacebookComment}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 transition-all"
                style={{
                  background: commentedOnFb
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                    : '#1877F2',
                  boxShadow: commentedOnFb
                    ? '0 0 40px rgba(34,197,94,0.3)'
                    : '0 0 40px rgba(24,119,242,0.3)',
                }}
              >
                <Facebook className="w-5 h-5" />
                {commentedOnFb
                  ? (language === 'ar' ? '✅ تم الفتح — ادخل الآن!' : '✅ Opened — Enter Now!')
                  : (language === 'ar' ? 'اكتب إجابتك في تعليق' : 'Write Your Answer in a Comment')}
              </motion.button>

              {!commentedOnFb && (
                <p className="text-center text-gray-600 text-xs mt-3">
                  {language === 'ar' ? 'هيفتح صفحتنا على الفيس بوك في تاب جديد' : 'Will open our Facebook page in a new tab'}
                </p>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            {/* Enter site button */}
            <motion.button
              onClick={handleEnterSite}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all border"
              style={{
                background: commentedOnFb
                  ? 'linear-gradient(135deg, #FC8CB0, #FE9A4E)'
                  : 'rgba(255,255,255,0.03)',
                borderColor: commentedOnFb ? 'transparent' : 'rgba(255,255,255,0.1)',
                color: commentedOnFb ? 'white' : 'rgba(255,255,255,0.3)',
                boxShadow: commentedOnFb ? '0 0 50px rgba(252,140,176,0.4)' : 'none',
                cursor: 'pointer',
              }}
            >
              <Sparkles className="w-5 h-5" />
              {language === 'ar' ? 'ادخل عالم القشطة 🍮' : 'Enter Qeshta\'s World 🍮'}
            </motion.button>

            {!commentedOnFb && (
              <p className="text-center text-gray-700 text-xs mt-3">
                {language === 'ar' ? 'علّق على الفيس بوك الأول عشان يتفعّل الزرار 😄' : 'Comment on Facebook first to unlock the button 😄'}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER BAR ── */}
      <div className="border-t border-white/5 py-8 text-center">
        <p className="text-gray-700 text-sm">
          {language === 'ar' ? '© 2026 السيد قشطة — بنحبكم 🐄❤️' : '© 2026 El Sayed Qeshta — We love you 🐄❤️'}
        </p>
      </div>
    </div>
  );
}
