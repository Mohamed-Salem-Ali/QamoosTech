---
id: dummy-object
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [test-double, mocking, test-fixture]
aliases: ["dummy"]
term: "Dummy Object"
translation: "كائن الحشو"
pronunciation: "دامي أوبجكت"
keywords: ["placeholder argument in test", "pass none to a function", "unused parameter in unit test", "fake logger for a test", "test double that is never used", "required argument the test ignores", "كائن الحشو في الاختبار", "تمرير قيمة شكلية لدالة", "معامل لا يستخدمه الاختبار", "مسجِّل وهمي لاختبار", "بديل لا يُستدعى أبداً", "وسيط مطلوب يتجاهله الاختبار"]
---

## التعريف

بديل اختباري يُمرَّر فقط لملء معامل تطلبه الدالة. لا يستخدمه الاختبار أبداً، لذلك قد يكون كائناً فارغاً أو None أو أي قيمة شكلية أخرى.

## أين تسمعه؟

في اختبارات الوحدة التي تستدعي دالة تطلب مسجِّلاً (logger) أو مستخدماً أو اتصالاً لا يهتم به الاختبار.

## أمثلة

- The test passes a dummy logger, because the function requires one but the test does not check the logs.
  - يمرّر الاختبار مسجِّلاً وهمياً لأن الدالة تطلب واحداً، لكنه لا يفحص السجلات.
- Pass None as a dummy user when the function never reads it in this test.
  - مرّر None كمستخدم وهمي حين لا تقرأه الدالة في هذا الاختبار.
- A dummy is not set up to answer anything. If the code does use it, the test should fail.
  - لا يُهيّأ الكائن الوهمي ليجيب عن شيء؛ فإن استخدمه الكود، ينبغي أن يفشل الاختبار.

## خطأ شائع

استخدام كائن وهمي حيث تقرأ الشيفرة قيمته فعلاً. قد ينجح اختبار يعتمد على قيمة شكلية لسبب خاطئ.

## لا تخلطه مع

الـ stub يعيد إجابات محددة عند استدعائه، والـ fake تنفيذ مبسّط يعمل فعلاً. أما الكائن الوهمي فلا يُستدعى في الاختبار أصلاً.

## قلها في العمل

- We can pass a dummy logger here, because this test does not check any log output.
  - يمكننا تمرير مسجِّل وهمي هنا، لأن هذا الاختبار لا يفحص أي مخرجات سجلات.
- Replace the dummy with a stub if the code now needs a value back.
  - استبدل الكائن الوهمي بـ stub إن احتاجت الشيفرة الآن قيمة ترجع إليها.
