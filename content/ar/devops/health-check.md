---
id: health-check
category: devops
level: intermediate
related: [monitoring, load-balancer]
term: "Health Check"
translation: "فحص السلامة"
pronunciation: "هيلث تشك"
---
## التعريف

endpoint صغير، غالبًا `/health`، يخبر الأدوات هل التطبيق يعمل بشكل سليم.

## أين تسمعه؟

موزّعات الأحمال وKubernetes وأدوات المراقبة.

## أمثلة

- The load balancer calls `/health` every 10 seconds.
  - يستدعي الـ load balancer المسار `/health` كل 10 ثوانٍ.
- The health check fails, so the server is removed from rotation.
  - فشل فحص السلامة، لذلك يُزال الخادم من التوزيع.

## خطأ شائع

فحص سلامة يعيد OK دائمًا. يجب أن يفحص أيضًا التبعيات المهمة مثل قاعدة البيانات.
