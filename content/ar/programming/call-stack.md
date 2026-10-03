---
id: call-stack
category: programming
level: intermediate
related: [function, recursion, debugging]
term: "Call Stack"
translation: "مكدس الاستدعاءات"
pronunciation: "كول ستاك"
---

## التعريف

مكدس الاستدعاءات هو هيكل بيانات يتتبع الدوال النشطة في البرنامج، ويسجل المكان الذي يجب أن تعود إليه كل دالة بمجرد انتهائها. يعمل وفق مبدأ "آخر من يدخل هو أول من يخرج" (LIFO)، مما يعني أن آخر دالة تم استدعاؤها هي أول دالة تكتمل وتُزال من المكدس.

## أين تسمعه؟

- أثناء عملية تصحيح الأخطاء (debugging) عند تحليل مسار المكدس (stack trace).
- عند مناقشة عمق الاستدعاء الذاتي (recursion) أو حدود الذاكرة.
- أثناء شرح كيفية إدارة بيئة تشغيل اللغة لتدفق تنفيذ البرنامج.

## أمثلة

- The program crashed because the call stack exceeded its maximum size due to infinite recursion.
  - تعطل البرنامج لأن مكدس الاستدعاءات تجاوز حجمه الأقصى بسبب الاستدعاء الذاتي اللانهائي.
- You can inspect the call stack in your browser's developer tools to see the sequence of function calls.
  - يمكنك فحص مكدس الاستدعاءات في أدوات المطور بالمتصفح لرؤية تسلسل استدعاء الدوال.

## خطأ شائع

الاعتقاد بأن مكدس الاستدعاءات يخزن البيانات أو المتغيرات الخاصة بالدالة؛ فهو يخزن بشكل أساسي سياق التنفيذ وعناوين العودة، بينما تُخزن البيانات الفعلية (مثل الكائنات) غالباً في الكومة (Heap).
