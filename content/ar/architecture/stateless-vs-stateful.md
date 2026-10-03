---
id: stateless-vs-stateful
category: architecture
level: intermediate
related: [load-balancer, serverless, restful-api]
term: "Stateless vs Stateful"
translation: "عديم الحالة مقابل ذو الحالة"
pronunciation: "ستيت-ليس فيرسز ستيت-فول"
---

## التعريف

النظم عديمة الحالة (Stateless) لا تخزن بيانات جلسة المستخدم بين الطلبات، مما يعني أن كل طلب يجب أن يحتوي على كل المعلومات اللازمة. أما النظم ذات الحالة (Stateful)، فتتذكر التفاعلات السابقة وتخزن حالة العميل على الخادم عبر طلبات متعددة.

## أين تسمعه؟

أثناء مناقشات تصميم الأنظمة، والتخطيط للتوسّع، وعند اختيار طريقة إدارة جلسات المستخدمين وهندسة واجهات برمجة التطبيقات (APIs).

## أمثلة

- We need to design a stateless API so any instance behind the load-balancer can handle the request.
  - نحتاج إلى تصميم واجهة برمجة تطبيقات عديمة الحالة لكي تتمكن أي نسخة خلف موزّع الأحمال من معالجة الطلب.
- Shopping carts are often stateful because the server must remember what items the user added across different pages.
  - عربات التسوق غالباً ما تكون ذات حالة لأن الخادم يجب أن يتذكر العناصر التي أضافها المستخدم عبر الصفحات المختلفة.
- Migrating from a stateful architecture to a stateless one made our application much easier to scale horizontally.
  - الانتقال من هيكلية ذات حالة إلى هيكلية عديمة الحالة جعل تطبيقنا أسهل بكثير في التوسّع الأفقي.

## خطأ شائع

الاعتقاد بأن "عدم حفظ الحالة" يعني أن التطبيق لا يحفظ أي بيانات نهائياً، في حين أن المقصود هو أن الخادم لا يحتفظ بذاكرة الجلسة الخاصة بعميل معين بين طلبات HTTP المستقلة.

## قلها في العمل

- Let us make sure the backend remains stateless so we can scale out easily without managing sticky sessions.
  - دعنا نتأكد من أن النظام الخلفي يظل عديم الحالة لكي نتمكن من التوسع بسهولة دون إدارة الجلسات المرتبطة بخادم معين.
- Please verify if this microservice requires a stateful approach or if we can handle the user session via a distributed cache.
  - الرجاء التحقق مما إذا كانت هذه الخدمة المصغرة تتطلب نهجاً ذا حالة أم يمكننا التعامل مع جلسة المستخدم عبر ذاكرة تخزين مؤقت موزعة.
