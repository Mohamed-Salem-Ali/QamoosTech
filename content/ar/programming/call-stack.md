---
id: call-stack
category: programming
level: intermediate
related: [function, recursion, debugging]
term: "Call Stack"
translation: "مكدس الاستدعاءات"
pronunciation: "كول ستاك"
keywords: ["قائمة الدوال النشطة","تتبع تسلسل استدعاء الدوال","معرفة سبب توقف البرنامج","هيكل بيانات تنفيذ الدوال","مكدس الاستدعاءات","تتبع مسار الخطأ","كول ستاك","أين توقف تنفيذ الكود","إدارة سياق تنفيذ الدوال","تتبع الدوال المتداخلة","مبدأ آخر من يدخل أول من يخرج","فحص المكدس عند الانهيار","list of active functions","trace where code crashed","how functions track execution","lifo data structure","view function call sequence","stack trace debugging","recursion depth error","execution context memory","call stack definition","kool stak","function return addresses","program execution history"]
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

## لا تخلطه مع

غالباً ما يتم الخلط بين مكدس الاستدعاءات والكومة (Heap)؛ حيث يدير مكدس الاستدعاءات سياق تنفيذ الدوال والمتغيرات المحلية، بينما تُستخدم الكومة لتخصيص الذاكرة الديناميكي للكائنات.

## قلها في العمل

- I'm looking at the error log, and the call stack shows that the issue originates from the authentication service.
  - أنا أنظر إلى سجل الأخطاء، ويُظهر مكدس الاستدعاءات أن المشكلة تنبع من خدمة المصادقة.
- Please review the attached stack trace to see the call stack leading up to the unexpected termination.
  - يرجى مراجعة تتبع المكدس المرفق لرؤية مكدس الاستدعاءات الذي أدى إلى الإنهاء غير المتوقع.
