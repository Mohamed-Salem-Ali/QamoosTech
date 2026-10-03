---
id: salt
category: security
level: intermediate
related: [hashing, authentication-vs-authorization]
term: "Salt"
pronunciation: "سولت"
---

## التعريف

هي بيانات عشوائية تُضاف إلى كلمة المرور قبل عملية التشفير (Hashing) لضمان أن كلمات المرور المتطابقة تنتج قيمًا مشفرة فريدة. تساعد هذه التقنية في حماية النظام من هجمات "جداول قوس قزح" (Rainbow Tables) التي تعتمد على مقارنة القيم المشفرة بقوائم مسبقة.

## أين تسمعه؟

في مراجعات أمن المعلومات، وتصميم أنظمة المصادقة، ومراجعة قواعد البيانات.

## أمثلة

- Always generate a unique salt for every user during the registration process.
  - يجب دائمًا إنشاء "سولت" فريد لكل مستخدم أثناء عملية التسجيل.
- Storing the salt alongside the hashed password in the database is standard practice.
  - تخزين الـ Salt بجانب كلمة المرور المشفرة في قاعدة البيانات هو ممارسة قياسية.

## خطأ شائع

الاعتقاد بأن الـ Salt هو نوع من أنواع التشفير (Encryption)؛ فهو ليس كذلك، لأنه لا يهدف إلى إخفاء البيانات أو إمكانية استرجاعها، بل يهدف فقط إلى جعل هجمات التخمين صعبة ومكلفة جدًا من الناحية الحسابية.
