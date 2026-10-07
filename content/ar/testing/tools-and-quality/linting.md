---
id: linting
category: testing
subcategory: tools-and-quality
level: beginner
related: [quality-gate, code-review]
term: "Linting"
translation: "الـ Linting"
pronunciation: "لينتينج"
keywords: ["فحص جودة الكود تلقائيا","أداة اكتشاف أخطاء البرمجة","تطبيق معايير كتابة الكود","البحث عن متغيرات غير مستخدمة","فحص أخطاء الصيغة البرمجية","أداة مراجعة الكود الآلية","تحسين جودة الشيفرة برمجيا","التأكد من سلامة الكود","تطبيق قواعد البرمجة القياسية","اكتشاف المشاكل في الكود","automatic code quality check","find syntax errors automatically","check for unused variables","enforce coding standards tool","static code analysis tool","fix common programming mistakes","automated style guide checker","linter configuration issues","prevent bad code patterns","code smell detection tool"]
---
## التعريف

تشغيل أداة (linter مثل ESLint) تكتشف تلقائيًا مشكلات الأسلوب والأخطاء المحتملة في شيفرتك.

## أين تسمعه؟

فحوصات CI ومعايير البرمجة في الفريق.

## أمثلة

- The linter found an unused variable.
  - اكتشف الـ linter متغيرًا غير مستخدم.
- Run the linter before you push.
  - شغّل الـ linter قبل أن ترفع التغييرات (push).

## خطأ شائع

تعطيل قواعد الـ lint كلما أزعجتك. أصلح السبب، أو اتفق على القاعدة مع الفريق.

## لا تخلطه مع

غالبًا ما يتم الخلط بين الـ linting وتنسيق الكود (formatting)؛ فالـ linting يركز على اكتشاف أخطاء المنطق المحتملة ومشكلات الجودة، بينما يقتصر التنسيق على تنظيم المظهر المرئي وترتيب الكود.

## قلها في العمل

- Could you please check why the linting is failing in the current branch?
  - هل يمكنك التحقق من سبب فشل الـ linting في الفرع الحالي؟
- I have updated the configuration to ensure the linting process catches these specific syntax patterns.
  - لقد قمت بتحديث الإعدادات لضمان أن عملية الـ linting تلتقط أنماط الصيغة هذه تحديدًا.
