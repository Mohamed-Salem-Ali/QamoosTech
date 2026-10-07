---
id: deep-link
category: frontend
level: beginner
related: [url-routing, pwa, query-parameter]
aliases: ["universal link", "app link", "deeplink"]
term: "Deep Link"
translation: "الرابط العميق"
pronunciation: "ديب لينك"
keywords: ["رابط إلى شاشة محددة", "فتح التطبيق على صفحة", "الروابط العالمية", "مشاركة صفحة منتج", "الحالة في الرابط", "روابط تطبيقات الجوال", "link to a specific screen", "open the app at a page", "universal links", "share a product page", "state in the url", "mobile app links"]
---

## التعريف

الرابط العميق (Deep Link) رابط يفتح صفحة أو شاشة محددة داخل موقع أو تطبيق جوال، وليس صفحته الرئيسية فقط، مثل منتج بعينه أو قائمة مصفّاة.

## أين تسمعه؟

في تطوير تطبيقات الجوال (React Native والروابط العالمية)، ورسائل التسويق، والروابط القابلة للمشاركة.

## أمثلة

- The email button deep-links to the unpaid payment, not the dashboard.
  - يرتبط زر البريد برابط عميق إلى الدفعة غير المدفوعة وليس إلى لوحة التحكم.
- Keep the filter in the URL so the page can be deep-linked.
  - أبقِ المرشح في الرابط ليمكن الربط العميق للصفحة.

## خطأ شائع

نسيان حالة عدم تسجيل الدخول. يجب أن يرسل الرابط العميق الناس إلى الدخول ثم يعيدهم إلى الصفحة نفسها.

## لا تخلطه مع

الرابط العادي إلى الصفحة الرئيسية الذي يترك المستخدم يبحث بنفسه.

## قلها في العمل

- Does this deep link work on both iOS and Android?
  - هل يعمل هذا الرابط العميق على iOS وأندرويد؟
- Make the state shareable with a deep link.
  - اجعل الحالة قابلة للمشاركة برابط عميق.
