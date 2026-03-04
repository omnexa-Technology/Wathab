---  
name: i18n-rules-validator  
description: Validates that UI text follows i18n rules and supports RTL/LTR. Use when ensuring multilingual compliance.  
---  

# Internationalization (i18n) Compliance Skill  

**Goal:** التأكد أن جميع النصوص قابلة للترجمة ودعم اللغات ذات التوجيه من اليمين إلى اليسار (مثل العربيّة).  

**Instructions:**  
- فحص الأكواد للتأكد من عدم وجود نصوص صلبة (hardcoded)؛ جميع النصوص يجب أن تستخدم دوال الترجمة (مثلاً `t('key')`).  
- التحقق من دعم **RTL** عبر فحص أنماط CSS (مثل اتجاه النصوص والفلترة في الـ Tailwind).  
- اختبار الوضع RTL والتأكد من أن التصميم ينعكس بشكل صحيح (مثلاً أيقونات واتجاهات التنقل).  