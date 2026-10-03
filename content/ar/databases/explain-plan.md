---
id: explain-plan
category: databases
level: intermediate
related: [query, index]
term: "EXPLAIN Plan"
pronunciation: "إكس-بلين بلان"
translation: "خطة التنفيذ"
---

## التعريف

خطة تفصيلية يولدها محرك قاعدة البيانات توضح كيف سينفذ الاستعلام خطوة بخطوة، بما في ذلك الفهارس وعمليات الربط التي سيستخدمها.

## أين تسمعه؟

في نقاشات تحسين قواعد البيانات، واستكشاف أسباب بطء الاستعلامات، وجلسات تحسين الأداء.

## أمثلة

- Run `EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';` to see if the query uses the email index.
  - قم بتشغيل أمر `EXPLAIN` لمعرفة ما إذا كان الاستعلام يستخدم فهرس البريد الإلكتروني.
- The execution plan showed a full table scan, which explained why the report query was so slow.
  - أظهرت خطة التنفيذ حدوث مسح كامل للجدول، مما فسر سبب بطء استعلام التقرير.

## خطأ شائع

الاعتقاد بأن قاعدة البيانات تنفذ الاستعلام تماماً كما كتبته، دون إدراك أن المحرك قد يغير ترتيب العمليات كلياً بناءً على الخطة.

## قلها في العمل

- Let's check the EXPLAIN plan for this query to see why it is doing a sequential scan instead of using our new index.
  - دعنا نتحقق من خطة التنفيذ (EXPLAIN plan) لهذا الاستعلام لنرى لماذا يقوم بمسح تسلسلي بدلاً من استخدام فهرسنا الجديد.
- I attached the EXPLAIN plan output to the ticket so we can review the join bottlenecks together.
  - لقد أرفقت مخرجات خطة التنفيذ بالتذكرة حتى نتمكن من مراجعة اختناقات عمليات الربط معاً.
