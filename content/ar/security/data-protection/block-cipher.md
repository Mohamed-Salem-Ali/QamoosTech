---
id: block-cipher
category: security
subcategory: data-protection
level: intermediate
related: [symmetric-encryption, authentication-tag, entropy]
aliases: ["stream cipher", "mode of operation", "nonce", "iv"]
term: "Block Cipher"
translation: "تشفير الكتل"
pronunciation: "بلوك سايفر"
keywords: ["يشفّر كتلاً بحجم ثابت", "‏AES بكتل 128 بت", "أنماط التشغيل GCM وCBC", "المتجه IV أو nonce", "لا تستخدم ECB أبداً", "بديل تشفير التدفق", "encrypts fixed size blocks", "aes 128 bit blocks", "mode of operation gcm cbc", "iv or nonce", "never use ecb", "stream cipher alternative"]
---

## التعريف

تشفير الكتل (Block Cipher) يشفّر البيانات في قطع بحجم ثابت (كتل)، مثل 16 بايت في AES. ثم يحدد نمط التشغيل (مثل GCM) كيف تُسلسل الكتل وكيف تُعالج الرسائل الطويلة.

## أين تسمعه؟

في مكتبات التشفير، وإعدادات التشفير، ومراجعات الأمان لطريقة تشفير البيانات.

## أمثلة

- AES is a block cipher; GCM is the mode we run it in.
  - ‏AES تشفير كتل وGCM هو النمط الذي نشغله به.
- Use a fresh random nonce for every message.
  - استخدم nonce عشوائياً جديداً لكل رسالة.
- AES works on 16-byte blocks, so the message is split and each block is encrypted.
  - يعمل AES على كتل من 16 بايت، فتُقسَّم الرسالة وتُشفَّر كل كتلة.

## خطأ شائع

استخدام نمط ECB. تعطي كتل النص الواضح المتساوية كتلاً مشفرة متساوية فتكشف الأنماط.

## لا تخلطه مع

تشفير التدفق الذي يشفّر البيانات بايتاً أو بتاً في كل مرة.

## قلها في العمل

- Which mode are we using with AES?
  - أي نمط نستخدم مع AES؟
- Don't roll your own; use a vetted library.
  - لا تبتكر بنفسك؛ استخدم مكتبة موثوقة.
