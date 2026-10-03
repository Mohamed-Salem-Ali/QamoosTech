---
id: integration-test
category: testing
level: intermediate
related: [unit-test, ci-cd]
term: "Integration Test"
translation: "اختبار تكامل"
pronunciation: "إنتجريشن تست"
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
