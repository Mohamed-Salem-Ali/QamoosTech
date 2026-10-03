---
id: load-balancer
category: architecture
level: intermediate
related: [scalability, reverse-proxy, single-point-of-failure]
term: "Load Balancer"
translation: "موزّع الأحمال"
pronunciation: "لود بالانسر"
---
## التعريف

مكوّن يوزّع الطلبات الواردة على عدة خوادم حتى لا يتعرض خادم واحد لحمل زائد.

## أين تسمعه؟

إعدادات السحابة وتصميمات التوافر العالي.

## أمثلة

- The load balancer sends traffic only to healthy servers.
  - يرسل الـ load balancer الحركة إلى الخوادم السليمة فقط.
- We have two servers behind a load balancer.
  - لدينا خادمان خلف load balancer.

## خطأ شائع

حفظ جلسات المستخدمين في ذاكرة الخادم. قد يصل الطلب التالي إلى خادم آخر فتضيع الجلسة.
