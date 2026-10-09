---
id: parametrized-test
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, test-case, edge-case]
tags: [python]
aliases: ["data-driven test", "parameterized test", "table-driven test"]
term: "Parametrized Test"
translation: "الاختبار المُعمَّم بمعاملات"
pronunciation: "باراميترايزد تست"
keywords: ["اختبار واحد لمدخلات كثيرة", "أداة parametrize في pytest", "جدول حالات", "نفس المنطق ببيانات مختلفة", "تجنب نسخ الاختبارات", "أزواج المدخل والمتوقع", "one test many inputs", "pytest parametrize", "table of cases", "same logic different data", "avoid copy paste tests", "input and expected pairs"]
---

## التعريف

الاختبار المُعمَّم بمعاملات (Parametrized Test) ينفّذ منطق الاختبار نفسه على مجموعات كثيرة من المدخلات والنتائج المتوقعة، فتكتب الاختبار مرة وتسرد الحالات.

## أين تسمعه؟

في pytest (`@pytest.mark.parametrize`)، وأدلة اختبار الوحدات، ومراجعات تزيل الاختبارات المنسوخة.

## أمثلة

- Parametrize the test with each edge case: empty, one, many.
  - عمّم الاختبار على كل حالة حدّية: فارغ وواحد وكثير.
- Each row in the table shows as its own pass or fail.
  - يظهر كل صف في الجدول نجاحاً أو فشلاً مستقلاً.
- One parametrized test covers ten date formats, and each format reports its own result.
  - يغطي اختبار واحد بمعاملات عشر صيغ تاريخ، وتُبلغ كل صيغة عن نتيجتها.

## خطأ شائع

حشر الكثير في جدول واحد بحالات تختبر أشياء مختلفة. جمّع الحالات التي تشترك في قاعدة واحدة.

## لا تخلطه مع

حلقة داخل اختبار تتوقف عند أول فشل وتُخفي الباقي. أما الحالات المعمَّمة فتُبلَّغ كلٌّ على حدة.

## قلها في العمل

- Turn these five tests into one parametrized test.
  - حوّل هذه الاختبارات الخمسة إلى اختبار معمَّم واحد.
- Add another row for the leap-year case.
  - أضف صفاً آخر لحالة السنة الكبيسة.
