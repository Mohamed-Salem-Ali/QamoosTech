---
id: test-isolation
category: testing
subcategory: test-design
level: intermediate
related: [test-fixture, deterministic-test, flaky-test]
tags: [python]
aliases: ["isolated tests", "independent tests"]
term: "Test Isolation"
translation: "عزل الاختبارات"
pronunciation: "تست آيزوليشن"
keywords: ["كل اختبار يعمل وحده", "الاختبارات لا تؤثر ببعضها", "تنجح بأي ترتيب عشوائي", "حالة نظيفة لكل اختبار", "لا بيانات مشتركة قابلة للتغيير", "قاعدة بيانات جديدة لكل اختبار", "each test works alone", "tests do not affect each other", "random order still passes", "clean state per test", "no shared mutable data", "fresh database per test"]
---

## التعريف

عزل الاختبارات (Test Isolation) يعني أن كل اختبار يجهّز حالته بنفسه وينظّف بعده، فتنجح الاختبارات بأي ترتيب ولا يسبب فشل واحد فشلاً آخر.

## أين تسمعه؟

في مطاردة الاختبارات المتذبذبة، وأخطاء ترتيب الاختبارات، وإعدادات اختبارات قاعدة البيانات بالمعاملات أو بيانات جديدة.

## أمثلة

- The test passes alone but fails in the full suite, so isolation is broken.
  - ينجح الاختبار وحده ويفشل مع المجموعة الكاملة، إذن العزل مكسور.
- Each test runs inside a transaction that is rolled back.
  - يعمل كل اختبار داخل معاملة تُلغى بعده.
- Each test rolls back its own changes, so the order in which the tests run does not matter.
  - يتراجع كل اختبار عن تغييراته، فلا يهم الترتيب الذي تعمل به الاختبارات.

## خطأ شائع

مشاركة قائمة على مستوى الوحدة أو صفوف قاعدة بيانات بين الاختبارات. عندها يقرر الترتيب من ينجح.

## لا تخلطه مع

الـ test fixture وهو أداة لإنشاء الحالة النظيفة. أما العزل فهو الهدف الذي تخدمه الـ fixtures.

## قلها في العمل

- Randomise the order to check isolation.
  - اجعل الترتيب عشوائياً لفحص العزل.
- Reset the state in teardown.
  - أعد ضبط الحالة في مرحلة التنظيف.
