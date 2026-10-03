---
id: unit-test
category: testing
level: beginner
related: [integration-test, mocking, test-coverage]
term: "Unit Test"
translation: "اختبار وحدة"
pronunciation: "يونِت تست"
keywords: ["اختبار دالة واحدة فقط","فحص الكود بشكل منفصل","اختبارات برمجية صغيرة","التحقق من صحة الدوال","اختبار منطق الكود","طريقة اختبار الكود المعزول","كتابة اختبارات للوظائف","اختبارات برمجية تلقائية","تطبيق اختبارات الوحدة","فحص أجزاء الكود الصغيرة","يونيت تست","اختبارات برمجية بسيطة","test a single function","isolate code for testing","small automated code checks","verify logic in isolation","basic code testing method","unit testing framework","write tests for functions","test code without database","check individual code blocks","testing small components","unit tests vs integration","fast automated code validation"]
---
## التعريف

اختبار تلقائي صغير يفحص جزءًا واحدًا من الشيفرة، مثل دالة واحدة، بمعزل عن غيرها.

## أين تسمعه؟

مراجعات الشيفرة وخطوط CI والمقابلات.

## أمثلة

- Please add a unit test for the discount function.
  - من فضلك أضف unit test لدالة الخصم.
- All 120 unit tests passed in 3 seconds.
  - نجحت كل اختبارات الوحدة البالغة 120 اختبارًا خلال 3 ثوانٍ.

## خطأ شائع

كتابة اختبارات تعتمد على الشبكة أو قاعدة البيانات. يجب أن يكون الـ unit test سريعًا ومعزولًا.

## لا تخلطه مع

يفحص اختبار الوحدة (unit test) جزءًا واحدًا معزولًا من الشيفرة، بينما يتحقق اختبار التكامل (integration test) من كيفية عمل عدة مكونات معًا.

## قلها في العمل

- Can you make sure to write a unit test for this new helper function before we merge?
  - هل يمكنك التأكد من كتابة unit test لهذه الدالة المساعدة الجديدة قبل أن نقوم بالدمج؟
- I updated the unit test to cover the edge cases we discussed during the review.
  - لقد قمت بتحديث الـ unit test لتغطية الحالات الاستثنائية التي ناقشناها أثناء المراجعة.
