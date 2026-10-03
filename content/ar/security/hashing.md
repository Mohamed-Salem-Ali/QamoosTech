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

## لا تخلطه مع

غالباً ما يتم الخلط بين التجزئة (Hashing) والتشفير (Encryption)؛ الفرق الجوهري هو أن التشفير عملية ذات اتجاهين مصممة لتكون قابلة للعكس باستخدام مفتاح، بينما التجزئة عملية ذات اتجاه واحد لا يمكن عكسها.

## قلها في العمل

- Make sure we are hashing the user's password before saving it to the database.
  - تأكد من أننا نقوم بعمل hashing لكلمة مرور المستخدم قبل حفظها في قاعدة البيانات.
- I have updated the authentication module to use a stronger hashing algorithm for better security.
  - لقد قمت بتحديث وحدة المصادقة لاستخدام خوارزمية hashing أقوى لتحسين الأمان.
