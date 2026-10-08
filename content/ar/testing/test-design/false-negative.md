---
id: false-negative
category: testing
subcategory: test-design
level: intermediate
related: [bug, unit-test, integration-test]
term: "False Negative"
translation: "نتيجة سلبية كاذبة"
pronunciation: "فالس نيجيتيف"
keywords: ["اختبار لم يكتشف الخطأ","فشل الاختبار في رصد المشكلة","نتيجة اختبار سلبية خاطئة","الاختبار نجح رغم وجود خطأ","النظام أغفل خطأ برمجي","فالس نيجيتيف","خطأ لم يتم رصده في الاختبار","اختبار يفوت الأخطاء الموجودة","عدم كشف الثغرة في الاختبار","missed bug in tests","test failed to catch defect","falsely passing test","test says pass but has bug","undetected error in testing","false negative test result","fals negative","test missed a real bug","test failed to detect issue","hidden bug in test suite"]
---

## التعريف

يحدث الـ False Negative عندما تُشير أداة الاختبار أو الفحص بشكل خاطئ إلى عدم وجود مشكلة، بينما في الواقع يوجد خطأٌ برمجيٌ (bug) أو خلل. هو فشل في اكتشاف مشكلة كان يجب أن يتم رصدها.

## أين تسمعه؟

تسمعه أثناء تحليل نتائج الاختبارات، أو عند تصنيف الأخطاء البرمجية، أو عند مناقشة مدى موثوقية مجموعات الاختبار الآلي.

## أمثلة

- The security scan returned a false negative, missing a critical vulnerability in the code.
  - أظهر فحص الأمان نتيجة False Negative، حيث فشل في اكتشاف ثغرة أمنية حرجة في الكود.
- We had a false negative in our unit tests because the assertion was checking the wrong variable.
  - واجهنا حالة False Negative في اختبارات الوحدات لأن عملية التحقق كانت تفحص متغيراً خاطئاً.

## خطأ شائع

يخلط المهندسون غالباً بين الـ False Negative والـ False Positive؛ تذكر أن الـ False Negative يعني أن النظام "أغفل" خطأً برمجياً، بينما الـ False Positive يعني أن النظام "أبلغ عن خطأ" غير موجود أصلاً.

## لا تخلطه مع

يحدث الـ False Negative عندما يفشل النظام في اكتشاف خطأ موجود بالفعل، بينما يحدث الـ False Positive عندما يشير النظام بشكل خاطئ إلى وجود خطأ غير موجود أصلاً.

## قلها في العمل

- I suspect our latest smoke test gave us a false negative, so we should manually verify that module again.
  - أشك أن اختبار الدخان الأخير أعطانا نتيجة False Negative، لذا يجب علينا التحقق من تلك الوحدة يدوياً مرة أخرى.
- The automated regression suite reported a false negative for this feature; I have attached the logs for further investigation.
  - أبلغت مجموعة اختبارات الانحدار الآلية عن نتيجة False Negative لهذه الميزة؛ لقد أرفقت السجلات لمزيد من التحقيق.
