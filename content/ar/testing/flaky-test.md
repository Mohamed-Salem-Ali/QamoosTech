---
id: flaky-test
category: testing
level: intermediate
related: [unit-test, integration-test, debugging]
term: "Flaky Test"
pronunciation: "فلايكي تيست"
---

## التعريف

هو اختبار برمجيات يعطي نتائج متناقضة (نجاح أو فشل) لنفس الكود دون أي تغيير فيه. يحدث هذا عادةً بسبب عوامل غير حتمية مثل تأخر الشبكة (latency) أو تداخل العمليات أو عدم عزل الاختبار بشكل صحيح.

## أين تسمعه؟

في تقارير خطوط الإنتاج البرمجي (CI/CD)، أو أثناء مراجعة الكود، أو عند مناقشة مدى موثوقية مجموعة الاختبارات في الـ sprint.

## أمثلة

- We need to quarantine this flaky test because it is causing random build failures.
  - نحتاج إلى عزل هذا الـ flaky test لأنه يتسبب في فشل عملية البناء بشكل عشوائي.
- The team spent all day debugging a flaky test that only fails on the CI server.
  - قضى الفريق اليوم بأكمله في محاولة إصلاح flaky test لا يفشل إلا على خادم الـ CI.

## خطأ شائع

الاعتقاد بأن الـ flaky test يشير دائماً إلى وجود خطأ (bug) في كود التطبيق؛ غالباً ما تكون المشكلة في بيئة الاختبار نفسها أو في طريقة كتابة الاختبار وليس في الميزة البرمجية.
