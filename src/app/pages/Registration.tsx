import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeechBubble } from '../components/SpeechBubble';
import { Mail, Phone, Lock, User, Sparkles } from 'lucide-react';
import mascot from '../../imports/open_source_copy.png';
import logo from '../../imports/44.png';

export function Registration() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to localStorage for authentication
      localStorage.setItem('userRegistered', 'true');
      localStorage.setItem('userData', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        registeredAt: new Date().toISOString(),
      }));

      // Send to Make Webhook
      const webhookUrl = 'YOUR_MAKE_WEBHOOK_URL_HERE';

      // Uncomment when you have your webhook URL:
      /*
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          registeredAt: new Date().toISOString(),
          language: language,
        }),
      });
      */

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Navigate to interactive story/quiz page
      navigate('/story-quiz');
    } catch (error) {
      console.error('Registration error:', error);
      alert(language === 'ar' ? 'حدث خطأ، حاول مرة أخرى' : 'Error occurred, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FC8CB0] via-[#FE9A4E] to-[#70C1CD] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white rounded-full animate-bounce-slow" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-5xl w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-3xl shadow-2xl">
              <img src={logo} alt="السيد قشطة" className="h-20 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Mascot Side */}
            <div className="text-center order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30">
                <img
                  src={mascot}
                  alt="El Sayed Qeshta"
                  className="w-full max-w-sm mx-auto mb-6 animate-bounce-slow drop-shadow-2xl"
                />
                <SpeechBubble
                  text={language === 'ar'
                    ? 'أهلاً صاحبي! 🐮 قبل ما تدخل عالم الحلو، لازم نتعرف على بعض! سجل دلوقتي وخش على طول 🍮✨'
                    : 'Hey friend! 🐮 Before you enter the sweet world, we need to get to know each other! Register now and jump right in 🍮✨'
                  }
                />
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 order-1 lg:order-2">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FC8CB0] to-[#FE9A4E] rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                  {language === 'ar' ? 'مرحباً بيك! 🎉' : 'Welcome! 🎉'}
                </h1>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'سجل دلوقتي وابدأ رحلتك مع السيد قشطة'
                    : 'Register now and start your journey with El Sayed Qeshta'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#FC8CB0]" />
                    {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all"
                    placeholder={language === 'ar' ? 'أحمد محمد علي' : 'Ahmed Mohamed Ali'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FC8CB0]" />
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FC8CB0]" />
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all"
                    placeholder="01XXXXXXXXX"
                    dir="ltr"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#FC8CB0]" />
                    {language === 'ar' ? 'كلمة المرور' : 'Password'} *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FC8CB0] focus:ring-4 focus:ring-[#FC8CB0]/10 focus:outline-none transition-all"
                    placeholder={language === 'ar' ? 'على الأقل 6 أحرف' : 'At least 6 characters'}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#FC8CB0] to-[#FE9A4E] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {language === 'ar' ? 'جاري التسجيل...' : 'Registering...'}
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        {language === 'ar' ? 'دلوقتي خش مع السيد قشطة 🐮🍮' : 'Enter with El Sayed Qeshta 🐮🍮'}
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FE9A4E] to-[#FC8CB0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                {/* Privacy Note */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 text-center border border-blue-200">
                  <p className="text-sm text-blue-900">
                    🔒 {language === 'ar'
                      ? 'بياناتك معانا في أمان تام - مش هنزعلك بإيميلات كتير 😊'
                      : 'Your data is completely safe with us - we won\'t spam you 😊'}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
