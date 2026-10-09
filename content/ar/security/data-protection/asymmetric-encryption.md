---
id: asymmetric-encryption
category: security
subcategory: data-protection
level: intermediate
related: [symmetric-encryption, digital-signature, key-exchange]
aliases: ["public key", "private key", "key pair", "public-key cryptography", "rsa"]
term: "Asymmetric Encryption"
translation: "التشفير غير المتماثل"
pronunciation: "أسيمتريك إنكريبشن"
keywords: ["مفتاح عام ومفتاح خاص", "أي أحد يشفّر والمالك فقط يفك", "خوارزمية RSA", "مفاتيح SSH", "زوج المفاتيح", "أبطأ من المتماثل", "public key and private key", "anyone can encrypt only owner decrypts", "rsa", "ssh keys", "key pair", "slower than symmetric"]
---

## التعريف

التشفير غير المتماثل (Asymmetric Encryption) يستخدم زوج مفاتيح: مفتاحاً عاماً يمكن لأي أحد امتلاكه، ومفتاحاً خاصاً يبقى سرياً. ما يقفله أحدهما لا يفتحه إلا الآخر.

## أين تسمعه؟

في شهادات HTTPS، وتسجيل الدخول عبر SSH (`id_rsa`)، وتوقيع JWT، وتشفير البريد (PGP).

## أمثلة

- Share your public key; never share the private key.
  - شارك مفتاحك العام ولا تشارك الخاص أبداً.
- RSA and Ed25519 are asymmetric algorithms.
  - ‏RSA وEd25519 خوارزميتان غير متماثلتين.
- The server signs the token with its private key, and every client checks it with the public key.
  - يوقّع الخادم الرمز بمفتاحه الخاص، ويتحقق منه كل عميل بالمفتاح العام.

## خطأ شائع

رفع مفتاح خاص إلى Git. اعتبره سراً مسرباً واستبدله.

## لا تخلطه مع

التشفير المتماثل الأسرع لكنه يحتاج سراً مشتركاً. وعملياً يُجمع بينهما.

## قلها في العمل

- Generate a new key pair.
  - ولّد زوج مفاتيح جديداً.
- Add my public key to the server's authorized keys.
  - أضف مفتاحي العام إلى المفاتيح المصرح بها في الخادم.
