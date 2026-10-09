---
id: test-coverage
category: testing
subcategory: tools-and-quality
level: intermediate
related: [unit-test, quality-gate, mutation-testing]
term: "Test Coverage"
translation: "تغطية الاختبارات"
pronunciation: "تست كفريج"
keywords: ["نسبة الكود المختبر","قياس مدى شمولية الاختبارات","معرفة الأجزاء غير المختبرة","نسبة تغطية الاختبارات","تقرير تغطية الكود","فحص جودة الاختبارات البرمجية","تست كفريج","تحسين نسبة الاختبارات","قياس أسطر الكود المختبرة","معايير جودة الكود","مدى شمولية الاختبارات البرمجية","تغطية الاختبارات","percentage of code tested","how much code is tested","check untested code lines","code testing metrics","test coverage report","measure unit test effectiveness","ensure all code runs","test coverage percentage","identify untested modules","quality gate metrics","test execution ratio","code path coverage"]
---
## التعريف

النسبة المئوية من شيفرتك التي تُنفَّذ أثناء الاختبارات. تُظهر ما لم يُختبر، لكنها لا تُظهر جودة الاختبارات.

## أين تسمعه؟

بوابات الجودة وقواعد مراجعة الشيفرة.

## أمثلة

- Test coverage is 82%, but the payment module is not covered.
  - تغطية الاختبارات 82% لكن وحدة الدفع غير مغطاة.
- We require at least 80% coverage on new code.
  - نشترط تغطية 80% على الأقل للشيفرة الجديدة.
- The report shows 95 percent coverage, but the tests never check the error branch.
  - يُظهر التقرير تغطية 95 في المئة، لكن الاختبارات لا تفحص فرع الخطأ أبداً.

## خطأ شائع

السعي إلى تغطية 100% باختبارات بلا قيمة. الرقم المرتفع لا يثبت أن الشيفرة صحيحة.

## لا تخلطه مع

تغطي نسبة الاختبارات قياس الأسطر البرمجية التي تُنفَّذ أثناء الاختبار، بينما تقيس جودة الكود مدى جودة كتابة الكود وقابليته للصيانة.

## قلها في العمل

- Let us check the test coverage report before we merge this pull request.
  - دعنا نتحقق من تقرير تغطية الاختبارات قبل أن ندمج طلب السحب هذا.
- Please add unit tests to improve the test coverage for this module.
  - يرجى إضافة اختبارات وحدوية لتحسين تغطية الاختبارات لهذه الوحدة.
