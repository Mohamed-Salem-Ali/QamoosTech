---
id: identity-provider
category: security
subcategory: authentication-and-access
level: intermediate
related: [authentication-vs-authorization, oauth, jwt]
term: "Identity Provider (IdP)"
pronunciation: "آيدينتيتي بروفايدر"
keywords: ["مزود الهوية الرقمية","نظام التحقق من هوية المستخدم","خدمة تسجيل الدخول الموحد","خادم إدارة هويات المستخدمين","ما هو الـ idp","الجهة المسؤولة عن التحقق","نظام إدارة بيانات المستخدمين","خدمة المصادقة المركزية","التحقق من هوية المستخدمين","آيدينتيتي بروفايدر","centralized user authentication service","system that verifies user identity","single sign on server","manage user login credentials","what is an idp","third party identity service","authentication authority for apps","identity management system","idp vs service provider","user authentication provider"]
---

## التعريف

هو نظام مركزي يقوم بإنشاء وإدارة معلومات هوية المستخدمين، ويوفر خدمات التحقق من الهوية (Authentication) للتطبيقات المختلفة. يعمل هذا النظام كمرجع موثوق للتأكد من هوية المستخدم قبل السماح له بالوصول إلى الخدمات.

## أين تسمعه؟

عند مناقشة هندسة أنظمة تسجيل الدخول، أو إعداد خاصية الدخول الموحد (SSO)، أو عند دمج خدمات خارجية للتحقق من هوية المستخدمين.

## أمثلة

- We need to configure our application to trust the company's Identity Provider for user logins.
  - نحتاج إلى ضبط تطبيقنا ليعتمد على الـ Identity Provider الخاص بالشركة لتسجيل دخول المستخدمين.
- The Identity Provider issues a token once the user successfully verifies their credentials.
  - يقوم الـ Identity Provider بإصدار رمز (Token) بمجرد أن ينجح المستخدم في التحقق من بيانات اعتماده.

## خطأ شائع

الخلط بين الـ Identity Provider والـ Service Provider؛ فالأول هو المسؤول عن التحقق من الهوية، بينما الثاني هو التطبيق الذي يحاول المستخدم الوصول إليه.

## لا تخلطه مع

الخلط بين الـ Identity Provider والـ Service Provider؛ فالأول يقوم بالتحقق من هوية المستخدم، بينما يعتمد الثاني على هذا التحقق لمنح صلاحية الوصول إلى تطبيق أو مورد معين.

## قلها في العمل

- We should check if our current Identity Provider supports OIDC so we can integrate it with the new dashboard.
  - يجب أن نتحقق مما إذا كان الـ Identity Provider الحالي يدعم OIDC حتى نتمكن من دمجه مع لوحة التحكم الجديدة.
- Please update the configuration to point to the new Identity Provider endpoint before we deploy the changes to production.
  - يرجى تحديث الإعدادات لتشير إلى نقطة نهاية الـ Identity Provider الجديدة قبل أن نقوم بنشر التغييرات إلى بيئة الإنتاج.
