---
id: sql-injection
category: security
level: beginner
related: [vulnerability, database, query]
term: "SQL Injection (SQLi)"
translation: "حقن إس كيو إل"
pronunciation: "إس كيُو إل إِنْجيكشِن"
---

## التعريف

ثغرة أمنية تحدث عندما يتم التعامل مع مدخلات المستخدم بشكل خاطئ وتنفيذها كجزء من استعلام قاعدة البيانات، مما قد يسمح للمهاجمين بقراءة البيانات الحساسة أو تعديلها أو حذفها.

## أين تسمعه؟

في عمليات التدقيق الأمني، وتقارير اختبار الاختراق، وأثناء مراجعة الكود البرمجي للتحقق من صحة المدخلات.

## أمثلة

- The attacker exploited an SQL injection vulnerability in the login form to bypass authentication.
  - استغل المهاجم ثغرة حقن إس كيو إل في نموذج تسجيل الدخول لتجاوز المصادقة.
- Always use parameterized queries to prevent SQL injection in your application.
  - احرص دائماً على استخدام الاستعلامات ذات المعاملات لمنع حقن إس كيو إل في تطبيقك.

## خطأ شائع

الوثوق ببيانات المستخدمين ودمج النصوص مباشرة داخل جمل SQL بدلاً من استخدام الاستعلامات المُجهزة أو أداة ربط الكائنات بقواعد البيانات (ORM).
