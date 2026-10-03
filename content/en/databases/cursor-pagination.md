---
id: cursor-pagination
category: databases
level: intermediate
related: [pagination, index]
term: "Cursor Pagination"
pronunciation: "KUR-ser paj-ih-NAY-shun"
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
