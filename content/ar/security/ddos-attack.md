---
id: ddos-attack
category: security
level: beginner
related: [vulnerability, single-point-of-failure, load-balancer]
term: "DDoS Attack"
pronunciation: "دي دوس أتاك"
---

## التعريف

هجوم DDoS هو محاولة خبيثة لتعطيل حركة المرور الطبيعية لخادم أو خدمة أو شبكة عبر إغراقها بفيضان من الطلبات. يعتمد الهجوم على استخدام عدة أجهزة مخترقة كمصادر لحركة المرور، مما يجعل الخدمة غير متاحة للمستخدمين الحقيقيين.

## أين تسمعه؟

في تقارير الحوادث الأمنية، ومناقشات مراقبة البنية التحتية، وعند التخطيط لمرونة الخوادم.

## أمثلة

- The website went down after a massive DDoS attack targeted our main API endpoint.
  - توقف الموقع عن العمل بعد تعرض نقطة النهاية الرئيسية لواجهة البرمجة لهجوم DDoS ضخم.
- We implemented a traffic filtering service to mitigate potential DDoS attacks.
  - قمنا بتنفيذ خدمة تصفية حركة المرور للحد من هجمات DDoS المحتملة.

## خطأ شائع

الخلط بين هجوم DDoS وبين تعطل الخادم بسبب خطأ برمجي (Bug)؛ هجوم DDoS هو جهد خارجي منسق يهدف لاستنزاف موارد النظام من خلال حجم حركة مرور هائل.

## قلها في العمل

- Let's check the traffic logs to see if this sudden latency spike is a DDoS attack or just organic user growth.
  - دعونا نتحقق من سجلات حركة المرور لنرى ما إذا كان هذا الارتفاع المفاجئ في زمن الانتقال هجوم DDoS أم مجرد نمو عضوي للمستخدمين.
- We need to configure our cloud provider's anti-DDoS protection before the upcoming product launch.
  - يجب علينا تكوين حماية الحماية من هجمات DDoS الخاصة بمزود السحابة لدينا قبل إطلاق المنتج القادم.
