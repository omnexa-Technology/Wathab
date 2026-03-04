---  
name: bug-detector  
description: Detects common bugs in front-end code (React, Zustand, GSAP). Use when debugging or reviewing code.  
---  

# Bug Detection Skill  

**Goal:** الكشف عن أخطاء محتملة في كود الواجهة الأمامية واقتراح إصلاحات.  

**Instructions:**  
- تحليل الكود بحثًا عن أخطاء شائعة (مثلاً: مفاتيح مفقودة في قوائم React، تحديث حالة Zustand بشكل غير صحيح).  
- تشغيل أدوات فحص ثابتة (إن وجدت) أو الاستعانة بـ ESLint/TypeScript (رغم استخدام JavaScript) لتحري الأخطاء.  
- فحص استخدام مكتبة **GSAP** للتأكد من تهيئة المؤقتات والأنيميشن بشكل صحيح (مثل استدعاء `kill()` عند الإنتهاء).  
- اختبار وظائف رئيسية في بيئة تطوير محلية للتقاط أخطاء وقت التشغيل.  
- وصف الأخطاء المكتشفة وتقديم نصائح للإصلاح.  