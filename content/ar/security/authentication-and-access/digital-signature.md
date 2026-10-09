---
id: digital-signature
category: security
subcategory: authentication-and-access
level: intermediate
related: [asymmetric-encryption, hmac, jwt]
aliases: ["signature", "signed", "rs256", "hs256", "signing algorithm"]
term: "Digital Signature"
translation: "التوقيع الرقمي"
pronunciation: "ديجيتال سيجنتشر"
keywords: ["إثبات من أنشأه", "اكتشاف التلاعب", "التوقيع بالمفتاح الخاص", "التحقق بالمفتاح العام", "commit أو حزمة موقّعة", "عدم الإنكار", "prove who created it", "detect tampering", "sign with private key", "verify with public key", "signed commit or package", "non repudiation"]
---

## التعريف

التوقيع الرقمي (Digital Signature) قيمة تُنتج بمفتاح خاص تثبت من أنشأ بيانات ما وأنها لم تتغير. ويستطيع أي أحد التحقق منها بالمفتاح العام المقابل.

## أين تسمعه؟

في commits الموقّعة في Git، وإصدارات البرمجيات، وJWT (RS256)، وشهادات TLS.

## أمثلة

- The release is signed so users can check it wasn't tampered with.
  - الإصدار موقّع ليتحقق المستخدمون من عدم العبث به.
- Verify the signature with the publisher's public key.
  - تحقق من التوقيع بالمفتاح العام للناشر.
- The installer checks the digital signature before it runs, so tampered files are refused.
  - يتحقق المثبّت من التوقيع الرقمي قبل التشغيل، فيُرفض أي ملف جرى العبث به.

## خطأ شائع

الظن بأن التوقيع يخفي المحتوى. هو يثبت المصدر والسلامة فقط؛ والبيانات تبقى مقروءة.

## لا تخلطه مع

التشفير الذي يخفي المحتوى. أما التوقيع فيثبت المرسل وعدم التغيير.

## قلها في العمل

- Is this commit signed?
  - هل هذا الـ commit موقّع؟
- Check the signature before installing.
  - تحقق من التوقيع قبل التثبيت.
