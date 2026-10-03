---
id: transaction
category: databases
level: intermediate
related: [database, idempotency]
term: "Transaction"
pronunciation: "tran-ZAK-shun"
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
