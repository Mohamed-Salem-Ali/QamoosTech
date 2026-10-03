---
id: health-check
category: devops
level: intermediate
related: [monitoring, load-balancer]
term: "Health Check"
translation: "فحص الحالة"
pronunciation: "هيلث تشك"
keywords: ["التأكد من عمل الخادم","فحص جاهزية الخدمة","مسار فحص سلامة التطبيق","اختبار اتصال الخادم","هل التطبيق يعمل حاليا","فحص حالة النظام","نقطة نهاية مراقبة الخدمة","هيلث تشك","التحقق من استجابة الخادم","فحص توفر الخدمة","مراقبة حالة السيرفر","فحص التبعيات والاتصال","check if server is running","endpoint for service status","verify application availability","is the app alive","monitor service readiness","load balancer heartbeat","test if api is up","service liveness probe","check database connection status","healthcheck endpoint","server connectivity test","monitor app health"]
---
## التعريف

endpoint صغير، غالبًا `/health`، يخبر الأدوات ما إذا كان التطبيق يعمل بشكل سليم.

## أين تسمعه؟

موزّعات الأحمال وKubernetes وأدوات المراقبة.

## أمثلة

- The load balancer calls `/health` every 10 seconds.
  - يستدعي الـ load balancer المسار `/health` كل 10 ثوانٍ.
- The health check fails, so the server is removed from rotation.
  - فشل فحص الحالة، لذلك يُزال الخادم من التوزيع.

## خطأ شائع

فحص سلامة يعيد OK دائمًا. يجب أن يفحص أيضًا التبعيات المهمة مثل قاعدة البيانات.

## لا تخلطه مع

يفحص الـ health check ما إذا كان التطبيق يعمل وجاهزًا حاليًا، بينما يقيس الـ metric بيانات الأداء مثل استخدام المعالج والذاكرة بمرور الوقت.

## قلها في العمل

- We need to update our health check so it actually tests the database connection.
  - نحتاج إلى تحديث فحص الحالة الخاص بنا لكي يفختبر اتصال قاعدة البيانات بالفعل.
- Please ensure the health check endpoint returns a 503 status when the service dependencies are down.
  - يرجى التأكد من أن نقطة نهاية فحص الحالة تعيد حالة 503 عندما تكون تبعيات الخدمة معطلة.
