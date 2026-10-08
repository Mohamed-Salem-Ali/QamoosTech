---
id: async-await
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [callback, synchronous-vs-asynchronous]
term: "Async / Await"
translation: "غير متزامن / انتظار"
pronunciation: "أسينك أويت"
keywords: ["مشكلة عدم تزامن","تنفيذ غير متزامن","عدم تزامن العمليات","كتابة تعليمة برمجية غير متزامنة","انتظار طلب الشبكة بدون حظر","التعامل مع الوعود بدون كول باك","جملة الانتظار في البرمجة","منع حظر الخيط الرئيسي","البرمجة غير المتزامنة ببساطة","تشغيل المهام بشكل غير متزامن","استخدام أسينك أويت في الكود","الفرق بين المتزامن وغير المتزامن","write non blocking code easily","wait for network call completion","handle promises without then callbacks","asynchronous programming keywords","sequential code for slow tasks","avoid callback hell easily","javascript async await syntax","python async functions","await database query result","async await keywords"]
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

## لا تخلطه مع

غالبًا ما يتم الخلط بين async / await وتعدد المسارات (multithreading)، لكن async / await يتعامل مع الانتظار دون حظر المسار، بينما يقوم تعدد المسارات بتشغيل مهام متعددة على مسارات مختلفة في نفس الوقت.

## قلها في العمل

- Can we refactor this function to use async/await so it is easier to read?
  - هل يمكننا إعادة هيكلة هذه الدالة لتعمل باستخدام async/await لكي تصبح أسهل في القراءة؟
- Please wrap the API call in an async/await block to handle the response properly.
  - يرجى تغليف طلب واجهة البرمجة داخل كتلة async/await للتعامل مع الاستجابة بشكل صحيح.
