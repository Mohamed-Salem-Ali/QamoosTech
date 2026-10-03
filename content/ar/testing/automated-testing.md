---
id: automated-testing
category: testing
level: beginner
related: [unit-test, regression, ci-cd]
term: "Automated Testing"
translation: "الاختبار الآلي"
pronunciation: "أوتوميتيد تيستينج"
---

## التعريف

استخدام الأدوات البرمجية والنصوص لتنفيذ اختبارات على الكود تلقائياً، بدلاً من اختبار الميزات يدوياً.

## أين تسمعه؟

- في مسارات النشر والدمج المستمر (`CI/CD pipelines`)
- أثناء مراجعة طلبات السحب (`Pull Requests`)
- في اجتماعات ضمان الجودة وتخطيط الإصدارات

## أمثلة

- We added automated testing to check our payment flow on every commit.
  - أضفنا الاختبار الآلي للتحقق من تدفق الدفع مع كل عملية تثبيت (`commit`).
- Automated testing helps us catch regressions before code reaches production.
  - يساعدنا الاختبار الآلي في اكتشاف أخطاء التراجع (`regressions`) قبل وصول الكود إلى بيئة الإنتاج.

## خطأ شائع

الاعتقاد بأن الاختبار الآلي يغني عن الاختبار اليدوي تماماً، بينما هو يكمله عبر تولي مهام الفحص المتكررة.

## لا تخلطه مع

يعمل الاختبار الآلي على تنفيذ نصوص برمجية مكتوبة مسبقاً للتحقق من البرمجيات، بينما يعتمد الاختبار اليدوي على المبرمجين أو مختبري الجودة لاستكشاف التطبيق يدوياً والعثور على أخطاء غير متوقعة.

## قلها في العمل

- Let's make sure we have automated testing in place for this new feature before merging the PR.
  - دعونا نتأكد من إعداد الاختبار الآلي لهذه الميزة الجديدة قبل دمج طلب السحب.
- Please ensure that automated testing covers the edge cases we discussed before submitting the code for review.
  - يرجى التأكد من أن الاختبار الآلي يغطي الحالات الحدية التي ناقشناها قبل إرسال الكود للمراجعة.
