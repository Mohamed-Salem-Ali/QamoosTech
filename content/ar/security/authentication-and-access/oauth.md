---
id: oauth
category: security
subcategory: authentication-and-access
level: intermediate
related: [jwt, authentication-vs-authorization, api-key, identity-provider]
term: "OAuth 2.0"
translation: "بروتوكول OAuth 2.0"
pronunciation: "أوأوث تو بوينت أو"
keywords: ["تسجيل الدخول بحساب جوجل","منح صلاحيات لتطبيق خارجي","تسجيل الدخول عبر منصة أخرى","بروتوكول التفويض والتخويل","ربط الحسابات الخارجية بأمان","بروتوكول اوauth","نظام الصلاحيات والتصريح","الدخول بحساب سوشيال ميديا","sign in with google","third party account access","authorization framework for apps","grant limited access tokens","connect external accounts safely","oauth protocol","auth 2","social login integration","delegated access standard","api authorization flow"]
---
## التعريف

معيار يتيح للمستخدم أن يمنح تطبيقًا وصولًا محدودًا إلى حسابه في خدمة أخرى دون مشاركة كلمة مروره. وهو أساس «تسجيل الدخول بحساب Google».

## أين تسمعه؟

تسجيل الدخول بالحسابات الاجتماعية والتكامل مع أطراف ثالثة.

## أمثلة

- We added Google login using OAuth 2.0.
  - أضفنا تسجيل الدخول بحساب Google باستخدام OAuth 2.0.
- The app asks for permission to read your calendar only.
  - يطلب التطبيق إذنًا لقراءة تقويمك فقط.

## خطأ شائع

وصف OAuth بأنه بروتوكول مصادقة. هو للتفويض، ويضيف OpenID Connect الهوية فوقه.

## لا تخلطه مع

غالباً ما يتم الخلط بين OAuth 2.0 و OpenID Connect؛ حيث يختص OAuth 2.0 بالتفويض (منح صلاحية الوصول)، بينما يعد OpenID Connect طبقة هوية مبنية فوقه للتعامل مع المصادقة.

## قلها في العمل

- We should implement OAuth 2.0 so users can connect their accounts without us ever seeing their actual passwords.
  - يجب أن نطبق OAuth 2.0 حتى يتمكن المستخدمون من ربط حساباتهم دون أن نرى كلمات مرورهم الفعلية أبداً.
- Please review the PR; I have updated the OAuth 2.0 flow to handle the token refresh process more securely.
  - يرجى مراجعة طلب السحب (PR)؛ لقد قمت بتحديث مسار OAuth 2.0 للتعامل مع عملية تحديث الرموز المميزة (token refresh) بشكل أكثر أماناً.
