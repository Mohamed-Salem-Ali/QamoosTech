---
id: acceptance-test
category: testing
subcategory: test-types
level: intermediate
related: [user-story, deliverable]
term: "Acceptance Test"
pronunciation: "أكسيبتانس تيست"
translation: "اختبار القبول"
keywords: ["اختبار جاهزية النظام","معايير الموافقة النهائية","التأكد من متطلبات العمل","اختبارات ما قبل التسليم","التحقق من قصة المستخدم","اختبار قبول البرمجيات","تأكيد مطابقة النظام للمتطلبات","سيناريوهات اختبار القبول","أكسيبتانس تيست","اختبارات التحقق من الميزات","verify business requirements","final system sign off","ready for delivery check","feature completion criteria","ensure software meets needs","uat vs acceptance test","validation against user stories","project handoff testing","functional business verification","acceptance testing process"]
---

## التعريف

اختبار رسمي يُجرى للتأكد من أن النظام يلبي متطلبات العمل وجاهز للتسليم. يضمن هذا الاختبار أن البرنامج يعمل وفقاً لاحتياجات المستخدم قبل قبوله رسمياً.

## أين تسمعه؟

أثناء مراجعات الـ sprint، أو عند تسليم المشاريع، أو عند مناقشة معايير الموافقة النهائية مع أصحاب المصلحة.

## أمثلة

- We need to run the acceptance tests before deploying to production.
  - نحتاج إلى تشغيل اختبارات القبول قبل النشر في بيئة الإنتاج.
- The user story is not complete until it passes the acceptance test.
  - قصة المستخدم (user story) لا تعتبر مكتملة حتى تجتاز اختبار القبول.

## خطأ شائع

الخلط بين اختبارات القبول واختبارات الوحدة (unit tests)؛ فبينما تتحقق اختبارات الوحدة من عمل أجزاء الكود الفردية، تركز اختبارات القبول على ما إذا كانت الميزة بأكملها تحقق هدف العمل المطلوب.

## لا تخلطه مع

غالباً ما يتم الخلط بين اختبار القبول واختبار قبول المستخدم (UAT)؛ فبينما يعد اختبار القبول مصطلحاً عاماً للتحقق من متطلبات العمل، يشير UAT تحديداً إلى المرحلة النهائية التي يقوم فيها المستخدمون الفعليون بالتحقق من النظام في بيئة عمل حقيقية.

## قلها في العمل

- Let's quickly go over the acceptance test criteria to make sure we're all on the same page before the demo.
  - دعونا نراجع معايير اختبار القبول سريعاً للتأكد من أننا جميعاً على توافق قبل العرض التوضيحي.
- I have updated the ticket with the latest acceptance test scenarios for your review and approval.
  - لقد قمت بتحديث التذكرة بأحدث سيناريوهات اختبار القبول لمراجعتها والحصول على موافقتكم.
