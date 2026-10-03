---
id: authentication-vs-authorization
category: security
level: beginner
related: [jwt, rbac, oauth]
term: "Authentication vs Authorization"
translation: "المصادقة والتفويض"
pronunciation: "أوثنتيكيشن مقابل أوثورايزيشن"
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
