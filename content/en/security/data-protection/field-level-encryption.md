---
id: field-level-encryption
category: security
subcategory: data-protection
level: intermediate
related: [encryption, pii]
term: "Field-Level Encryption"
pronunciation: "FEELD-LEV-ul en-KRIP-shun"
keywords: ["encrypt specific database columns","encrypting sensitive user data columns","protect personal data in database","column level encryption","encrypt specific fields in database","hide sensitive database columns","application layer encryption","pii encryption in database","field level encryption","encrypt credit card numbers column","تشفير أعمدة قاعدة البيانات الحساسة","تشفير البيانات الشخصية في القاعدة","حماية البيانات الحساسة في الأعمدة","التشفير على مستوى العمود","تشفير الحقول في قاعدة البيانات","إخفاء البيانات الشخصية بالتشفير","تشفير رقم الهواتف في القاعدة","التشفير على مستوى الحقل","فيلد ليفل إنكريبشن"]
---
## Definition

Encrypting only the sensitive columns, like a national ID, instead of the whole database. Even with database access, they stay unreadable.

## Where you hear it

Healthcare, finance, and any system with personal data.

## Examples

- We apply field-level encryption to phone numbers and national IDs.
- You need the key to search by that column.
- Only the national ID column is encrypted, so the rest of the table stays searchable.

## Common mistake

Encrypting a field and then printing it in plain text in logs or error messages.

## Don't confuse with

Field-level encryption encrypts specific columns at the application layer, while transparent data encryption encrypts the entire database file automatically at the storage layer.

## Say it at work

- Can we use field-level encryption for the credit card numbers in the payload?
- Please ensure that field-level encryption is applied to all personally identifiable information before storing it in the database.
