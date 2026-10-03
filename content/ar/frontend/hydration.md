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

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Hydration والعرض من جهة العميل (CSR)؛ فبينما يقوم الـ CSR ببناء الصفحة كاملة في المتصفح من الصفر، يقوم الـ Hydration بربط مستمعي الأحداث بـ HTML جاهز تم إرساله مسبقاً من الخادم.

## قلها في العمل

- I think we are seeing a hydration mismatch because the component is using local storage before the page finishes loading.
  - أعتقد أننا نواجه خطأ hydration mismatch لأن المكون يستخدم التخزين المحلي قبل أن تنتهي الصفحة من التحميل.
- Please check if the initial state is consistent across the server and client to prevent hydration issues in this module.
  - يرجى التحقق مما إذا كانت الحالة الأولية متسقة بين الخادم والعميل لمنع مشاكل الـ hydration في هذه الوحدة.
