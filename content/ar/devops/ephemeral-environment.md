---
id: ephemeral-environment
category: devops
level: intermediate
related: [ci-cd, infrastructure-as-code, pull-request]
term: "Ephemeral Environment"
pronunciation: "إفيميرال إنفايرونمنت"
translation: "بيئة مؤقتة"
---

## التعريف

نسخة مؤقتة وكاملة الصلاحية من بنية التطبيق التحتية، يتم إنشاؤها تلقائياً لكل طلب دمج (Pull Request) وتُحذف فور إغلاق الفرع أو دمجه.

## أين تسمعه؟

في خطوط الدمج والتسليم المستمر (CI/CD)، ومناقشات فريق العمليات، وأثناء اختبار الميزات.

## أمثلة

- The CI pipeline automatically spins up an ephemeral environment for every new pull request.
  - يقوم مسار الدمج المستمر بإنشاء بيئة مؤقتة تلقائياً لكل طلب دمج جديد.
- QA testers can review the new feature safely in a dedicated ephemeral environment before it merges.
  - يمكن لمختبري الجودة مراجعة الميزة الجديدة بأمان في بيئة مؤقتة مخصصة قبل دمجها.

## خطأ شائع

التعامل مع البيئات المؤقتة كأنها خوادم معاينة دائمة (Staging)، ونسيان أن جميع البيانات والإعدادات داخلها سيتم حذفها تلقائياً.
