---
id: encryption-in-transit
category: security
level: beginner
related: [encryption]
term: "Encryption in Transit"
pronunciation: "إن-كريبتشن إن ترانزيت"
keywords: ["تشفير البيانات أثناء النقل","حماية البيانات المنقولة عبر الشبكة","تأمين حركة المرور بين الخادم","تفعيل بروتوكول اتش تي تي بي اس","منع اعتراض البيانات المرسلة","تشفير الاتصال بين العميل والخادم","تشفير البيانات في الطريق","حماية البيانات المتحركة","protect data moving across network","secure data in transit","encrypt network traffic","ssl tls certificates setup","prevent interception of api requests","https enforcement for traffic","data security during transfer","encrypting client server communication","transit encryption","network data protection"]
---

## التعريف

هي عملية تأمين البيانات أثناء انتقالها بين نقطتين، مثل المتصفح والخادم. تضمن هذه العملية أن تظل البيانات غير قابلة للقراءة لأي طرف خارجي حتى لو تم اعتراضها أثناء النقل.

## أين تسمعه؟

أثناء مراجعات الأمان، إعداد البنية التحتية، وعند ضبط شهادات SSL/TLS.

## أمثلة

- We must enforce HTTPS to ensure encryption in transit for all API requests.
  - يجب علينا فرض استخدام HTTPS لضمان تشفير البيانات أثناء النقل لجميع طلبات الـ API.
- The security policy requires encryption in transit for all data moving between microservices.
  - تتطلب سياسة الأمان تشفير البيانات أثناء النقل لجميع البيانات التي تتحرك بين الخدمات المصغرة (microservices).

## خطأ شائع

الخلط بينها وبين "Encryption at rest"؛ حيث أن التشفير أثناء النقل يحمي البيانات المتحركة عبر الشبكة، بينما التشفير في حالة السكون يحمي البيانات المخزنة فعلياً على الأقراص الصلبة.

## لا تخلطه مع

غالباً ما يتم الخلط بين التشفير أثناء النقل والتشفير في حالة السكون؛ حيث يؤمن الأول البيانات التي تتحرك عبر الشبكة، بينما يحمي الثاني البيانات المخزنة على وسائط التخزين المادية أو السحابية.

## قلها في العمل

- Let's double-check our load balancer configuration to ensure encryption in transit is enabled for all incoming traffic.
  - دعونا نتحقق مرة أخرى من إعدادات موازن الأحمال للتأكد من تفعيل التشفير أثناء النقل لجميع حركات المرور الواردة.
- The security audit report indicates that we need to implement TLS 1.3 to improve our encryption in transit standards.
  - يشير تقرير مراجعة الأمان إلى أننا بحاجة إلى تطبيق بروتوكول TLS 1.3 لتحسين معايير التشفير أثناء النقل لدينا.
