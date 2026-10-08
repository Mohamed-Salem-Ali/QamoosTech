---
id: snapshot-testing
category: testing
subcategory: test-types
level: intermediate
related: [unit-test, regression]
term: "Snapshot Testing"
translation: "اختبار اللقطات"
pronunciation: "سناپشوت تيسْتينج"
keywords: ["اختبار واجهة المستخدم بالمقارنة","اختبار السنابشوت","حفظ ناتج المكون للاختبار","مقارنة الناتج المعروض تلقائيا","اكتشاف تغييرات واجهة المستخدم","فحص شكل المكونات برمجيا","اختبارات المكونات المرئية","سناپشوت تيسْتينج","مقارنة ملفات المراجع للاختبار","test ui component output","compare rendered output against reference file","detect unexpected ui changes","ui regression test","serialize component structure test","snapshot test","automatic ui comparison testing","verify component html output","snpshot testing","test component rendering changes"]
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
