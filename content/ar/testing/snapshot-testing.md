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

## لا تخلطه مع

غالباً ما يتم الخلط بين اختبار السنابشوت واختبار الانحدار البصري (visual regression testing)؛ فبينما يقارن اختبار السنابشوت الكود المتسلسل أو هياكل البيانات، يقارن اختبار الانحدار البصري لقطات شاشة فعلية لواجهة المستخدم بكسل بكسل.

## قلها في العمل

- Let's add snapshot testing for this component to make sure we don't accidentally break the layout during the refactor.
  - دعنا نضيف اختبار السنابشوت لهذا المكون للتأكد من أننا لن نكسر التنسيق عن طريق الخطأ أثناء إعادة الهيكلة.
- Please review the updated snapshot file in this pull request to ensure the changes to the rendered output are expected.
  - يرجى مراجعة ملف السنابشوت المحدث في طلب السحب هذا للتأكد من أن التغييرات في المخرجات المعروضة متوقعة.
