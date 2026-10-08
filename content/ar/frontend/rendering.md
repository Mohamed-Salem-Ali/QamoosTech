---
id: rendering
category: frontend
level: intermediate
related: [hydration, nextjs, virtual-dom]
term: "Rendering (SSR / CSR)"
translation: "العرض (من الخادم / من العميل)"
pronunciation: "ريندرينج"
keywords: ["تحويل الشيفرة إلى صفحة مرئية","بناء صفحات الويب بالمتصفح","توليد html من الخادم","الفرق بين ssr و csr","عرض الصفحة من الخادم","إعادة عرض المكونات باستمرار","ريندرينج الصفحة","عرض واجهة المستخدم","server side vs client side rendering","how to generate html on server","browser builds page with javascript","turn code and data into ui","ssr vs csr","page re rendering loop","initial page load rendering","render html on server"]
---
## التعريف

تحويل الشيفرة والبيانات إلى الصفحة التي يراها المستخدم. في SSR يبني الخادم الـ HTML، وفي CSR يبنيه المتصفح بواسطة JavaScript.

## أين تسمعه؟

Next.js، وتحسين محركات البحث، ونقاشات الأداء.

## أمثلة

- We use server-side rendering so search engines can read the content.
  - نستخدم العرض من الخادم حتى تستطيع محركات البحث قراءة المحتوى.
- The page re-renders every time the state changes.
  - يُعاد عرض الصفحة كلما تغيّرت الحالة.

## خطأ شائع

اختيار SSR أو CSR بحكم العادة. اختر حسب الحاجة: تحسين البحث وسرعة التحميل الأول، أو التفاعل الكثيف.

## لا تخلطه مع

يتحول العرض (Rendering) من البيانات إلى واجهة مستخدم مرئية، بينما يقوم الترطيب (Hydration) بربط مستمعات الأحداث البرمجية بـ HTML الثاتي المعروض مسبقاً لجعه تفاعلياً.

## قلها في العمل

- We need to fix this layout shift that happens during the initial rendering phase.
  - نحتاج إلى إصلاح انحراف التخطيط هذا الذي يحدث أثناء مرحلة العرض الأولية.
- I am investigating why this component is triggering an unexpected re-rendering loop.
  - أنا أحقق في سبب تسبب هذا المكون في حلقة إعادة عرض غير متوقعة.
