---
id: async-await
category: programming
level: intermediate
related: [callback]
term: "Async / Await"
translation: "غير متزامن / انتظار"
pronunciation: "أسينك أويت"
---
## التعريف

كلمتان تتيحان لك كتابة شيفرة تنتظر عملًا بطيئًا، مثل طلب شبكة، بأسلوب بسيط من الأعلى إلى الأسفل.

## أين تسمعه؟

شيفرة JavaScript وTypeScript وPython وC#، وكذلك المقابلات.

## أمثلة

- Use `await` to wait for the database query to finish.
  - استخدم `await` لانتظار انتهاء استعلام قاعدة البيانات.
- You forgot `await`, so you got a promise instead of the data.
  - نسيت `await`، لذلك حصلت على promise بدل البيانات.

## خطأ شائع

انتظار العمليات واحدة تلو الأخرى مع أنه يمكن تشغيلها معًا. الاستدعاءات المستقلة يمكن أن تعمل بالتوازي.
