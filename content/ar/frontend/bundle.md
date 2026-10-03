---
id: bundle
category: frontend
level: intermediate
related: [rendering]
term: "Bundle"
translation: "الحزمة"
pronunciation: "باندل"
---
## التعريف

ملفات JavaScript وCSS النهائية التي تنشئها أداة البناء من شيفرتك وتُرسل إلى المتصفح.

## أين تسمعه؟

عمل الأداء: «حجم الـ bundle كبير جدًا».

## أمثلة

- Adding that library increased the bundle size by 300 KB.
  - إضافة تلك المكتبة زادت حجم الـ bundle بمقدار 300 كيلوبايت.
- Split the bundle so each page loads only what it needs.
  - قسّم الـ bundle ليحمّل كل صفحة ما تحتاجه فقط.

## خطأ شائع

تثبيت مكتبات كبيرة لميزات صغيرة. افحص حجم الـ bundle قبل إضافة أي تبعية.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Bundle والـ Chunk؛ الـ bundle هو المجموعة الكاملة من الملفات التي يتم إنشاؤها للتطبيق، بينما الـ chunk هو جزء أصغر من تلك الحزمة يتم إنشاؤه أثناء تقسيم الكود.

## قلها في العمل

- We should check if we can optimize the main bundle because the initial load time is getting a bit high.
  - يجب أن نتحقق مما إذا كان بإمكاننا تحسين الـ main bundle لأن وقت التحميل الأولي أصبح مرتفعاً قليلاً.
- I have analyzed the current bundle and identified several unused dependencies that we can safely remove to reduce the total size.
  - لقد قمت بتحليل الـ bundle الحالي وحددت العديد من التبعيات غير المستخدمة التي يمكننا إزالتها بأمان لتقليل الحجم الإجمالي.
