---
id: rendering
category: frontend
level: intermediate
related: [hydration, nextjs]
term: "Rendering (SSR / CSR)"
translation: "العرض (من الخادم / من العميل)"
pronunciation: "ريندرينج"
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
