---
id: garbage-collection
category: programming
level: intermediate
related: [object, variable]
term: "Garbage Collection"
translation: "Garbage Collection (جمع المهملات)"
pronunciation: "جاربيج كوليكشن"
---

## التعريف

هي عملية تلقائية لإدارة الذاكرة، حيث تقوم بيئة التشغيل بتحديد وتحرير مساحة الذاكرة التي تشغلها الكائنات (objects) التي لم تعد قيد الاستخدام. تساهم هذه العملية في منع تسريب الذاكرة (memory leaks) عن طريق استعادة المساحات التي لا يمكن للتطبيق الوصول إليها.

## أين تسمعه؟

في النقاشات المتعلقة بتحسين الأداء، بيئات تشغيل لغات البرمجة، واستراتيجيات إدارة الذاكرة.

## أمثلة

- The language uses garbage collection to clean up unused objects automatically.
  - تستخدم لغة البرمجة هذه خاصية Garbage Collection لتنظيف الكائنات غير المستخدمة تلقائياً.
- Frequent garbage collection cycles can sometimes cause temporary latency spikes in the application.
  - دورات الـ Garbage Collection المتكررة قد تسبب أحياناً بطئاً مؤقتاً في استجابة التطبيق.

## خطأ شائع

الاعتقاد بأن Garbage Collection يغني المبرمج عن إدارة الموارد تماماً؛ فما يزال يتعين عليك إغلاق اتصالات قواعد البيانات أو ملفات النظام يدوياً لتجنب استهلاك الموارد.

## لا تخلطه مع

غالباً ما يتم الخلط بين Garbage collection و Reference counting، ولكن بينما يقوم الـ Garbage collection بمسح الذاكرة دورياً لتحديد الكائنات غير القابلة للوصول، يقوم الـ Reference counting بتتبع عدد المراجع للكائن وتحريره فوراً عندما يصل العدد إلى صفر.

## قلها في العمل

- We are seeing some performance hitches, so let's check if the garbage collection cycles are running too frequently.
  - نلاحظ وجود بعض المشاكل في الأداء، لذا دعونا نتحقق مما إذا كانت دورات الـ garbage collection تعمل بشكل متكرر أكثر من اللازم.
- I have optimized the object allocation pattern to reduce the pressure on the garbage collection mechanism.
  - لقد قمت بتحسين نمط تخصيص الكائنات لتقليل الضغط على آلية الـ garbage collection.
