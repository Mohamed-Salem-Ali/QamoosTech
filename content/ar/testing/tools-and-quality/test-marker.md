---
id: test-marker
category: testing
subcategory: tools-and-quality
level: intermediate
related: [pytest, test-suite, flaky-test]
tags: [python]
aliases: ["skip", "xfail", "pytest mark"]
term: "Test Marker"
translation: "وسم الاختبار"
pronunciation: "تست ماركر"
keywords: ["تخطي اختبار", "فشل متوقع", "وسم الاختبارات بالبطيء أو التكامل", "تشغيل الاختبارات الموسومة فقط", "وسوم pytest", "تخطٍّ مشروط", "skip a test", "xfail expected failure", "label tests slow or integration", "run only marked tests", "pytest mark", "conditional skip"]
---

## التعريف

وسم الاختبار (Test Marker) علامة على اختبار تغيّر طريقة تشغيله: `skip` يستبعده و`xfail` يتوقع فشله، والوسوم المخصصة مثل `slow` تتيح اختيار مجموعات.

## أين تسمعه؟

في مجموعات pytest، وإعدادات CI التي تشغّل الاختبارات السريعة أولاً، وحلول الأخطاء المعروفة.

## أمثلة

- Mark the test `xfail` until the bug is fixed.
  - ضع وسم `xfail` على الاختبار حتى يُصلح الخطأ.
- Run `pytest -m "not slow"` for the quick feedback loop.
  - شغّل `pytest -m "not slow"` لحلقة تغذية راجعة سريعة.
- The slow integration tests are marked, so the quick run skips them.
  - عُلِّمت اختبارات التكامل البطيئة، فتتخطاها عملية التشغيل السريعة.

## خطأ شائع

استخدام `skip` لإخفاء اختبار فاشل ثم نسيانه. أضف سبباً وتذكرة وراجع الاختبارات المتخطاة.

## لا تخلطه مع

حذف الاختبار. الوسم يُبقيه ظاهراً مع القول إنه معروف بالفشل أو البطء.

## قلها في العمل

- Add a reason to the skip marker.
  - أضف سبباً إلى وسم التخطي.
- Tag the slow tests so CI can run them nightly.
  - ضع وسماً على الاختبارات البطيئة ليشغّلها CI ليلاً.
