---
id: thread
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [process, mutex, data-race]
aliases: ["multithreading", "threads", "thread-safe", "thread safety"]
term: "Thread"
translation: "الخيط"
pronunciation: "ثريد"
keywords: ["مسار متوازٍ في برنامج", "تتشارك الذاكرة داخل عملية", "تعدد الخيوط", "عمل في الخلفية", "قفل GIL في بايثون", "أمان الخيوط", "parallel path in a program", "share memory in one process", "multithreading", "background work", "gil in python", "thread safety"]
---

## التعريف

الخيط (Thread) مسار تنفيذ مستقل داخل عملية. تتشارك خيوط العملية نفسها ذاكرتها، فيسهل ويسرع تواصلها لكن يسهل الخطأ أيضاً.

## أين تسمعه؟

في نقاشات التزامن، وإعدادات خوادم الويب (خيوط العمل)، وقفل GIL في بايثون، وضبط الأداء.

## أمثلة

- The server handles each request on a separate thread.
  - يعالج الخادم كل طلب على خيط منفصل.
- Access to the shared counter must be thread-safe.
  - يجب أن يكون الوصول إلى العداد المشترك آمناً للخيوط.

## خطأ شائع

مشاركة البيانات بين الخيوط دون حماية. هذا يسبب سباق بيانات وأخطاء تظهر أحياناً فقط.

## لا تخلطه مع

العملية (Process) التي لها ذاكرتها الخاصة. أما الخيوط فتعيش داخل عملية وتتشارك ذاكرتها.

## قلها في العمل

- Is this code thread-safe?
  - هل هذا الكود آمن للخيوط؟
- Use a thread pool instead of a thread per task.
  - استخدم مجمّع خيوط بدل خيط لكل مهمة.
