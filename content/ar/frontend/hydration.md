---
id: hydration
category: frontend
level: intermediate
related: [rendering, nextjs]
term: "Hydration"
translation: "التفعيل (الهيدريشن)"
pronunciation: "هايدريشن"
---
## التعريف

الخطوة التي يربط فيها المتصفح شيفرة JavaScript بالـ HTML الذي أرسله الخادم، فتصبح الصفحة تفاعلية.

## أين تسمعه؟

Next.js وأخطاء React مثل «hydration mismatch».

## أمثلة

- We got a hydration error because the server and client rendered different text.
  - ظهر خطأ hydration لأن الخادم والعميل عرضا نصًا مختلفًا.
- The page is visible quickly, then hydration makes the buttons work.
  - تظهر الصفحة بسرعة، ثم يجعل الـ hydration الأزرار تعمل.

## خطأ شائع

استخدام قيم مثل `Date.now()` أو أرقام عشوائية أثناء العرض. يحصل الخادم والمتصفح على نتائج مختلفة.
