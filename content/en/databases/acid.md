---
id: acid
category: databases
level: intermediate
related: [database, transaction]
term: "ACID"
pronunciation: "A-SID"
---

## Definition

ACID is a set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee database transactions are processed reliably. It ensures that even in the event of errors or power failures, data remains accurate and consistent.

## Where you hear it

During database architecture discussions, when choosing a database engine, or when designing systems that require high data integrity.

## Examples

- We chose a relational database because our financial records require ACID compliance.
- The system ensures ACID properties to prevent partial data updates during a transaction.

## Common mistake

Thinking that all databases are ACID-compliant by default; many NoSQL databases prioritize performance or availability over strict ACID guarantees.
