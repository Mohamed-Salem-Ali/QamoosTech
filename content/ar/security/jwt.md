---
id: jwt
category: security
level: intermediate
related: [authentication-vs-authorization, http-header, oauth]
term: "JWT (JSON Web Token)"
translation: "رمز JWT"
pronunciation: "جوت"
---
## التعريف

رمز موقّع يثبت هويتك. يستطيع الخادم الوثوق به دون حفظ جلسة. محتواه قابل للقراءة، لكن لا يمكن تعديله دون إبطال التوقيع.

## أين تسمعه؟

مصادقة الـ API.

## أمثلة

- Send the JWT in the `Authorization: Bearer` header.
  - أرسل الـ JWT في ترويسة `Authorization: Bearer`.
- The JWT expired, so you got a 401.
  - انتهت صلاحية الـ JWT، لذلك حصلت على 401.

## خطأ شائع

تخزين أسرار في المحتوى. الـ JWT مشفّر ترميزيًا لا تشفيرًا، فيستطيع أي شخص قراءته.
