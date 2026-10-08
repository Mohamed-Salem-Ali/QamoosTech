---
id: pytest
category: testing
subcategory: tools-and-quality
level: beginner
related: [test-runner, test-fixture, assertion, test-marker]
tags: [python]
term: "pytest"
translation: "إطار اختبار pytest"
pronunciation: "باي تست"
keywords: ["إطار اختبار بايثون", "تشغيل الاختبارات بـ pytest", "عبارات assert", "الـ fixtures والإضافات", "اكتشاف الاختبارات", "تصفية الاختبارات بالاسم", "python testing framework", "run tests with pytest", "assert statements", "fixtures and plugins", "test discovery", "pytest -k"]
---

## التعريف

أداة pytest هي أشهر إطار اختبار في بايثون. تجد دوال الاختبار تلقائياً، وتستخدم `assert` العادية، وتوفّر fixtures والتعميم بمعاملات والإضافات.

## أين تسمعه؟

في ملفات README لمشاريع بايثون، وسكريبتات CI (`pytest -q`)، وأوصاف وظائف الـ backend بلغة بايثون.

## أمثلة

- Run `pytest -k payment` to run only the payment tests.
  - شغّل `pytest -k payment` لتشغيل اختبارات الدفع فقط.
- pytest rewrites assert so failures show both values.
  - تعيد pytest كتابة assert فتعرض الفشلات القيمتين معاً.
- pytest reports which test failed and shows the values that did not match.
  - يُبلغ pytest عن الاختبار الذي فشل، ويعرض القيم التي لم تتطابق.

## خطأ شائع

تسمية الملفات أو الدوال بما لا تجده pytest. افتراضياً تبحث عن `test_*.py` ودوال `test_*`.

## لا تخلطه مع

‏`unittest` الإطار المدمج في بايثون. وهو أكثر إسهاباً ويقوم على الأصناف.

## قلها في العمل

- Add pytest to the dev dependencies.
  - أضف pytest إلى اعتماديات التطوير.
- CI runs pytest on every push.
  - يشغّل CI أداة pytest عند كل دفع.
