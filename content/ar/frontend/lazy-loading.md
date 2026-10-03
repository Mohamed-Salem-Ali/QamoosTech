---
id: lazy-loading
category: frontend
level: beginner
related: [bundle, rendering, viewport]
term: "Lazy Loading"
pronunciation: "ليزي لودينج"
translation: "التحميل الكسول"
---

## التعريف

استراتيجية أداء يتم فيها تأخير تحميل الموارد غير الأساسية، مثل الصور أو المكونات، حتى الحاجة إليها فعلياً بدلاً من تحميلها دفعة واحدة.

## أين تسمعه؟

في مراجعات أداء مواقع الويب، ونقاشات هندسة واجهات المستخدم، ومهام تحسين حجم الحزم البرمجية.

## أمثلة

- We implemented lazy loading for all images below the fold to improve initial page load speed.
  - قمنا بتطبيق التحميل الكسول لجميع الصور الموجودة أسفل الشاشة لتحسين سرعة التحميل الأولي للصفحة.
- The application uses lazy loading to fetch heavy dashboard components only when the user visits that specific tab.
  - يستخدم التطبيق التحميل الكسول لجلب مكونات لوحة التحكم الثقيلة فقط عندما يزور المستخدم علامة التبويب المحددة تلك.

## خطأ شائع

الاعتقاد بأن التحميل الكسول يحل جميع مشاكل الأداء دون مراعاة إزاحة العناصر في التخطيط التي قد تسببها عندما يتم تحميل المحتوى في النهاية.

## لا تخلطه مع

التحميل الكسول يؤخر تحميل الموارد حتى الحاجة إليها، بينما التحميل الشغوف (eager loading) يحمل جميع الموارد فوراً بغض النظر عن الحاجة الحالية.

## قلها في العمل

- Can we apply lazy loading to these heavy images so they don't block the initial page render?
  - هل يمكننا تطبيق التحميل الكسول على هذه الصور الثقيلة حتى لا تعطل عرض الصفحة الأولي؟
- Please ensure that lazy loading is configured for all route-level components to reduce the initial bundle size.
  - يرجى التأكد من تكوين التحميل الكسول لجميع مكونات مستوى المسار لتقليل حجم الحزمة الأولية.
