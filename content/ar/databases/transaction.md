---
id: transaction
category: databases
level: intermediate
related: [database, idempotency]
term: "Transaction"
translation: "معاملة"
pronunciation: "ترانزاكشن"
---
## التعريف

مجموعة تغييرات في قاعدة البيانات إمّا تنجح كلها أو تفشل كلها، فلا تبقى البيانات محدّثة جزئيًا.

## أين تسمعه؟

المدفوعات، والتحويلات، وأي تحديث متعدد الخطوات.

## أمثلة

- Wrap both updates in a transaction so money is never lost.
  - ضع التحديثين داخل transaction حتى لا يضيع المال أبدًا.
- The transaction was rolled back after the error.
  - تم التراجع عن الـ transaction بعد الخطأ.

## خطأ شائع

ترك الـ transaction مفتوحة أثناء استدعاء API خارجي. هذا يقفل الصفوف ويبطّئ الجميع.
