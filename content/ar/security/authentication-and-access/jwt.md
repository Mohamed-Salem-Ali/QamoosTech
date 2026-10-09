---
id: jwt
category: security
subcategory: authentication-and-access
level: intermediate
related: [authentication-vs-authorization, http-header, oauth]
term: "JWT (JSON Web Token)"
translation: "رمز JWT"
pronunciation: "جوت"
keywords: ["رمز التحقق من الهوية","طريقة مصادقة بدون جلسة","رمز الوصول للواجهات البرمجية","توكن المصادقة الموقعة","شرح رمز جوت","كيفية تأمين طلبات الـ api","رمز تعريف المستخدم المشفر","استخدام الرموز في المصادقة","الفرق بين الجلسة والتوكن","رمز التحقق المعتمد على json","stateless authentication token","json web token","secure api access token","bearer token for api","how to authenticate api requests","signed user identity token","token based authentication","jwt authentication explained","web token for sessions","encoded identity string"]
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
- The API reads the user id from the JWT claims without a database lookup.
  - تقرأ الواجهة معرّف المستخدم من حقول JWT دون بحث في قاعدة البيانات.

## خطأ شائع

تخزين أسرار في المحتوى. الـ JWT مُرمَّز (Base64) وليس مشفّرًا، فيستطيع أي شخص قراءته.

## لا تخلطه مع

غالباً ما يتم الخلط بين JWT وملفات تعريف ارتباط الجلسة (session cookies)؛ فبينما تُعد JWT رموزاً عديمة الحالة تُخزن في جهة العميل، تُدار ملفات تعريف الارتباط عادةً بواسطة الخادم وتُخزن في متصفح المستخدم.

## قلها في العمل

- Let's switch to using a JWT for this API so we don't have to manage session state on the server.
  - لننتقل إلى استخدام JWT لهذا الـ API حتى لا نضطر إلى إدارة حالة الجلسة على الخادم.
- Please ensure the JWT is properly validated in the middleware before allowing access to the protected route.
  - يرجى التأكد من التحقق من صحة الـ JWT بشكل صحيح في الـ middleware قبل السماح بالوصول إلى المسار المحمي.
