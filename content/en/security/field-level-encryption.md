---
id: field-level-encryption
category: security
level: intermediate
related: [encryption, pii]
term: "Field-Level Encryption"
pronunciation: "FEELD-LEV-ul en-KRIP-shun"
---
## Definition

Encrypting only the sensitive columns, like a national ID, instead of the whole database. Even with database access, they stay unreadable.

## Where you hear it

Healthcare, finance, and any system with personal data.

## Examples

- We apply field-level encryption to phone numbers and national IDs.
- You need the key to search by that column.

## Common mistake

Encrypting a field and then printing it in plain text in logs or error messages.
