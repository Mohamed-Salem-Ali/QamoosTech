---
id: false-positive
category: testing
level: intermediate
related: [bug, debugging, regression]
term: "False Positive"
pronunciation: "فولس بوزیتیڤ"
translation: "إنذار كاذب"
---

## التعريف

هو بلاغ خطأ أو تحذير يصدر عن أداة فحص أو اختبار على أن الكود فيه مشكلة، بينما الكود في الواقع سليم ويعمل بشكل صحيح.

## أين تسمعه؟

في مسارات الدمج والتسليم المستمر (CI/CD)، والفحوصات الأمنية، وأدوات تحليل الكود الثابت.

## أمثلة

- The security scanner flagged a vulnerability, but it was just a false positive.
  - رصد فحص الأمان ثغرة أمنية، لكنه كان مجرد إنذار كاذب.
- We had to update the linter rules to ignore false positives in our test files.
  - اضطررنا لتحديث قواعد أداة التدقيق لتجاهل الإنذارات الكاذبة في ملفات الاختبار الخاصة بنا.

## خطأ شائع

التعامل مع كل تنبيه على أنه خطأ حقيقي بشكل أعمى، مما يضيع وقتاً طويلاً في محاولة إصلاح كود يعمل جيداً أساساً.
