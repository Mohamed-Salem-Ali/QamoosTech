---
id: callback
category: programming
level: intermediate
related: [async-await, function]
term: "Callback"
translation: "دالة استدعاء"
pronunciation: "كولباك"
---
## التعريف

دالة تمرّرها إلى دالة أخرى لتُستدعى لاحقًا، وغالبًا عند انتهاء مهمة ما.

## أين تسمعه؟

JavaScript وNode.js، ومعالجات الأحداث، والشيفرة غير المتزامنة القديمة.

## أمثلة

- Pass a callback that runs after the file is read.
  - مرّر callback يُنفَّذ بعد قراءة الملف.
- Nested callbacks became hard to read, so we moved to `async/await`.
  - أصبحت الـ callbacks المتداخلة صعبة القراءة، فانتقلنا إلى `async/await`.

## خطأ شائع

تداخل الـ callbacks داخل بعضها حتى تصبح الشيفرة غير مقروءة («callback hell»).
