---
id: authentication-tag
category: security
subcategory: data-protection
level: intermediate
related: [block-cipher, hmac, symmetric-encryption]
aliases: ["aead", "authenticated encryption", "gcm"]
term: "Authentication Tag"
translation: "وسم المصادقة"
pronunciation: "أوثنتكيشن تاج"
keywords: ["اكتشاف تعديل النص المشفر", "التشفير الموثّق GCM", "فحص سلامة البيانات المشفرة", "يفشل فك التشفير عند التلاعب", "وسم ملحق بالنص المشفر", "تشفير مع مصادقة", "detect modified ciphertext", "aead gcm", "integrity check of encrypted data", "decryption fails if tampered", "tag appended to ciphertext", "authenticated encryption"]
---

## التعريف

وسم المصادقة (Authentication Tag) قيمة قصيرة تُنتج مع النص المشفر في التشفير الموثّق (AEAD مثل AES-GCM). عند فك التشفير يعني الوسم الخاطئ أن البيانات تغيّرت فيُرفض الفك.

## أين تسمعه؟

في وثائق AES-GCM وChaCha20-Poly1305، وواجهات مكتبات التشفير، ومراجعات الأمان.

## أمثلة

- AES-GCM returns the ciphertext and a 16-byte authentication tag.
  - يعيد AES-GCM النص المشفر ووسم مصادقة من 16 بايتاً.
- Decryption raised an error because the tag didn't match.
  - رفع فك التشفير خطأً لأن الوسم لم يطابق.

## خطأ شائع

التشفير بلا مصادقة. يستطيع المهاجمون تعديل النص المشفر بطرق لا تلاحظها.

## لا تخلطه مع

الـ HMAC وهو توقيع منفصل تحسبه بنفسك. أما AEAD فيدمج الوسم في خطوة التشفير.

## قلها في العمل

- Always check the tag before using the plaintext.
  - تحقق دائماً من الوسم قبل استخدام النص الواضح.
- Use authenticated encryption, not bare AES.
  - استخدم التشفير الموثّق وليس AES العاري.
