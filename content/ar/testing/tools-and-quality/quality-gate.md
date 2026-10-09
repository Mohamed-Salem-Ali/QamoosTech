---
id: quality-gate
category: testing
subcategory: tools-and-quality
level: intermediate
related: [test-coverage, ci-cd, linting]
term: "Quality Gate"
translation: "بوابة الجودة"
pronunciation: "كوالتي جيت"
keywords: ["بوابة الجودة","شروط دمج الكود","فحص الكود تلقائيا قبل الدمج","منع دمج الكود سيء الجودة","قواعد الفحص التلقائي في السي آي","الحد الأدنى لتغطية الاختبارات","كوالتي جيت","معايير قبول الكود البرمجي","automated code check rules","block merge on test fail","sonar check before merge","ci cd pass criteria","minimum coverage requirement","code quality threshold check","prevent merge on low coverage","automated pipeline checks","quality gate","kwolity gate"]
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
- The pipeline stops at the quality gate when the coverage drops below the limit.
  - يتوقف خط الأنابيب عند بوابة الجودة حين تنخفض التغطية عن الحد المسموح.

## خطأ شائع

جعل القواعد صارمة جدًا في البداية. عندها يكتب الناس اختبارات شكلية فقط للنجاح. ابدأ بمعقول وارفعه تدريجيًا.

## لا تخلطه مع

بوابة الجودة مقابل ضمان الجودة (QA). بوابة الجودة هي فحص آلي محدد ضمن مسار العمل، بينما ضمان الجودة هو العملية الشاملة لضمان جودة دورة حياة تطوير البرمجيات بالكامل.

## قلها في العمل

- We need to adjust the quality gate settings because the current threshold is blocking valid PRs.
  - نحتاج إلى تعديل إعدادات بوابة الجودة لأن الحد الأدنى الحالي يعيق طلبات الدمج (PRs) الصحيحة.
- Please review the failing quality gate report and address the identified issues before requesting a re-review.
  - يرجى مراجعة تقرير بوابة الجودة الذي فشل ومعالجة المشكلات المحددة قبل طلب مراجعة جديدة.
