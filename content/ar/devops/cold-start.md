---
id: cold-start
category: devops
level: intermediate
related: [serverless, latency-vs-throughput, spin-up]
term: "Cold Start"
pronunciation: "كولْد ستارت"
translation: "بدء تشغيل بارد"
---

## التعريف

التأخير الذي يحدث عندما تتعامل دالة سيرفرلس أو حاوية مع طلبها الأول بعد فترة خمول، لأن المنصة تحتاج إلى تجهيز الموارد وتحميل الكود أولاً.

## أين تسمعه؟

في اجتماعات قياس الأداء، ونقاشات هندسة السيرفرلس (Serverless)، وعند تحسين زمن الاستجابة لواجهات البرمجة.

## أمثلة

- The first API request took three seconds because of a cold start.
  - استغرق طلب واجهة برمجة التطبيقات الأول ثلاث ثوانٍ بسبب البدء البارد.
- We use provisioned concurrency to eliminate cold starts for critical endpoints.
  - نستخدم التزامن المجهز مسبقاً للتخلص من البدء البارد لنقاط النهاية الحرجة.

## خطأ شائع

الاعتقاد بأن كل طلب يعاني من نفس التأخير، بينما في الواقع الطلبات اللاحقة تعمل بشكل أسرع بكثير لأن الحاوية تكون جاهزة ودافئة.
