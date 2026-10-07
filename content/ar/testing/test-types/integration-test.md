---
id: integration-test
category: testing
subcategory: test-types
level: intermediate
related: [unit-test, ci-cd]
term: "Integration Test"
translation: "اختبار تكامل"
pronunciation: "إنتجريشن تست"
keywords: ["اختبار التكامل","فحص عدة أجزاء معاً","اختبار الـ api مع قاعدة البيانات","اختبار المكونات معاً","انتجريشن تست","اختبار الاتصال بقاعدة البيانات","فحص عمل الوحدات معاً","اختبار النظام المدمج","test multiple components together","api test with database","test modules working together","system integration testing","interation test","backend testing with db","tests slower than unit tests","test api and database connection","component interaction testing"]
---
## التعريف

اختبار يفحص عدة أجزاء تعمل معًا، مثل endpoint في API مع قاعدة بيانات اختبار حقيقية.

## أين تسمعه؟

مشاريع الـ backend وإعدادات CI.

## أمثلة

- The integration test creates an order and checks the database.
  - ينشئ اختبار التكامل طلبًا ويفحص قاعدة البيانات.
- Integration tests are slower, so we run them after unit tests.
  - اختبارات التكامل أبطأ، لذلك نشغّلها بعد اختبارات الوحدة.

## خطأ شائع

اختبار كل شيء باختبارات التكامل فقط. هي بطيئة، فاجعل معظم الاختبارات اختبارات وحدة.

## لا تخلطه مع

اختبار التكامل مقابل اختبار الطرف إلى الطرف (E2E): يتحقق اختبار التكامل من التفاعل بين وحدتين أو أكثر داخل النظام، بينما يحاكي اختبار الطرف إلى الطرف رحلة مستخدم كاملة عبر كامل حزمة التطبيق.

## قلها في العمل

- We need to add an integration test for the new payment service to ensure it communicates correctly with the database.
  - نحتاج إلى إضافة اختبار تكامل لخدمة الدفع الجديدة للتأكد من أنها تتواصل بشكل صحيح مع قاعدة البيانات.
- I have updated the CI pipeline to include an integration test that validates the API response against the staging environment.
  - لقد قمت بتحديث خط أنابيب الـ CI ليشمل اختبار تكامل يتحقق من استجابة الـ API مقابل بيئة الـ staging.
