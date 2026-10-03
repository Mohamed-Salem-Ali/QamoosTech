---
id: index
category: databases
level: intermediate
related: [query, table-row-column]
term: "Index"
pronunciation: "IN-deks"
keywords: ["speed up database queries","make database lookups faster","database search optimization tool","find table rows quickly","improve read performance","database indexing structure","avoid slow select queries","speed up foreign key joins","database search key","indix","indeks","database lookup optimization","تسريع استعلامات قاعدة البيانات","تحسين سرعة البحث في الجداول","فهرسة أعمدة قاعدة البيانات","أداة لتسريع جلب البيانات","إنديكس","طريقة لتسريع البحث في الجداول","تقليل وقت تنفيذ الاستعلامات","تحسين أداء قاعدة البيانات","فهرس قاعدة البيانات","تسريع عمليات القراءة"]
---
## Definition

A structure the database keeps so it can find rows quickly, like the index at the back of a book.

## Where you hear it

Query optimization and migration reviews.

## Examples

- Add an index on `email` to speed up the login query.
- Too many indexes slow down writes.

## Common mistake

Adding an index to every column. Each index costs space and makes inserts slower.

## Say it at work

- We should check if adding an index on this foreign key helps with the slow join.
- Please ensure that the new migration includes the required index for the status column.
