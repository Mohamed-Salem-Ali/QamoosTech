---
id: encryption-in-transit
category: security
level: beginner
related: [encryption]
term: "Encryption in Transit"
pronunciation: "إن-كريبتشن إن ترانزيت"
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
