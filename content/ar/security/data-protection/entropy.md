---
id: entropy
category: security
subcategory: data-protection
level: intermediate
related: [secret-management, salt, block-cipher]
aliases: ["randomness", "secure random", "csprng"]
term: "Entropy"
translation: "الإنتروبيا"
pronunciation: "إنتروبي"
keywords: ["مقدار العشوائية", "بتات لا يمكن توقعها", "المفاتيح القوية تحتاج عشوائية جيدة", "قوة كلمة المرور", "مصدر عشوائي آمن", "‏/dev/urandom", "amount of randomness", "unpredictable bits", "strong keys need good randomness", "password strength", "secure random source", "dev urandom"]
---

## التعريف

في الأمان تقيس الإنتروبيا (Entropy) مدى صعوبة توقع شيء. السر ذو الإنتروبيا العالية، كمفتاح عشوائي طويل، يصعب تخمينه جداً.

## أين تسمعه؟

في توليد المفاتيح والرموز، ونقاشات سياسات كلمات المرور، ومراجعات الأمان لـ `random` مقابل `secrets`.

## أمثلة

- Generate tokens with `secrets.token_urlsafe`, which draws on the OS entropy source.
  - ولّد الرموز بـ `secrets.token_urlsafe` الذي يستمد من مصدر إنتروبيا نظام التشغيل.
- A password made of a common word has very low entropy.
  - كلمة مرور من كلمة شائعة إنتروبياها منخفضة جداً.

## خطأ شائع

استخدام `random.random()` للرموز أو المفاتيح. هو قابل للتوقع؛ استخدم مولداً آمناً تشفيرياً.

## لا تخلطه مع

الطول. القيمة الطويلة المتوقعة ("password1234567890") تبقى إنتروبياها منخفضة.

## قلها في العمل

- Where does this key get its entropy?
  - من أين يحصل هذا المفتاح على إنتروبياه؟
- Use the OS random source.
  - استخدم مصدر العشوائية في نظام التشغيل.
