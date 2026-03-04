---  
name: responsive-design-checker  
description: Checks UI responsiveness across screen sizes. Use when verifying mobile/tablet/desktop layout.  
---  

# Responsive Design Check Skill  

**Goal:** تأكيد أن واجهة المستخدم تتكيف بشكل صحيح مع أحجام الشاشات المختلفة (محمول، لوحي، سطح مكتب).  

**Instructions:**  
- افتح تطبيق الـ Next.js في المتصفح وعدل أبعاد النافذة (على سبيل المثال باستخدام أدوات المطور).  
- فحص العناصر الرئيسية (القوائم، الصور، الخ) عند كل نقطة انكسار (`sm`, `md`, `lg`, الخ في Tailwind).  
- التحقق من عدم وجود overflow أو نصوص مخفية في الشاشات الصغيرة.  
- اقتراح تعديلات (مثل إضافة فئات **breakpoints** في Tailwind) إذا لزم الأمر.  