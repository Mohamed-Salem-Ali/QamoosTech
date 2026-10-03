---
id: synchronous-vs-asynchronous
category: architecture
level: beginner
related: [async-await, callback, message-queue]
term: "Synchronous vs Asynchronous"
pronunciation: "سينكرونوس فيرسز آي-سينكرونوس"
---

## التعريف

العمليات المتزامنة (Synchronous) تنفذ المهام بالتتابع، حيث يجب أن تنتهي المهمة الحالية قبل البدء في المهمة التالية. أما العمليات غير المتزامنة (Asynchronous) فتسمح ببدء مهمة ما والعمل عليها في الخلفية، مما يتيح للبرنامج الاستمرار في تنفيذ مهام أخرى دون انتظار اكتمال المهمة الأولى.

## أين تسمعه؟

في نقاشات تصميم الأنظمة، وتخطيط دمج واجهات البرمجة (APIs)، وعند محاولة حل مشاكل بطء الأداء.

## أمثلة

- The application uses a synchronous call to fetch user data, which blocks the UI until the response arrives.
  - يستخدم التطبيق اتصالاً متزامناً لجلب بيانات المستخدم، مما يؤدي إلى تجميد واجهة المستخدم حتى يصل الرد.
- We implemented an asynchronous process for sending emails to ensure the user doesn't wait for the mail server.
  - قمنا بتنفيذ عملية غير متزامنة لإرسال رسائل البريد الإلكتروني لضمان عدم انتظار المستخدم لخادم البريد.

## خطأ شائع

الاعتقاد بأن الكود غير المتزامن يعمل دائماً بالتوازي (Parallel) أو على خيوط معالجة (Threads) متعددة، بينما في كثير من الأحيان يكون مجرد وسيلة لإدارة عمليات الإدخال والإخراج (I/O) بكفاءة على خيط معالجة واحد.
