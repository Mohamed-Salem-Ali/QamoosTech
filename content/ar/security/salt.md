---
id: salt
category: security
level: intermediate
related: [hashing, authentication-vs-authorization]
term: "Salt"
pronunciation: "سولت"
keywords: ["بيانات عشوائية لكلمات المرور","منع هجمات جداول قوس قزح","تأمين كلمات المرور من الاختراق","حماية الهاش بقيم عشوائية","إضافة بيانات عشوائية للتجزئة","حماية كلمات المرور المسجلة","سولت كلمات المرور","تجنب اختراق الهاش بالتخمين","random string added to password","prevent rainbow table attacks","make password hashing unique","secure user passwords from cracking","protect passwords with random data","password hashing security technique","add random bits to password hash","prevent dictionary attacks on passwords"]
---

## التعريف

هي بيانات عشوائية تُضاف إلى كلمة المرور قبل عملية التجزئة (Hashing) لضمان أن كلمات المرور المتطابقة تنتج قيم تجزئة فريدة. تساعد هذه التقنية في حماية النظام من هجمات "جداول قوس قزح" (Rainbow Tables) التي تعتمد على مقارنة قيم التجزئة بقوائم مسبقة.

## أين تسمعه؟

في مراجعات أمن المعلومات، وتصميم أنظمة المصادقة، ومراجعة قواعد البيانات.

## أمثلة

- Always generate a unique salt for every user during the registration process.
  - يجب دائمًا إنشاء "سولت" فريد لكل مستخدم أثناء عملية التسجيل.
- Storing the salt alongside the hashed password in the database is standard practice.
  - تخزين الـ Salt بجانب كلمة المرور المجزأة في قاعدة البيانات هو ممارسة قياسية.

## خطأ شائع

الاعتقاد بأن الـ Salt هو نوع من أنواع التشفير (Encryption)؛ فهو ليس كذلك، لأنه لا يهدف إلى إخفاء البيانات أو إمكانية استرجاعها، بل يهدف فقط إلى جعل هجمات التخمين صعبة ومكلفة جدًا من الناحية الحسابية.

## لا تخلطه مع

يختلف السولت (Salt) عن البِبر (Pepper) في أمان كلمات المرور؛ فالسولت يضيف بيانات عشوائية لمنع هجمات الجداول الجاهزة، بينما البِبر يضيف مفتاحاً سرياً عاماً للنظام يوفر طبقة حماية إضافية حتى لو تسربت قاعدة البيانات.

## قلها في العمل

- Make sure we store the salt in a separate column alongside the password hash.
  - تأكد من تخزين الـ salt في عمود منفصل بجانب الـ hash الخاص بكلمة المرور.
- We need to update the user registration service to generate a cryptographically secure random salt for every new account.
  - يحتاج فريقنا إلى تحديث خدمة تسجيل المستخدمين لإنشاء salt عشوائي آمن تشفيرياً لكل حساب جديد.
