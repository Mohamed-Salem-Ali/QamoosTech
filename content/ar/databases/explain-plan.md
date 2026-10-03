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
