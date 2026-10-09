---
id: system-under-test
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, test-double, test-isolation]
tags: [python]
aliases: ["sut", "class under test", "code under test"]
term: "System Under Test"
translation: "النظام قيد الاختبار"
pronunciation: "سيستم أندر تست"
keywords: ["الكود الذي يجري اختباره", "اختصار SUT", "ما يفحصه الاختبار", "هدف الاختبار", "الصنف قيد الاختبار", "كل ما عداه بديل", "the code being tested", "sut", "what the test checks", "target of the test", "class under test", "everything else is a double"]
---

## التعريف

النظام قيد الاختبار (SUT) هو القطعة من الكود التي يفحصها الاختبار. وكل ما حولها إما دعم حقيقي أو بديل.

## أين تسمعه؟

في كتب الاختبار ونقاشات التصميم، خصوصاً عند تقرير ما يُزيَّف وما يبقى حقيقياً.

## أمثلة

- The SUT is the `Schedule` class; the database is a fake.
  - الـ SUT هو صنف `Schedule`؛ وقاعدة البيانات مزيفة.
- If the SUT is too hard to set up, the design may be too coupled.
  - إذا كان إعداد الـ SUT صعباً جداً فقد يكون التصميم مترابطاً أكثر من اللازم.
- The system under test is the billing function, and the payment API is replaced by a stub.
  - النظام المُختبَر هو دالة الفوترة، ويُستبدل واجهة الدفع بـ stub.

## خطأ شائع

تزييف الشيء الذي تريد اختباره. حينها يختبر الاختبار الزيف لا كودك.

## لا تخلطه مع

البديل الاختباري (Test Double) وهو بديل لشيء حول الـ SUT، وليس الـ SUT نفسه أبداً.

## قلها في العمل

- What's the system under test here?
  - ما النظام قيد الاختبار هنا؟
- Keep the SUT real and fake only its dependencies.
  - أبقِ الـ SUT حقيقياً وزيّف اعتمادياته فقط.
