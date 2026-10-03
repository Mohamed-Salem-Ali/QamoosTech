---
id: serverless
category: devops
level: intermediate
related: [deployment, scalability]
term: "Serverless"
translation: "بدون خوادم (سيرفرليس)"
pronunciation: "سيرفرليس"
keywords: ["تشغيل الكود بدون إدارة خوادم","الحوسبة السحابية بدون سيرفرات","دوال برمجية عند الطلب","تشغيل الشيفرة بدون تجهيز خوادم","خدمات الحوسبة بدون إدارة بنية","تطبيقات تعمل بدون سيرفر خاص","سيرفرليس","تنفيذ الدوال في السحابة","الدفع مقابل وقت التشغيل فقط","معمارية بدون خوادم","تشغيل المهام في الخلفية سحابيا","خدمة الدوال السحابية","run code without managing servers","cloud functions pay per use","event driven compute architecture","deploy code without server config","auto scaling backend functions","serverless computing platform","running tasks without provisioning","lambda style code execution","cloud provider managed backend","pay only for execution time","server less architecture","managed function as a service"]
---
## التعريف

طريقة لتشغيل الشيفرة يدير فيها مزوّد السحابة الخوادم. ترفع دوال وتدفع فقط عند تشغيلها.

## أين تسمعه؟

AWS Lambda ودوال Vercel ونقاشات التكلفة.

## أمثلة

- We run the PDF export as a serverless function.
  - نشغّل تصدير الـ PDF كدالة serverless.
- Serverless scales automatically, but cold starts add delay.
  - يتوسع serverless تلقائيًا، لكن الـ cold start يضيف تأخيرًا.

## خطأ شائع

الاعتقاد بأنه لا توجد خوادم إطلاقًا. هي موجودة لكنك لا تديرها.

## قلها في العمل

- Let us move this notification worker to serverless so we do not pay for idle time.
  - دعنا ننقل عامل الإشعارات هذا إلى serverless لكي لا ندفع مقابل وقت الخمول.
- We should use a serverless architecture for the background processing to handle the traffic spikes efficiently.
  - يجب أن نستخدم معمقّة serverless للمعالجة في الخلفية للتعامل بكفاءة مع ارتفاعات حركة المرور.
