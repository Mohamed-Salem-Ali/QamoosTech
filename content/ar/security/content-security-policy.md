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

سياسة أمان المحتوى (CSP) هي ترويسة استجابة HTTP تتيح لمطوري الويب تقييد الموارد (مثل جافاسكريبت، CSS، والصور) التي يُسمح للمتصفح تحميلها لصفحة معين. تُستخدم أساساً لاكتشاف وتخفيف هجمات الحقن مثل البرمجة عبر المواقع (XSS).

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
