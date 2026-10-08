---
id: regression
category: testing
subcategory: test-types
level: intermediate
related: [unit-test, bug, false-positive, snapshot-testing]
term: "Regression"
translation: "تراجع (عودة خطأ قديم)"
pronunciation: "ريجريشن"
keywords: ["عودة خطأ تم إصلاحه سابقاً","توقف ميزة كانت تعمل","خطأ ناتج عن تحديث","خلل بعد دمج الكود","تراجع في جودة النظام","مشكلة ظهرت بعد التعديل","ظهور عيوب برمجية قديمة","حدوث خطأ في وظيفة سابقة","ريجريشن","تعطل خصائص عملت سابقاً","feature stopped working suddenly","broke existing functionality after update","bug introduced by recent changes","code change broke old feature","unexpected side effect after deployment","recurrent software defect","regression testing","old bug returned","preventing feature breakage","issue after merge"]
---
## التعريف

خلل يتوقف فيه شيء كان يعمل من قبل عن العمل، عادةً بسبب تغيير لاحق. وتُكتب الاختبارات جزئياً لاكتشاف الانحدار قبل أن يلاحظه المستخدمون.

## أين تسمعه؟

اختبار الإصدارات وتقارير الأخطاء.

## أمثلة

- This is a regression: the export worked last week.
  - هذا regression: كان التصدير يعمل الأسبوع الماضي.
- We added a test to prevent this regression from coming back.
  - أضفنا اختبارًا لمنع عودة هذا الـ regression.

## خطأ شائع

إصلاح regression دون إضافة اختبار. قد يعود مرة أخرى.

## لا تخلطه مع

يتم الخلط أحياناً بين الـ regression والخطأ البرمجي الجديد، لكن الـ regression يشير تحديداً إلى ميزة كانت تعمل سابقاً ثم توقفت بسبب تغيير حديث في الكود.

## قلها في العمل

- I think we introduced a regression with the latest merge, so let's check the login flow again.
  - أعتقد أننا تسببنا في regression مع آخر دمج للكود، لذا دعونا نتحقق من مسار تسجيل الدخول مجدداً.
- Please investigate this issue, as it appears to be a regression caused by the recent database migration.
  - يرجى التحقيق في هذه المشكلة، حيث يبدو أنها regression ناتج عن عملية ترحيل قاعدة البيانات الأخيرة.
