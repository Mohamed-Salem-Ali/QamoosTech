---
id: acid
category: databases
subcategory: transactions
level: intermediate
related: [database, transaction]
term: "ACID"
pronunciation: "A-SID"
keywords: ["database transaction reliability","ensure data integrity in db","atomic consistent isolated durable","prevent partial database updates","guarantee reliable database operations","acid properties explained","sql transaction safety","database compliance standards","acidity database concept","data consistency in transactions","ضمان سلامة معاملات قاعدة البيانات","خصائص الذرية والاتساق والعزل والمتانة","منع تحديثات البيانات الجزئية","معايير موثوقية قواعد البيانات","كيف تضمن اتساق البيانات","مفهوم أسيد في قواعد البيانات","ضمانات المعاملات المالية في البرمجة","خصائص قواعد البيانات العلائقية","الفرق بين قواعد البيانات الموثوقة","معايير الامتثال في قواعد البيانات"]
---

## Definition

ACID is a set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably. It ensures that even in the event of errors or power failures, data remains accurate and consistent.

## Where you hear it

During database architecture discussions, when choosing a database engine, or when designing systems that require high data integrity.

## Examples

- We chose a relational database because our financial records require ACID compliance.
- The system ensures ACID properties to prevent partial data updates during a transaction.
- The transfer runs in one transaction, so money leaves one account only when it arrives in the other.

## Common mistake

Thinking that all databases are ACID-compliant by default; many NoSQL databases prioritize performance or availability over strict ACID guarantees.

## Say it at work

- Let us make sure the new payment service supports ACID transactions before we move forward.
- Please verify that the database configuration guarantees ACID compliance for all critical financial logs.
