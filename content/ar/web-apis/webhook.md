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

- The payment provider sends a webhook when the payment succeeds.
  - يرسل مزوّد الدفع webhook عند نجاح الدفع.
- Verify the webhook signature before trusting the payload.
  - تحقق من توقيع الـ webhook قبل الوثوق بالـ payload.

## خطأ شائع

عدم التعامل مع التكرار. قد ترسل الخدمات الـ webhook نفسه مرتين، لذلك يجب أن تكون شيفرتك idempotent.

## لا تخلطه مع

الفرق بين Webhook و API polling هو أن الـ webhook يدفع البيانات إلى خادمك فور وقوع الحدث، بينما يتطلب الـ polling أن يقوم خادمك بطلب التحديثات بشكل متكرر من الخدمة في فترات زمنية محددة.

## قلها في العمل

- Could you check if the webhook endpoint is receiving any requests from the external service?
  - هل يمكنك التحقق مما إذا كان الـ webhook endpoint يستقبل أي طلبات من الخدمة الخارجية؟
- I have updated the webhook handler to properly validate the incoming payload signature for better security.
  - لقد قمت بتحديث معالج الـ webhook للتحقق بشكل صحيح من توقيع الـ payload الوارد لتعزيز الأمان.
