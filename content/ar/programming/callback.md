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

## لا تخلطه مع

الفرق بين الـ Callback والـ Promise هو أن الـ Callback عبارة عن دالة تُمرر كوسيط لتُنفذ لاحقاً، بينما الـ Promise هو كائن يمثل حالة اكتمال أو فشل عملية غير متزامنة في المستقبل.

## قلها في العمل

- Could you pass a callback to this function so we can handle the response once the API call finishes?
  - هل يمكنك تمرير callback لهذه الدالة حتى نتمكن من معالجة الاستجابة بمجرد انتهاء طلب الـ API؟
- I have refactored the module to use a callback function for processing the data stream instead of the previous synchronous approach.
  - لقد قمت بإعادة هيكلة الوحدة لاستخدام دالة callback لمعالجة تدفق البيانات بدلاً من النهج التزامني السابق.
