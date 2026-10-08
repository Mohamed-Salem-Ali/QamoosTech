---
id: round-robin
category: architecture
subcategory: scaling
level: beginner
related: [load-balancer, sticky-sessions, horizontal-scaling]
aliases: ["weighted round robin", "least connections"]
term: "Round Robin"
translation: "التوزيع الدوري"
pronunciation: "راوند روبن"
keywords: ["التناوب بالدور", "التدوير على الخوادم", "أبسط طريقة توزيع", "حصة متساوية من الطلبات", "التوزيع الدوري الموزون", "التوزيع الدوري في DNS", "take turns", "rotate through servers", "simplest balancing method", "equal share of requests", "weighted round robin", "dns round robin"]
---

## التعريف

التوزيع الدوري (Round Robin) طريقة لتقاسم العمل بالتناوب: الطلب 1 إلى الخادم A والثاني إلى B والثالث إلى C ثم يعود إلى A.

## أين تسمعه؟

في إعدادات موزّع الأحمال وDNS، ونقاشات الجدولة، وجدولة العمليات في نظام التشغيل.

## أمثلة

- The balancer uses round robin across the three servers.
  - يستخدم الموزّع التوزيع الدوري على الخوادم الثلاثة.
- Round robin ignores how busy each server is.
  - التوزيع الدوري لا يلتفت إلى مدى انشغال كل خادم.
- Round robin sends the first request to server A and the second one to server B.
  - يرسل التوزيع بالتناوب الطلب الأول إلى الخادم A والثاني إلى الخادم B.

## خطأ شائع

الظن بأنه يوازن الحمل. تساوي عدد الطلبات قد يعني عملاً غير متساوٍ؛ فكّر بأقل اتصالات.

## لا تخلطه مع

أقل الاتصالات التي ترسل الطلب التالي إلى أقل الخوادم انشغالاً.

## قلها في العمل

- Start with round robin; switch if load is uneven.
  - ابدأ بالتوزيع الدوري وغيّره إن كان الحمل غير متساوٍ.
- Round robin with weights for the bigger server.
  - توزيع دوري موزون للخادم الأكبر.
