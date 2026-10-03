---
id: webhook
category: web-apis
level: intermediate
related: [payload, idempotency]
term: "Webhook"
translation: "ويب هوك"
pronunciation: "ويب هوك"
---
## التعريف

رابط في تطبيقك تستدعيه خدمة أخرى تلقائيًا عند حدوث شيء ما، مثل نجاح عملية دفع.

## أين تسمعه؟

بوابات الدفع، وGitHub، وSlack، وأي تكامل من نوع «أخبرني عندما…».

## أمثلة

- Stripe sends a webhook when the payment succeeds.
  - ترسل Stripe webhook عند نجاح الدفع.
- Verify the webhook signature before trusting the payload.
  - تحقق من توقيع الـ webhook قبل الوثوق بالـ payload.

## خطأ شائع

عدم التعامل مع التكرار. قد ترسل الخدمات الـ webhook نفسه مرتين، لذلك يجب أن تكون شيفرتك idempotent.
