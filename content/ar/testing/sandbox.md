---
id: sandbox
category: testing
level: beginner
related: [staging-vs-production, integration-test]
term: "Sandbox"
pronunciation: "ساندبوكس"
---

## التعريف

الـ Sandbox هي بيئة معزولة تتيح للمطورين تجربة الأكواد أو تشغيل برامج غير موثوقة دون التأثير على النظام الأساسي أو البيانات الحقيقية. تعمل هذه البيئة كمساحة آمنة ومغلقة تحاكي بيئة العمل الفعلية.

## أين تسمعه؟

- عند إعداد تكامل (Integration) جديد مع واجهة برمجة تطبيقات (API).
- عند اختبار ميزة جديدة قبل نشرها في بيئة الإنتاج.
- أثناء تجربة مكتبات برمجية خارجية.

## أمثلة

- We need to test the payment gateway integration in the sandbox environment first.
  - نحتاج إلى اختبار تكامل بوابة الدفع في بيئة الـ sandbox أولاً.
- Please run your migration scripts in the sandbox to ensure they don't corrupt the production database.
  - يرجى تشغيل سكربتات نقل البيانات في الـ sandbox للتأكد من أنها لن تتلف قاعدة بيانات الإنتاج.

## خطأ شائع

الاعتقاد بأن بيئة الـ sandbox مطابقة تماماً لبيئة الإنتاج من حيث الأداء أو حجم البيانات، مما قد يؤدي إلى ظهور مشاكل غير متوقعة عند نشر الكود فعلياً.
