---
id: xss
category: security
subcategory: application-security
level: intermediate
related: [cors, vulnerability]
term: "Cross-Site Scripting (XSS)"
translation: "البرمجة عبر الموقع"
pronunciation: "كروس سايت سكربتنج"
keywords: ["ثغرة حقن السكريبتات في الموقع","حماية الموقع من هجمات اكس اس اس","تنقية مدخلات المستخدم لمنع الثغرات","حقن نصوص برمجية ضارة في المتصفح","ثغرات البرمجة عبر الموقع","مشكلة حقن السكريبتات في الويب","كيفية منع ثغرات xss","فحص ثغرات الأمان في التطبيق","inject malicious scripts into web pages","prevent stored xss attacks","cross site scripting vulnerability","sanitize user input in browser","client side script injection","fix xss security issue","crosssite scripting","xss attack prevention","escaping user output in html"]
---

## التعريف

ثغرة أمنية تتيح للمهاجمين حقن نصوص برمجية ضارة تعمل جهة العميل داخل صفحة الويب التي يشاهدها مستخدمون آخرون. تحدث هذه المشكلة عادةً عندما تأخذ التطبيقات مدخلات المستخدم وتعرضها في المتصفح دون التحقق منها أو تنقيتها بشكل صحيح.

## أين تسمعه؟

في عمليات التدقيق الأمني، تقارير اختبار الاختراق، مراجعات الكود، وعند مناقشة تنقية المدخلات.

## أمثلة

- The security scan flagged an XSS vulnerability in the user profile comment section.
  - حدد الفحص الأمني ثغرة XSS في قسم تعليقات الملف الشخصي للمستخدم.
- We must sanitize all user inputs to prevent stored XSS attacks.
  - يجب علينا تنقية جميع مدخلات المستخدمين لمنع هجمات XSS المخزنة.

## خطأ شائع

الاعتقاد بأن هجمات XSS تؤثر فقط على المستخدمين العاديين؛ إذ يمكن للمهاجمين أيضاً استخدام هجمات XSS المخزنة لاستهداف المديرين والسيطرة على التطبيق بالكامل.

## لا تخلطه مع

غالباً ما يتم الخلط بين XSS و CSRF؛ فبينما تتضمن XSS حقن نصوص برمجية ضارة في الصفحة، تقوم CSRF بخداع المستخدم لتنفيذ إجراءات غير مرغوب فيها على موقع هو موثق فيه بالفعل.

## قلها في العمل

- We should double-check if the search results page is properly escaping output to avoid any potential XSS.
  - يجب أن نتأكد مرة أخرى مما إذا كانت صفحة نتائج البحث تقوم بتنقية المخرجات بشكل صحيح لتجنب أي ثغرة XSS محتملة.
- The recent security audit identified an XSS vulnerability in the feedback form, so please prioritize the fix in the next sprint.
  - حدد التدقيق الأمني الأخير ثغرة XSS في نموذج الملاحظات، لذا يرجى إعطاء الأولوية لإصلاحها في دورة العمل القادمة.
