---
id: identity-provider
category: security
level: intermediate
related: [authentication-vs-authorization, oauth, jwt]
term: "Identity Provider (IdP)"
pronunciation: "آيدينتيتي بروفايدر"
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
