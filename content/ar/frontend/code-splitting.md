---
id: code-splitting
category: frontend
level: intermediate
related: [bundle]
term: "Code Splitting"
pronunciation: "كود سْبليتينج"
translation: "تقسيم الكود"
---

## التعريف

تقنية تهدف إلى تجزئة ملفات الجافاسكريبت في التطبيق إلى حزم أصغر يتم تحميلها عند الحاجة بدلاً من تحميل التطبيق بأكمله مرة واحدة، مما يحسن أداء الموقع وسرعة فتحه.

## أين تسمعه؟

- أثناء مراجعات تحسين أداء الواجهات الأمامية
- عند إعداد أدوات التجميع الحديثة مثل Vite أو Webpack
- في وثائق إطارات العمل عند مناقشة التحميل الكسول (Lazy Loading)

## أمثلة

- We implemented code splitting to reduce the initial JavaScript bundle size and improve page load speed.
  - قمنا بتطبيق تقسيم الكود لتقليل حجم حزمة الجافاسكريبت الأولية وتحسين سرعة تحميل الصفحة.
- The routing configuration uses dynamic imports to enable code splitting for each individual page.
  - يستخدم إعداد التوجيه عمليات الاستيراد الديناميكية لتفعيل تقسيم الكود لكل صفحة على حدة.

## خطأ شائع

تقسيم الكود إلى عدد كبير جداً من الأجزاء الصغيرة، مما يؤدي إلى كثرة طلبات الشبكة ويبطئ التطبيق بدلاً من جعله أسرع.

## لا تخلطه مع

غالباً ما يتم الخلط بين تقسيم الكود (Code Splitting) وإسقاط الكود غير المستخدم (Tree Shaking)؛ فبينما يقوم تقسيم الكود بتجزئة الحزمة إلى ملفات أصغر تُحمل عند الطلب، يقوم إسقاط الكود بإزالة الأكواد غير المستعملة من الحزمة النهائية أثناء عملية البناء.

## قلها في العمل

- Let's apply code splitting to the admin dashboard routes so we don't load unnecessary modules for standard users.
  - دعونا نطبق تقسيم الكود على مسارات لوحة تحكم الإدارة حتى لا نقوم بتحميل وحدات غير ضرورية للمستخدمين العاديين.
- I have enabled code splitting for the heavy components to ensure the main bundle size stays within our performance budget.
  - لقد قمت بتفعيل تقسيم الكود للمكونات الثقيلة لضمان بقاء حجم الحزمة الرئيسية ضمن ميزانية الأداء المحددة لدينا.
