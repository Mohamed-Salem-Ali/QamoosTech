---
id: transaction
category: databases
subcategory: transactions
level: intermediate
related: [database, idempotency]
term: "Transaction"
pronunciation: "tran-ZAK-shun"
keywords: ["atomic database operations","all or nothing updates","ensure data consistency","commit or rollback changes","prevent partial database updates","database unit of work","multi step operation safety","acid compliant database changes","grouping sql queries together","transection spelling","db transaction block","عمليات قاعدة البيانات الذرية","ضمان نجاح التحديثات بالكامل","تنفيذ مجموعة عمليات متكاملة","التراجع عن التغييرات الخاطئة","معاملات قاعدة البيانات","تجنب تحديث البيانات جزئيا","مجموعة أوامر sql مترابطة","ترانزاكشن في قاعدة البيانات","اعتماد التغييرات أو إلغاؤها","ضمان اتساق البيانات","مبدأ الكل أو لا شيء"]
---
## Definition

A group of database changes that either all succeed or all fail together, so data is never left half-updated.

## Where you hear it

Payments, transfers, and any multi-step update.

## Examples

- Wrap both updates in a transaction so money is never lost.
- The transaction was rolled back after the error.

## Common mistake

Keeping a transaction open while calling an external API. It locks rows and slows everyone down.

## Don't confuse with

A transaction ensures data integrity through ACID properties for a specific sequence of operations, whereas a batch processes a large volume of data records in bulk without necessarily requiring real-time consistency.

## Say it at work

- Let's make sure this entire registration flow runs inside a single transaction so we don't end up with orphan records.
- Please ensure that the database transaction is properly committed or rolled back at the end of the request lifecycle.
