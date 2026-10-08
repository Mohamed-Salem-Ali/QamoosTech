---
id: instance
category: devops
subcategory: infrastructure
level: beginner
related: [infrastructure-as-code, staging-vs-production]
term: "Instance"
translation: "النسخة المُشغّلة"
pronunciation: "إن-ستانس"
keywords: ["نسخة خادم افتراضي","تشغيل خادم جديد","سيرفر افتراضي سحابي","بيئة تنفيذ معزولة","نسخة تطبيق تعمل","تشغيل نسخة سحابية","خادم افتراضي قيد التشغيل","إنشاء سيرفر جديد","virtual server copy","running server copy","cloud virtual machine","spin up new server","application deployment environment","isolated execution environment","virtualized server slice","running copy of app","server instance"]
---

## التعريف

الـ Instance هي نسخة واحدة تعمل من خادم افتراضي (Virtual Server) أو تطبيق برمجي. تمثل بيئة محددة ومعزولة يتم فيها تنفيذ الكود الخاص بك.

## أين تسمعه؟

في سياق إدارة البنية التحتية السحابية، ونشر الخوادم، ومناقشات المحاكاة الافتراضية (Virtualization).

## أمثلة

- We need to spin up a new instance to handle the increased traffic.
  - نحتاج إلى تشغيل Instance جديدة للتعامل مع زيادة حركة المرور.
- The application instance crashed due to an out-of-memory error.
  - توقفت الـ Instance الخاصة بالتطبيق عن العمل بسبب خطأ في الذاكرة.
- Each customer gets its own instance of the app, so their data stays separate.
  - يحصل كل عميل على نسخة مستقلة (instance) من التطبيق، فتبقى بياناته منفصلة.

## خطأ شائع

الخلط بين الـ Instance والعتاد المادي (Physical Hardware)؛ الـ Instance هي جزء افتراضي من الموارد وليست الجهاز المادي بالكامل.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Instance والـ Container؛ فبينما تشغل الـ Instance عادةً نظام تشغيل كاملاً خاصاً بها، تشارك الـ Container نواة نظام تشغيل المضيف لتحقيق كفاءة أعلى.

## قلها في العمل

- I'm going to restart the staging instance to see if that clears up the connection timeout issue.
  - سأقوم بإعادة تشغيل الـ instance الخاصة ببيئة الـ staging لأرى ما إذا كان ذلك سيحل مشكلة انتهاء مهلة الاتصال.
- Please ensure that the new instance is configured with the correct security group settings before we deploy the production build.
  - يرجى التأكد من إعداد الـ instance الجديدة باستخدام إعدادات مجموعة الأمان الصحيحة قبل أن نقوم بنشر إصدار الـ production.
