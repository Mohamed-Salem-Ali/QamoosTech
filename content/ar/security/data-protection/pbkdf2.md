---
id: pbkdf2
category: security
subcategory: data-protection
level: intermediate
related: [hashing, salt, entropy]
aliases: ["key stretching", "bcrypt", "argon2", "password hashing"]
term: "PBKDF2"
translation: "دالة اشتقاق المفاتيح PBKDF2"
pronunciation: "بي بي كي دي إف 2"
keywords: ["تهشير كلمات المرور البطيء", "تمديد المفتاح", "تكرارات كثيرة", "اشتقاق مفتاح من كلمة مرور", "بدائل bcrypt وargon2", "مهشّر كلمات المرور في Django", "slow password hashing", "key stretching", "many iterations", "derive a key from a password", "bcrypt argon2 alternatives", "django password hasher"]
---

## التعريف

‏PBKDF2 طريقة قياسية لتحويل كلمة مرور إلى مفتاح أو هاش مخزن بتكرار دالة هاش آلاف المرات مع salt، مما يجعل تخمين كلمات المرور بطيئاً.

## أين تسمعه؟

في مهشّر كلمات المرور الافتراضي في Django، وتدقيقات الأمان (عدد التكرارات)، والمقارنات مع bcrypt وArgon2.

## أمثلة

- Django hashes passwords with PBKDF2 and a random salt by default.
  - يهشّر Django كلمات المرور افتراضياً بـ PBKDF2 مع salt عشوائي.
- Raise the iteration count as hardware gets faster.
  - ارفع عدد التكرارات كلما أصبح العتاد أسرع.
- Stored password hashes use PBKDF2 with many iterations, which slows down guessing.
  - تستخدم تجزئات كلمات المرور المخزّنة PBKDF2 بتكرارات كثيرة، مما يبطئ التخمين.

## خطأ شائع

استخدام SHA-256 العادي لكلمات المرور. هو سريع فيختبر المهاجمون مليارات التخمينات في الثانية.

## لا تخلطه مع

الهاش العادي المصمم ليكون سريعاً. أما PBKDF2 فبطيء عمداً لتخزين كلمات المرور.

## قلها في العمل

- How many PBKDF2 iterations do we use?
  - كم تكراراً من PBKDF2 نستخدم؟
- Consider Argon2 for new systems.
  - فكّر في Argon2 للأنظمة الجديدة.
