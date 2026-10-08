---
id: load-testing
category: testing
subcategory: test-types
level: intermediate
related: [scalability, monitoring]
term: "Load Testing"
translation: "اختبار الحمل"
pronunciation: "لود تيستينج"
keywords: ["محاكاة ضغط المستخدمين على النظام","اختبار أداء الخوادم تحت الضغط","معرفة تحمل السيرفر لعدد المستخدمين","اختبار النظام قبل موسم الأعياد","فحص استقرار التطبيق وقت الذروة","قياس سرعة الاستجابة تحت الضغط","لود تيستينج","اختبار الحمل على السيرفر","فحص قدرة الخادم على التحمل","test system under high traffic","simulate multiple concurrent users","check server performance peak hours","measure application speed under pressure","performance testing process","stress testing vs load testing","lod testing","load test api endpoints","check server capacity before launch","handle heavy user traffic"]
---

## التعريف

هو عملية اختبار أداء تهدف إلى محاكاة ضغط المستخدمين الحقيقيين على النظام البرمجي لقياس مدى استقراره واستجابته تحت ظروف التشغيل العادية والمكثفة. يضمن هذا الاختبار بقاء التطبيق سريعاً ومستقراً عند دخول عدد كبير من المستخدمين في وقت واحد.

## أين تسمعه؟

أثناء التخطيط لدورة العمل (Sprint)، أو عند مناقشة البنية التحتية، أو عند الاستعداد لإطلاق تحديث كبير للمنتج.

## أمثلة

- We need to perform load testing before the holiday season to ensure our servers don't crash.
  - نحتاج إلى إجراء Load testing قبل موسم الأعياد للتأكد من أن خوادمنا لن تتعطل.
- The team ran a load test to see how many concurrent users the new API endpoint can handle.
  - أجرى الفريق Load test لمعرفة عدد المستخدمين المتزامنين الذين يمكن لنقطة النهاية (endpoint) الجديدة تحملهم.

## خطأ شائع

الخلط بين Load testing و Stress testing؛ فبينما يختبر الـ Load testing الأداء ضمن الحدود المتوقعة، يقوم الـ Stress testing بدفع النظام إلى ما بعد حدوده القصوى لمعرفة كيف ومتى ينهار النظام.

## قلها في العمل

- Let's review the load testing results in our next standup to see if we hit our latency goals.
  - دعنا نراجع نتائج الـ load testing في اجتماع الـ standup القادم لنرى ما إذا قد حققنا أهداف زمن الانتقال.
- Please attach the latest load testing report to this ticket before we merge the changes.
  - يرجى إرفاق أحدث تقرير لـ load testing بهذه التذكرة قبل أن نقوم بدمج التعديلات.
