---
id: authentication-vs-authorization
category: security
subcategory: authentication-and-access
level: beginner
related: [jwt, rbac, oauth]
term: "Authentication vs Authorization"
translation: "المصادقة والتفويض"
pronunciation: "أوثنتيكيشن مقابل أوثورايزيشن"
keywords: ["الفرق بين المصادقة والتفويض","الفرق بين تسجيل الدخول والصلاحيات","التحقق من الهوية مقابل السماح بالوصول","ما هو الفرق بين auth و authz","كيف أفرق بين المصادقة والتفويض","شرح مفاهيم الأمان في البرمجة","التحقق من هوية المستخدم وصلاحياته","معنى المصادقة والتفويض في البرمجة","الفرق بين authentication و authorization","هل المصادقة هي نفسها التفويض","difference between login and permissions","authn vs authz explained","how to verify identity and access","who are you vs what can you do","difference between authentication and authorization","check user identity and privileges","is login the same as access rights","managing user identity and permissions","security concepts for api design","authentication versus authorization meaning"]
---
## التعريف

الـ *authentication* يتحقق من هويتك (تسجيل الدخول)، والـ *authorization* يتحقق مما يُسمح لك بفعله.

## أين تسمعه؟

الأمان وتصميم الـ API والمقابلات.

## أمثلة

- Authentication passed, but authorization failed, so the API returned 403.
  - نجحت المصادقة وفشل التفويض، لذلك أعادت الـ API الرمز 403.
- Check authorization on the server for every action.
  - تحقق من التفويض في الخادم لكل إجراء.

## خطأ شائع

استخدام الكلمتين كأنهما واحدة. تذكّر: authN = من أنت، وauthZ = ماذا يمكنك أن تفعل.

## قلها في العمل

- Let us make sure our middleware handles authentication before passing the request to the authorization layer.
  - دعنا نتأكد من أن الـ middleware يتعامل مع المصادقة قبل تمرير الطلب إلى طبقة التفويض.
- Could you please update the pull request to ensure that authorization checks are performed after successful authentication?
  - هل يمكنك من فضلك تحديث الـ pull request لضمان إجراء فحص التفويض بعد نجاح المصادقة؟
