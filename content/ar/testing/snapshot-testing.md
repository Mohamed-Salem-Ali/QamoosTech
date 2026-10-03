---
id: snapshot-testing
category: testing
level: intermediate
related: [unit-test, regression]
term: "Snapshot Testing"
pronunciation: "سناپشوت تيسْتينج"
---

## التعريف

طريقة اختبار يتم فيها حفظ الناتج المعروض لمكون واجهة مستخدم أو هيكل بيانات في ملف مرجعي، ومقارنته تلقائياً مع عمليات التشغيل المستقبلية لاكتشاف أي تغييرات غير متوقعة.

## أين تسمعه؟

في مراجعات كود الواجهات الأمامية، أو عند إعداد حزم الاختبارات، أو أثناء إعادة هيكلة مكونات واجهة المستخدم.

## أمثلة

- We added snapshot testing to verify that the user profile component renders correctly.
  - أضفنا اختبارات السنابشوت للتأكد من أن مكون ملف تعريف المستخدم يُعرض بشكل صحيح.
- The test failed because the button's CSS class changed in the new snapshot.
  - فشل الاختبار لأن فئة الـ CSS الخاصة بالزر تغيرت في السنابشوت الجديد.

## خطأ شائع

اعتبار السنابشوت بديلاً عن التأكيدات الحقيقية (assertions)، أو تحديث ملفات السنابشوت بشكل عشوائي دون التحقق مما تغير فعلياً في واجهة المستخدم.
