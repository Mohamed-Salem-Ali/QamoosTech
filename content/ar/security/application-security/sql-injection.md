---
id: sql-injection
category: security
subcategory: application-security
level: beginner
related: [vulnerability, database, query]
term: "SQL Injection (SQLi)"
translation: "حقن إس كيو إل"
pronunciation: "إس كيُو إل إِنْجيكشِن"
keywords: ["ثغرة حقن قواعد البيانات","اختراق قاعدة البيانات عبر المدخلات","حقن إس كيو إل","تجاوز تسجيل الدخول بثغرة","تأمين المدخلات ضد الاختراق","منع حقن قاعدة البيانات","استخدام الاستعلامات المجهزة","ثغرة sqli الأمنية","دمج النصوص في الاستعلامات","hack database via input form","sqli vulnerability","sql injection","bypass login with quotes","malicious sql query execution","unsafe string concatenation in queries","sanitize user input for database","prevent database hacking attacks","use prepared statements","parameterized queries"]
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
- Escaping quotes by hand is not enough to stop SQL injection; use parameters instead.
  - لا يكفي تهريب علامات الاقتباس يدوياً لمنع حقن SQL، فاستخدم المعاملات بدلاً من ذلك.

## خطأ شائع

الوثوق ببيانات المستخدمين ودمج النصوص مباشرة داخل جمل SQL بدلاً من استخدام الاستعلامات المُجهزة أو أداة ربط الكائنات بقواعد البيانات (ORM).

## لا تخلطه مع

غالباً ما يتم الخلط بين حقن SQL وهجمات البرمجة عبر المواقع (XSS)؛ فبينما يستهدف حقن SQL طبقة قاعدة البيانات، يستهدف XSS متصفح المستخدم عبر حقن سكربتات خبيثة في صفحات الويب.

## قلها في العمل

- We need to make sure all these input fields are sanitized to avoid any potential SQL injection risks.
  - نحتاج للتأكد من تنقية جميع حقول الإدخال هذه لتجنب أي مخاطر محتملة لحقن SQL.
- I have updated the code to use prepared statements, which effectively mitigates the SQL injection vulnerability found in the previous module.
  - لقد قمت بتحديث الكود لاستخدام الاستعلامات المُجهزة، مما يعالج بشكل فعال ثغرة حقن SQL التي تم العثور عليها في الوحدة السابقة.
