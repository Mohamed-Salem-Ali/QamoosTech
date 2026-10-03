---
id: hashing
category: security
level: intermediate
related: [encryption, authentication-vs-authorization]
term: "Hashing"
translation: "التجزئة (الهاش)"
pronunciation: "هاشينج"
---
## التعريف

تحويل البيانات إلى بصمة بطول ثابت لا يمكن عكسها. وتُستخدم لتخزين كلمات المرور بأمان.

## أين تسمعه؟

تخزين كلمات المرور والتحقق من سلامة البيانات.

## أمثلة

- We store a hash of the password, never the password itself.
  - نخزّن hash كلمة المرور لا كلمة المرور نفسها.
- Use bcrypt or Argon2 for passwords.
  - استخدم bcrypt أو Argon2 لكلمات المرور.

## خطأ شائع

الخلط بين التجزئة والتشفير. يمكنك فك تشفير البيانات المشفّرة، لكن لا يمكنك عكس الـ hash.
