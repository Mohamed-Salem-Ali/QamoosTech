---
id: false-negative
category: testing
level: intermediate
related: [bug, unit-test, integration-test]
term: "False Negative"
pronunciation: "فالس نيجيتيف"
---

## التعريف

يحدث الـ False Negative عندما تُشير أداة الاختبار أو الفحص بشكل خاطئ إلى عدم وجود مشكلة، بينما في الواقع يوجد خطأ برمجياً (bug) أو خلل. هو فشل في اكتشاف مشكلة كان يجب أن يتم رصدها.

## أين تسمعه؟

تسمعه أثناء تحليل نتائج الاختبارات، أو عند تصنيف الأخطاء البرمجية، أو عند مناقشة مدى موثوقية مجموعات الاختبار الآلي.

## أمثلة

- The security scan returned a false negative, missing a critical vulnerability in the code.
  - أظهر فحص الأمان نتيجة False Negative، حيث فشل في اكتشاف ثغرة أمنية حرجة في الكود.
- We had a false negative in our unit tests because the assertion was checking the wrong variable.
  - واجهنا حالة False Negative في اختبارات الوحدات لأن عملية التحقق كانت تفحص متغيراً خاطئاً.

## خطأ شائع

يخلط المهندسون غالباً بين الـ False Negative والـ False Positive؛ تذكر أن الـ False Negative يعني أن النظام "فوت" خطأً برمجياً، بينما الـ False Positive يعني أن النظام "أبلغ عن خطأ" غير موجود أصلاً.
