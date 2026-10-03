---
id: sandbox
category: testing
level: beginner
related: [staging-vs-production, integration-test]
term: "Sandbox"
pronunciation: "ساندبوكس"
keywords: ["بيئة اختبار معزولة","بيئة تجريبية آمنة","تشغيل الأكواد بشكل آمن","بيئة الفحص للاختبار","اختبار واجهات البرمجة بأمان","بيئة محاكاة الإنتاج","ساندبوكس","بيئة الـ sandbox","isolated testing environment","safe space to test code","test api without real data","experimental development environment","mock environment for testing","test payment gateway safely","run untrusted code safely","sandbox","test environment"]
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

## لا تخلطه مع

الـ Sandbox هي بيئة معزولة للتجارب والأكواد غير الموثوقة، بينما بيئة الـ staging هي مرحلة تسبق الإنتاج صممت لمحاكاة النظام الفعلي بدقة للتحقق النهائي قبل الإطلاق.

## قلها في العمل

- I am going to test the new API keys in the sandbox before we push anything to production.
  - سأقوم باختبار مفاتيح الـ API الجديدة في الـ sandbox قبل أن نرفع أي شيء إلى بيئة الإنتاج.
- Please ensure all payment webhooks are verified against the sandbox environment in this pull request.
  - يرجى التأكد من التحقق من جميع ويب هوك الدفع مقابل بيئة الـ sandbox في طلب السحب هذا.
