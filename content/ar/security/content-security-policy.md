---
id: content-security-policy
category: security
level: intermediate
related: [vulnerability, http-header, cors]
term: "Content Security Policy (CSP)"
pronunciation: "كونتنت سيكيوريتي بوليسي"
translation: "سياسة أمان المحتوى"
---

## التعريف

سياسة أمان المحتوى (CSP) هي ترويسة استجابة HTTP تتيح لمطوري الويب تقييد الموارد (مثل جافاسكريبت، CSS، والصور) التي يُسمح للمتصفح تحميلها لصفحة معينة. تُستخدم أساساً لاكتشاف وتخفيف هجمات الحقن مثل البرمجة عبر المواقع (XSS).

## أين تسمعه؟

- في تدقيق الأمان وتقارير اختبار الاختراق
- أثناء تأمين تطبيقات الويب وإعداد ترويسات HTTP
- عند استكشاف أخطاء السكريبتات المحظورة في وحدة تحكم المتصفح

## أمثلة

- We need to add a Content Security Policy header to prevent unauthorized scripts from running on our dashboard.
  - نحتاج إلى إضافة ترويسة سياسة أمان المحتوى لمنع تشغيل السكريبتات غير المصرح بها على لوحة التحكم الخاصة بنا.
- The application crashed because the strict Content Security Policy blocked inline styles.
  - توقف التطبيق عن العمل لأن سياسة أمان المحتوى الصارمة حظرت تنسيقات CSS المضمنة.

## خطأ شائع

الاعتقاد بأن سياسة CSP تغني عن تنظيف المدخلات بشكل صحيح، بينما ينبغي اعتبارها طبقة دفاع إضافية ضمن نهج الدفاع العميق.

## لا تخلطه مع

غالباً ما يتم الخلط بين سياسة أمان المحتوى (CSP) وCORS، لكن CSP تتحكم في الموارد التي يحملها المتصفح للصفحة، بينما يتحكم CORS في النطاقات المسموح لها بالوصول إلى موارد الخادم عبر واجهات برمجة التطبيقات.

## قلها في العمل

- Let us check the browser console to see if our Content Security Policy is blocking that external script.
  - دعنا نتحقق من وحدة تحكم المتصفح لنرى ما إذا كانت سياسة أمان المحتوى الخاصة بنا تحظر ذلك السكريبت الخارجي.
- Please review the updated Content Security Policy configuration in the staging environment before we merge this pull request.
  - يرجى مراجعة إعدادات سياسة أمان المحتوى المحدثة في بيئة الاختبار قبل أن نقوم بدمج طلب السحب هذا.
