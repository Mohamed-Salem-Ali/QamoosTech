---
id: decoupling
category: architecture
level: intermediate
related: [separation-of-concerns, monolith-vs-microservices, message-queue]
term: "Decoupling"
pronunciation: "دي-كابلينج"
translation: "فك الارتباط"
---

## التعريف

فك الارتباط هو ممارسة معمارية تهدف إلى تقليل الاعتماد المتبادل بين مكونات النظام البرمجي. يتيح ذلك لأجزاء النظام العمل والتطور بشكل مستقل دون الحاجة لمعرفة التفاصيل الداخلية للأجزاء الأخرى.

## أين تسمعه؟

في نقاشات تصميم الأنظمة، ومراجعات البنية البرمجية، وعند التخطيط لنقل الأنظمة من النمط المتراص (Monolith) إلى الخدمات المصغرة (Microservices).

## أمثلة

- We are decoupling the payment service from the order processing service using a message queue.
  - نحن نقوم بفك ارتباط خدمة الدفع عن خدمة معالجة الطلبات باستخدام طابور رسائل.
- Decoupling the frontend from the backend allows teams to deploy updates independently.
  - فك الارتباط بين الواجهة الأمامية والخلفية يسمح للفرق بنشر التحديثات بشكل مستقل.

## خطأ شائع

يعتقد بعض المهندسين أن فك الارتباط يعني إزالة جميع الروابط بين المكونات، لكن المقصود هو جعل هذه الروابط مرنة وغير معتمدة بشكل مباشر على تفاصيل التنفيذ الداخلية.
