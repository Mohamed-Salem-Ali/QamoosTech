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
