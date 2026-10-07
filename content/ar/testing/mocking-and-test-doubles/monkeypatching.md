---
id: monkeypatching
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [mocking, test-double, test-isolation]
tags: [python]
aliases: ["monkey patch", "monkeypatch"]
term: "Monkeypatching"
translation: "الترقيع الديناميكي"
pronunciation: "مونكي باتشينج"
keywords: ["استبدال دالة مؤقتاً", "ترقيع أثناء الاختبار", "أداة monkeypatch", "تبديل قيمة للاختبار", "التعديل أثناء التشغيل", "تزييف الساعة أو متغير البيئة", "replace a function temporarily", "patch during a test", "monkeypatch fixture", "swap a value for the test", "override at runtime", "fake the clock or env var"]
---

## التعريف

الترقيع الديناميكي (Monkeypatching) يستبدل دالة أو خاصية أو قيمة مؤقتاً أثناء تشغيل الاختبار، ثم يعيد الأصل بعده.

## أين تسمعه؟

في أدلة اختبار بايثون (أداة `monkeypatch` في pytest)، وعندما يجب أن يتجنب الاختبار الشبكة أو الساعة أو متغيرات البيئة الحقيقية.

## أمثلة

- Monkeypatch `time.time` so the test controls the clock.
  - رقّع `time.time` ليتحكم الاختبار في الساعة.
- Use monkeypatch to set the env var only for this test.
  - استخدم monkeypatch لضبط متغير البيئة لهذا الاختبار فقط.

## خطأ شائع

الترقيع في المكان الخطأ. رقّع الاسم حيث يبحث عنه الكود المختبَر لا حيث عُرّف.

## لا تخلطه مع

المحاكاة (Mocking) التي تبني عادة كائناً مزيفاً يسجل الاستدعاءات. أما الترقيع فهو فعل تبديل شيء في مكانه.

## قلها في العمل

- Just monkeypatch it instead of changing the code.
  - ارقّعه فقط بدل تغيير الكود.
- Monkeypatches are undone after each test.
  - تُلغى الترقيعات بعد كل اختبار.
