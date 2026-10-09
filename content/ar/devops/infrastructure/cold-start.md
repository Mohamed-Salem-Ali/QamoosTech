---
id: cold-start
category: devops
subcategory: infrastructure
level: intermediate
related: [serverless, latency-vs-throughput, spin-up]
term: "Cold Start"
pronunciation: "كولْد ستارت"
translation: "بدء تشغيل بارد"
keywords: ["تأخير في أول طلب","بطء استجابة دالة سيرفرلس","تجهيز الموارد عند الطلب","مشكلة بدء التشغيل البارد","تحسين زمن استجابة السيرفرلس","تأخير تهيئة الحاوية الخاملة","كولد ستارت","جعل الدوال دافئة دائما","تأخير تحميل الكود الابتدائي","تجنب بطء الاستجابة الأولية","initial delay in serverless functions","slow first request latency","serverless container spin up delay","idle function initialization time","why is my lambda slow","warm up serverless functions","prevent cold start penalty","first request takes too long","container startup time issues","kold start","serverless latency optimization"]
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
- The first request after the night was slow because of a cold start.
  - كان الطلب الأول بعد الليل بطيئاً بسبب البدء البارد (cold start).

## خطأ شائع

الاعتقاد بأن كل طلب يعاني من نفس التأخير، بينما في الواقع الطلبات اللاحقة تعمل بشكل أسرع بكثير لأن الحاوية تكون جاهزة ودافئة.

## لا تخلطه مع

يشير البدء البارد إلى تأخير تهيئة دالة سيرفرلس خاملة، بينما إقلاع الحاوية هو العملية العامة لإطلاق أي حاوية أو مثيل جديد.

## قلها في العمل

- Did you notice any cold start issues after we deployed the new serverless functions?
  - هل لاحظت أي مشاكل في البدء البارد بعد أن نشرنا دوال السيرفرلس الجديدة؟
- We are keeping a few instances warm to mitigate the cold start penalty on our main endpoints.
  - نحن نحافظ على عدد قليل من المثيلات دافئة للتخفيف من تأثير عقوبة البدء البارد على نقاط النهاية الرئيسية لدينا.
