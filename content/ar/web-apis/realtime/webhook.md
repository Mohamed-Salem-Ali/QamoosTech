---
id: webhook
category: web-apis
subcategory: realtime
level: intermediate
related: [payload, idempotency, real-time]
term: "Webhook"
translation: "ويب هوك"
pronunciation: "ويب هوك"
keywords: ["رابط لاستقبال الإشعارات التلقائية","إرسال تنبيهات عند وقوع حدث","تلقي بيانات من خدمة خارجية","بديل لعملية استطلاع البيانات","ويب هوك","استقبال طلبات من خادم آخر","رابط معالجة الأحداث الخارجية","إخطار الخادم بحدوث تغيير","تفعيل التنبيهات عبر الرابط","تلقي إشعارات الدفع التلقائية","notify my server of events","automatic callback url","push data to my endpoint","receive updates from external services","event driven http requests","alternative to api polling","listen for remote events","web hook","webhook url setup","handle incoming server notifications"]
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
- The shipping partner calls our webhook as soon as the parcel is delivered.
  - يستدعي شريك الشحن الـ webhook الخاص بنا فور تسليم الطرد.

## خطأ شائع

عدم التعامل مع التكرار. قد ترسل الخدمات الـ webhook نفسه مرتين، لذلك يجب أن تكون شيفرتك idempotent.

## لا تخلطه مع

الفرق بين Webhook و API polling هو أن الـ webhook يدفع البيانات إلى خادمك فور وقوع الحدث، بينما يتطلب الـ polling أن يقوم خادمك بطلب التحديثات بشكل متكرر من الخدمة في فترات زمنية محددة.

## قلها في العمل

- Could you check if the webhook endpoint is receiving any requests from the external service?
  - هل يمكنك التحقق مما إذا كان الـ webhook endpoint يستقبل أي طلبات من الخدمة الخارجية؟
- I have updated the webhook handler to properly validate the incoming payload signature for better security.
  - لقد قمت بتحديث معالج الـ webhook للتحقق بشكل صحيح من توقيع الـ payload الوارد لتعزيز الأمان.
