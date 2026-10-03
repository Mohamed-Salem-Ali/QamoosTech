---
id: quality-gate
category: testing
level: intermediate
related: [test-coverage, ci-cd, linting]
term: "Quality Gate"
translation: "بوابة الجودة"
pronunciation: "كوالتي جيت"
---
## التعريف

مجموعة قواعد تلقائية يجب أن تجتازها الشيفرة قبل دمجها، مثل نجاح الاختبارات وتغطية كافية وخلوها من المشكلات الخطيرة.

## أين تسمعه؟

CI/CD وأدوات مثل SonarQube.

## أمثلة

- The quality gate failed because coverage dropped below 80%.
  - فشلت بوابة الجودة لأن التغطية انخفضت عن 80%.
- No pull request merges unless the quality gate is green.
  - لا يُدمج أي pull request ما لم تكن بوابة الجودة خضراء.

## خطأ شائع

جعل القواعد صارمة جدًا في البداية. عندها يكتب الناس اختبارات شكلية فقط للنجاح. ابدأ بمعقول وارفعه تدريجيًا.
