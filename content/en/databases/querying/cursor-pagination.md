---
id: cursor-pagination
category: databases
subcategory: querying
level: intermediate
related: [pagination, index]
term: "Cursor Pagination"
pronunciation: "KUR-ser paj-ih-NAY-shun"
keywords: ["faster than offset pagination","infinite scroll database technique","paging using last item pointer","avoiding offset performance issues","keyset pagination implementation","fetching next page with cursor","stable pagination for large datasets","cursor based data fetching","pagination without skip offset","efficient database record navigation","بديل ترقيم الصفحات التقليدي","طريقة ترقيم الصفحات السريعة","جلب البيانات باستخدام المؤشر","تجنب بطء التصفح في الجداول","الترقيم المعتمد على القيمة","تحسين أداء التمرير اللانهائي","استخدام كيرسور في الاستعلامات","تصفح البيانات بدون استخدام أوفست","طريقة الترقيم بالمؤشر","جلب السجلات التالية برمجيا"]
---
## Definition

Paging by remembering the last item you saw (a cursor) instead of page numbers. It stays fast and stable on large, changing data.

## Where you hear it

Infinite scroll feeds and large tables.

## Examples

- We moved to cursor pagination because deep pages were slow.
- Send the `cursor` from the last response to get the next page.

## Common mistake

Using `OFFSET 100000`. The database still scans and skips every earlier row.

## Don't confuse with

Cursor pagination uses a unique pointer to fetch the next set of records, while offset pagination skips a specific number of rows, making it much slower on large datasets.

## Say it at work

- Let us switch this API to cursor pagination so the infinite scroll does not lag when users reach the bottom.
- Please ensure that all the sorting keys are unique to prevent data loss or duplication when using cursor pagination.
