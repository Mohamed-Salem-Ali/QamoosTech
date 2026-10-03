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
