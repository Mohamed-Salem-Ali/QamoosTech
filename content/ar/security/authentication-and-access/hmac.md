---
id: hmac
category: security
subcategory: authentication-and-access
level: intermediate
related: [hashing, digital-signature, webhook]
aliases: ["message authentication code", "mac", "webhook signature"]
term: "HMAC"
translation: "رمز مصادقة الرسالة المهشَّر"
pronunciation: "إتش ماك"
keywords: ["هاش بمفتاح سري", "التحقق من توقيع webhook", "رمز مصادقة الرسالة", "توقيع بسر مشترك", "خوارزمية HS256", "اكتشاف التلاعب", "hash with a secret key", "verify webhook signature", "message authentication code", "shared secret signing", "hs256", "detect tampering"]
---

## التعريف

الـ HMAC طريقة لإثبات أن الرسالة أصلية ولم تتغير بتهشيرها مع مفتاح سري لا يعرفه إلا المرسل والمستقبل.

## أين تسمعه؟

في التحقق من webhook (Stripe وGitHub)، وتوقيع طلبات الـ API، وJWT بخوارزمية HS256.

## أمثلة

- Compute the HMAC of the raw body with the shared secret and compare it to the header.
  - احسب HMAC للجسم الخام بالسر المشترك وقارنه بالترويسة.
- Use a constant-time comparison for the signatures.
  - استخدم مقارنة بزمن ثابت للتوقيعات.

## خطأ شائع

مقارنة التوقيعات بـ `==`. فروق التوقيت قد تسرّب معلومات؛ استخدم مقارنة بزمن ثابت.

## لا تخلطه مع

الهاش العادي الذي يستطيع أي أحد حسابه. أما HMAC فيحتاج السر فلا يستطيع المهاجم تزويره.

## قلها في العمل

- Verify the HMAC before trusting the webhook.
  - تحقق من HMAC قبل الوثوق بالـ webhook.
- Rotate the signing secret.
  - بدّل سر التوقيع.
