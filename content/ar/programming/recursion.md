---
id: recursion
category: programming
level: intermediate
related: [loop, function]
term: "Recursion"
translation: "الاستدعاء الذاتي"
pronunciation: "ريكيرجن"
---
## التعريف

أن تستدعي الدالة نفسها لحل نسخة أصغر من المشكلة ذاتها، حتى تصل إلى حالة بسيطة تتوقف عندها.

## أين تسمعه؟

دورات الخوارزميات، والمقابلات، والمرور على الأشجار والمجلدات.

## أمثلة

- Walking through folders is a classic use of recursion.
  - المرور على المجلدات مثال كلاسيكي على الاستدعاء الذاتي.
- The recursion has no base case, so it crashes with a stack overflow.
  - لا توجد حالة توقف في الاستدعاء الذاتي، لذلك ينهار البرنامج بخطأ stack overflow.

## خطأ شائع

نسيان حالة التوقف (base case). بدونها لن تتوقف الدالة أبدًا.

## لا تخلطه مع

الاستدعاء الذاتي (recursion) يستدعي الدالة نفسها بشكل متكرر حتى يصل إلى حالة توقف، بينما حلقة التكرار (loop) تعيد تنفيذ كتلة من الكود باستخدام شرط معين.

## قلها في العمل

- I think we can solve this tree traversal problem cleanly using recursion instead of a complex stack.
  - أعتقد أننا نستطيع حل مشكلة المرور على هذه الشجرة بشكل أنيق باستخدام الاستدعاء الذاتي بدلاً من استخدام stack معقد.
- Please make sure to add a proper base case to this recursion to avoid any stack overflow issues in production.
  - يرجى التأكد من إضافة حالة توقف مناسبة لهذا الاستدعاء الذاتي لتجنب أي مشاكل stack overflow في بيئة الإنتاج.
