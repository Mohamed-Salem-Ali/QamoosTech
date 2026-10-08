---
id: synchronous-vs-asynchronous
category: architecture
subcategory: data-and-state
level: beginner
related: [async-await, callback, message-queue]
term: "Synchronous vs Asynchronous"
translation: "المتزامن مقابل غير المتزامن"
pronunciation: "سينكرونوس فيرسز آي-سينكرونوس"
keywords: ["الفرق بين العمليات المتزامنة وغير المتزامنة","تنفيذ المهام في الخلفية","كيفية عمل الكود غير المتزامن","منع تجمد واجهة المستخدم","العمليات المتتابعة مقابل المتوازية","شرح مفهوم async و sync","الفرق بين العمليات المباشرة والمؤجلة","معالجة الطلبات دون انتظار الرد","إدارة المهام في البرمجة","تنفيذ العمليات بشكل غير متزامن","tasks running in background","wait for task completion","non blocking vs blocking","execute tasks one after another","async vs sync explained","prevent ui freezing during requests","running tasks in parallel","sequential vs concurrent execution","handling io operations efficiently","make api call non blocking"]
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
- The checkout waits for the payment, but the confirmation email is sent asynchronously.
  - ينتظر الدفع حتى ينتهي، لكن رسالة التأكيد تُرسل بشكل غير متزامن.

## خطأ شائع

الاعتقاد بأن الكود غير المتزامن يعمل دائماً بالتوازي (Parallel) أو على خيوط معالجة (Threads) متعددة، بينما في كثير من الأحيان يكون مجرد وسيلة لإدارة عمليات الإدخال والإخراج (I/O) بكفاءة على خيط معالجة واحد.

## لا تخلطه مع

يختلف synchronous vs asynchronous عن blocking vs non-blocking، لأن الأول يتعلق بكيفية تنسيق المهام، بينما يتعلق الثاني بما إذا كان خيط المعالجة المستدعي يتوقف عن العمل أثناء انتظار النتيجة أم لا.

## قلها في العمل

- Let's make this API call asynchronous so it doesn't block the main thread.
  - دعنا نجعل استدعاء API هذا غير متزامن لكي لا يقوم بحظر الخيط الرئيسي.
- Please ensure that file processing is handled asynchronously to improve overall application responsiveness.
  - يرجى التأكد من معالجة الملفات بشكل غير متزامن لتحسين استجابة التطبيق بشكل عام.
