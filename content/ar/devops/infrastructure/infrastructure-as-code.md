---
id: infrastructure-as-code
category: devops
subcategory: infrastructure
level: intermediate
related: [deployment, ci-cd, configuration-drift, instance, provisioning]
term: "Infrastructure as Code (IaC)"
translation: "البنية التحتية كشيفرة"
pronunciation: "إنفراستركتشر آز كود"
keywords: ["البنية التحتية كشيفرة","إدارة السيرفرات عبر الكود","إنشاء الخوادم بملفات برمجية","كتابة البنية التحتية كملفات","اي سي","توفير السيرفرات برمجيا","إعدادات السحابة بالملفات","التحكم بالسيرفرات بالبرمجة","manage servers with code files","terraform configuration files instead of dashboard","infrastructure as code","define servers in code","cloud infrastructure automation scripts","infrastructure as code deployment","write servers setup in files","avoid manual cloud console changes"]
---
## التعريف

وصف الخوادم والشبكات وقواعد البيانات في ملفات شيفرة (مثل Terraform) بدل الضغط على الأزرار في لوحة التحكم.

## أين تسمعه؟

إعلانات وظائف السحابة وDevOps.

## أمثلة

- We manage our AWS setup with Terraform as infrastructure as code.
  - ندير إعدادات AWS لدينا بـ Terraform كبنية تحتية كشيفرة.
- You can review infrastructure changes in a pull request.
  - يمكنك مراجعة تغييرات البنية التحتية في pull request.
- The Terraform file creates the database, so the staging setup can be rebuilt with one command.
  - يُنشئ ملف Terraform قاعدة البيانات، فيمكن إعادة بناء بيئة الاختبار بأمر واحد.

## خطأ شائع

تغيير الأشياء يدويًا في لوحة تحكم السحابة. عندها لا تتطابق الشيفرة مع الإعداد الفعلي.

## لا تخلطه مع

غالباً ما يتم الخلط بين البنية التحتية كشيفرة (IaC) وإدارة الإعدادات (Configuration Management)؛ فبينما تقوم IaC بتوفير البنية التحتية نفسها، تركز إدارة الإعدادات على إدارة البرمجيات والإعدادات التي تعمل فوق الخوادم التي تم توفيرها مسبقاً.

## قلها في العمل

- We should move this manual setup to Infrastructure as Code so we can track all changes in our repository.
  - يجب أن ننقل هذا الإعداد اليدوي إلى Infrastructure as Code حتى نتمكن من تتبع جميع التغييرات في مستودعنا.
- Please ensure that all new environment resources are defined using Infrastructure as Code before submitting the pull request.
  - يرجى التأكد من تعريف جميع موارد البيئة الجديدة باستخدام Infrastructure as Code قبل إرسال الـ pull request.
