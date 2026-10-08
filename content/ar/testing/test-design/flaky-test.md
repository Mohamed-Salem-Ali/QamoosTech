---
id: flaky-test
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, integration-test, debugging]
term: "Flaky Test"
translation: "الاختبار المتذبذب"
pronunciation: "فلايكي تيست"
keywords: ["اختبار ينجح مرة ويفشل أخرى","نتائج اختبار متناقضة بدون تغيير الكود","فشل الاختبارات بشكل عشوائي","اختبارات غير موثوقة في البناء","اختبارات غير حتمية النتائج","فشل الاختبار على خادم البناء","فلايكي تيست","إصلاح الاختبارات غير المستقرة","test passes sometimes and fails sometimes","inconsistent test results without code changes","random test failures in ci cd","unreliable tests in pipeline","non deterministic test","intermittent test failure","flaky test","fix unstable automated tests","tests failing randomly on server"]
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

## قلها في العمل

- Can someone look at this flaky test, because it failed twice on the main branch without any code changes?
  - هل يمكن لأحد أن يلقي نظرة على هذا الـ flaky test، لأنه فشل مرتين على الفرع الرئيسي دون أي تغييرات في الكود؟
- We are temporarily disabling the flaky test in the pipeline to unblock the current deployments.
  - نقوم مؤقتاً بتعطيل الـ flaky test في خط الإنتاج لإلغاء حظر عمليات النشر الحالية.
