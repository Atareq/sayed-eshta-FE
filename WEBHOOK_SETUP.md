# إعداد Make Webhook للتسجيل
## Make Webhook Setup for Registration

### الخطوات / Steps:

#### 1. إنشاء Webhook في Make

1. اذهب إلى [Make.com](https://www.make.com)
2. أنشئ سيناريو جديد (New Scenario)
3. أضف "Webhook" كأول module
4. اختر "Custom Webhook"
5. انسخ URL الخاص بالـ Webhook

#### 2. تحديث الكود

افتح ملف `/src/app/pages/Registration.tsx` وابحث عن هذا السطر:

```typescript
const webhookUrl = 'YOUR_MAKE_WEBHOOK_URL_HERE';
```

استبدله بـ URL الذي نسخته من Make:

```typescript
const webhookUrl = 'https://hook.eu1.make.com/xxxxxxxxxxxxxxx';
```

ثم قم بإلغاء التعليق عن كود إرسال البيانات:

```typescript
// احذف /* و */ من حول هذا الكود
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
```

#### 3. إعداد Google Sheets في Make

بعد Webhook في Make، أضف:

1. **Google Sheets - Add a Row**
   - اختر Google Sheets account
   - اختر Spreadsheet
   - اختر Worksheet
   - قم بربط الحقول:
     - Full Name → {{fullName}}
     - Email → {{email}}
     - Phone → {{phone}}
     - Registered At → {{registeredAt}}
     - Language → {{language}}

#### 4. إرسال بريد ترحيبي (اختياري)

أضف module جديد:

1. **Email - Send an Email**
   - To: {{email}}
   - Subject: "مرحباً بك في عائلة السيد قشطة!"
   - Content: قم بتصميم بريد ترحيبي جميل

#### 5. إضافة إلى جمهور فيسبوك (اختياري)

أضف module:

1. **Facebook Conversions API** أو **Facebook Custom Audiences**
   - قم بربط حساب Facebook
   - أضف البيانات إلى Custom Audience

### البيانات المرسلة / Data Sent:

```json
{
  "fullName": "أحمد محمد",
  "email": "ahmed@example.com",
  "phone": "01234567890",
  "registeredAt": "2026-05-24T12:00:00.000Z",
  "language": "ar"
}
```

### اختبار / Testing:

1. قم بتشغيل السيناريو في Make (Run Once)
2. املأ نموذج التسجيل في الموقع
3. تحقق من استلام البيانات في Make
4. تحقق من إضافة البيانات في Google Sheets

### ملاحظات / Notes:

- تأكد من تفعيل السيناريو في Make (ON)
- يمكنك إضافة المزيد من الخطوات حسب حاجتك
- البيانات محفوظة في localStorage للمتصفح أيضاً
- يمكنك إضافة validation إضافي في Make

---

## الأمان / Security:

⚠️ **مهم جداً:**
- لا تشارك Webhook URL في أي مكان عام
- أضف Webhook URL في ملف `.env` للإنتاج
- استخدم HTTPS فقط
- قم بإضافة rate limiting في Make
- تحقق من صحة البيانات في Make قبل الحفظ
