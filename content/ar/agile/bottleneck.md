---
id: bottleneck
category: agile
level: beginner
related: [blocker, dependency-injection, latency-vs-throughput]
term: "Bottleneck"
pronunciation: "بوتل-نيك"
translation: "عنق زجاجة"
---

## التعريف

عنق الزجاجة هو نقطة في مسار العمل يتباطأ فيها تدفق المهام أو يتوقف لأن القدرة الاستيعابية أقل من حجم العمل المطلوب.

## أين تسمعه؟

في اجتماعات مراجعة السبرنت الاستعادية (Retrospectives)، وجلسات تخطيط سعة الفريق، وعند تحليل أداء النظام أو أسباب تأخر العمل.

## أمثلة

- Code review is our current bottleneck because we have too few reviewers.
  - مراجعة الكود هي عنق الزجاجة الحالي لدينا لأن عدد المراجعين قليل جداً.
- The database query became a performance bottleneck during peak hours.
  - استعلام قاعدة البيانات أصبح عنق زجاجة للأداء خلال ساعات الذروة.

## خطأ شائع

الظن أن عنق الزجاجة هو خطأ برمجي (Bug) أو عائق (Blocker)، بينما هو في الواقع محدودية في القدرة الاستيعابية تبطئ العمل وليس عطلاً كاملاً أو توقفاً تاماً.

## لا تخلطه مع

عنق الزجاجة يبطئ مسار العمل الإجمالي بسبب محدودية القدرة الاستيعابية، بينما العائق (Blocker) يوقف التقدم في مهمة محددة تماماً حتى يتم حله.

## قلها في العمل

- Let us check where the main bottleneck is in our deployment pipeline before we optimize anything else.
  - دعنا نتحقق من مكان عنق الزجاجة الرئيسي في مسار نشر الكود لدينا قبل أن نحسن أي شيء آخر.
- Please investigate this service as it appears to be the performance bottleneck affecting our response times.
  - يرجى التحقيق في هذه الخدمة حيث يبدو أنها تمثل عنق زجاجة الأداء الذي يؤثر على أوقات الاستجابة لدينا.
