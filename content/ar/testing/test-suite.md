---
id: test-suite
category: testing
level: beginner
related: [unit-test, integration-test, ci-cd]
term: "Test Suite"
pronunciation: "تست سويت"
translation: "حزمة اختبارات"
keywords: ["مجموعة اختبارات برمجية","تشغيل كل الاختبارات معا","حزمة اختبارات البرمجيات","مجموعة حالات الاختبار","تشغيل اختبارات النظام","تست سويت","ملف اختبارات شامل","تنفيذ حزمة الاختبار","collection of test cases","run all tests together","group of tests","execute multiple tests","test collection","full tests package","run test suite","all tests runner","test suite"]
---

## التعريف

مجموعة من حالات الاختبار المجمعة معاً لتنفيذها على البرنامج للتأكد من أنه يعمل بالشكل المطلوب.

## أين تسمعه؟

في مسارات الدمج والتسليم المستمر (CI/CD)، ومراجعات الكود، وعادةً عند نقاش جودة النظام بشكل عام.

## أمثلة

- The continuous integration pipeline runs the entire test suite on every pull request.
  - يقوم مسار الدمج المستمر بتشغيل حزمة الاختبارات كاملة مع كل طلب دمج (Pull Request).
- Developers run a fast unit test suite locally before pushing their changes.
  - يشغل المطورون حزمة اختبارات وحدة سريعة محلياً قبل رفع تعديلاتهم.

## خطأ شائع

الاعتقاد بأن Test Suite تعني اختباراً واحداً، بينما هي في الواقع مجموعة تحتوي على العديد من الاختبارات.

## لا تخلطه مع

حزمة الاختبارات (Test Suite) هي مجموعة تضم عدة اختبارات، بينما حالة الاختبار (Test Case) هي سيناريو اختبار فردي واحد فقط.

## قلها في العمل

- Let us run the full test suite locally before merging this PR to make sure nothing is broken.
  - دعونا نشغل حزمة الاختبارات كاملة محلياً قبل دمج طلب الدمج هذا للتأكد من عدم تعطل أي شيء.
- Please ensure that the integration test suite passes successfully before requesting a review.
  - يرجى التأكد من اجتياز حزمة اختبارات التكامل بنجاح قبل طلب مراجعة الكود.
