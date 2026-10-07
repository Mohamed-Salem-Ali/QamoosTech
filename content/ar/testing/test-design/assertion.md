---
id: assertion
category: testing
subcategory: test-design
level: beginner
related: [unit-test, debugging]
term: "Assertion"
pronunciation: "أَسيرشُن"
translation: "تأكيد"
keywords: ["التحقق من صحة شرط في الاختبار","التأكد من النتيجة المتوقعة في الاختبار","عبارة التحقق في الاختبارات","فحص الشروط في اختبار الوحدة","تأكيد صحة البيانات في الاختبار","أسرشن","فحص النتيجة في الاختبار","التحقق من قيمة المتغير في الاختبار","check if condition is true in test","verify test result with statement","unit test check condition","test condition validation","assert statement in tests","make sure test passes or fails","test expectation check","assrt","asserting","verify expected output in test"]
---

## التعريف

عبارة داخل الاختبار البرمجي تتحقق من صحة شرط معين؛ وإذا كان الشرط خاطئاً، يفشل الاختبار.

## أين تسمعه؟

في نقاشات اختبارات الوحدة، والاختبارات التكاملية، والتطوير المعتمد على الاختبار.

## أمثلة

- The test uses an assertion to verify that the function returns the correct calculated total.
  - يستخدم الاختبار تأكيداً للتحقق من أن الدالة تعيد المجموع المحسوب بشكل صحيح.
- If the API response status code is not two hundred, the assertion throws an error.
  - إذا لم يكن رمز استجابة الواجهة البرمجية مئتين، يرمي التأكيد خطأً.

## خطأ شائع

وضع عدة عمليات تحقق غير مرتبطة في تأكيد واحد بدلاً من كتابة عمليات تحقق واضحة ومنفصلة لكل نتيجة متوقعة.

## لا تخلطه مع

التأكيد يتحقق من صحة شرط أثناء التنفيذ، بينما الاستثناء يتعامل مع أخطاء وقت التشغيل والواجهات غير المتوقعة.

## قلها في العمل

- Can we add a clear assertion here to check if the user object is null?
  - هل يمكننا إضافة تأكيد واضح هنا للتحقق مما إذا كان كائن المستخدم فارغاً؟
- Please update the test assertion to verify the correct error message is returned.
  - يرجى تحديث تأكيد الاختبار للتحقق من إرجاع رسالة الخطأ الصحيحة.
