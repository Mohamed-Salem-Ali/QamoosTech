---
id: immutable
category: architecture
level: intermediate
related: [event-driven, audit-logging]
term: "Immutable"
pronunciation: "ih-MYOO-tuh-bul"
---
## Definition

Something that cannot be changed after it is created. To "change" it, you create a new version.

## Where you hear it

Functional programming, audit logs, and financial records.

## Examples

- Ledger entries are immutable; a mistake is fixed with a correcting entry.
- Use immutable data to avoid surprising side effects.

## Common mistake

Changing an object "just once" when others share it. Shared mutable data is a common source of bugs.
